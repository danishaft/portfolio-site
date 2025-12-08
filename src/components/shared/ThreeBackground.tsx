import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

type GeometryType = 'network' | 'flux' | 'matrix' | 'orbit';

type ThreeBackgroundProps = {
  geometryType?: GeometryType;
  accentColor?: string;
  className?: string;
};

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  geometryType = 'network',
  accentColor = '#4CC9F0',
  className = '',
}) => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const activeMeshRef = useRef<THREE.LineSegments | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const [currentGeometry, setCurrentGeometry] = useState<GeometryType>(geometryType);
  const [currentAccent, setCurrentAccent] = useState(accentColor);

  // Initialize Three.js scene
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(
      isLightMode ? 0xf0f4f8 : 0x050505,
      0.002
    );
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);
    rendererRef.current = renderer;

    // Particle system
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 150 : 300;

    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const pColors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40;
      pColors[i] = 1;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: new THREE.Color(isLightMode ? 0x333333 : 0xffffff),
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(pGeo, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Line material for wireframe
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(currentAccent),
      transparent: true,
      opacity: isLightMode ? 0.3 : 0.15,
    });

    // Function to create geometry
    const createGeometry = (shape: GeometryType): THREE.LineSegments => {
      let geo: THREE.BufferGeometry;

      switch (shape) {
        case 'network':
          geo = new THREE.IcosahedronGeometry(10, 2);
          break;
        case 'flux':
          geo = new THREE.TorusKnotGeometry(8, 2, 100, 16);
          break;
        case 'matrix':
          geo = new THREE.BoxGeometry(15, 15, 15, 8, 8, 8);
          break;
        case 'orbit':
          geo = new THREE.SphereGeometry(10, 32, 32);
          break;
        default:
          geo = new THREE.IcosahedronGeometry(10, 2);
      }

      const wireframe = new THREE.WireframeGeometry(geo);
      const mesh = new THREE.LineSegments(wireframe, lineMaterial);
      mesh.rotation.z = 0.5;
      return mesh;
    };

    // Add initial geometry
    const initialMesh = createGeometry(currentGeometry);
    scene.add(initialMesh);
    activeMeshRef.current = initialMesh;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      };
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;
        particlesRef.current.rotation.x += 0.0005;
      }

      if (activeMeshRef.current) {
        activeMeshRef.current.rotation.y -= 0.001;
        activeMeshRef.current.rotation.x -= 0.0005;
      }

      if (cameraRef.current) {
        const { x, y } = mousePositionRef.current;
        cameraRef.current.position.x += (x * 0.005 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (-y * 0.005 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(scene.position);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      } else {
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      // Dispose of geometries and materials
      if (activeMeshRef.current) {
        activeMeshRef.current.geometry.dispose();
        if (activeMeshRef.current.material instanceof THREE.Material) {
          activeMeshRef.current.material.dispose();
        }
      }

      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        if (particlesRef.current.material instanceof THREE.Material) {
          particlesRef.current.material.dispose();
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []); // Only run once on mount

  // Update geometry when geometryType changes
  useEffect(() => {
    if (typeof window === 'undefined' || !sceneRef.current || currentGeometry === geometryType) return;

    // Remove old mesh
    if (activeMeshRef.current) {
      sceneRef.current.remove(activeMeshRef.current);
      activeMeshRef.current.geometry.dispose();
      if (activeMeshRef.current.material instanceof THREE.Material) {
        activeMeshRef.current.material.dispose();
      }
    }

    // Create new geometry
    let geo: THREE.BufferGeometry;
    switch (geometryType) {
      case 'network':
        geo = new THREE.IcosahedronGeometry(10, 2);
        break;
      case 'flux':
        geo = new THREE.TorusKnotGeometry(8, 2, 100, 16);
        break;
      case 'matrix':
        geo = new THREE.BoxGeometry(15, 15, 15, 8, 8, 8);
        break;
      case 'orbit':
        geo = new THREE.SphereGeometry(10, 32, 32);
        break;
      default:
        geo = new THREE.IcosahedronGeometry(10, 2);
    }

    const wireframe = new THREE.WireframeGeometry(geo);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(currentAccent),
      transparent: true,
      opacity: isLightMode ? 0.3 : 0.15,
    });

    const newMesh = new THREE.LineSegments(wireframe, lineMaterial);
    newMesh.rotation.z = 0.5;
    sceneRef.current.add(newMesh);
    activeMeshRef.current = newMesh;
    setCurrentGeometry(geometryType);
  }, [geometryType, currentAccent, isLightMode]);

  // Update colors when accentColor or isLightMode changes
  useEffect(() => {
    if (typeof window === 'undefined' || !sceneRef.current || !activeMeshRef.current) return;

    // Update line material color
    if (activeMeshRef.current.material instanceof THREE.LineBasicMaterial) {
      activeMeshRef.current.material.color.set(accentColor);
      activeMeshRef.current.material.opacity = isLightMode ? 0.3 : 0.15;
    }

    // Update particle material
    if (particlesRef.current && particlesRef.current.material instanceof THREE.PointsMaterial) {
      particlesRef.current.material.color.set(isLightMode ? 0x333333 : 0xffffff);
    }

    // Update fog
    if (sceneRef.current.fog instanceof THREE.FogExp2) {
      sceneRef.current.fog.color.set(isLightMode ? 0xf0f4f8 : 0x050505);
    }

    setCurrentAccent(accentColor);
  }, [accentColor, isLightMode]);

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className={className}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: isLightMode ? 0.3 : 0.6,
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease',
      }}
    />
  );
};

export default ThreeBackground;

