import React, { useEffect, useRef } from "react"
import { Gradient } from "../../utils/Gradient"
import { useTheme } from "./ThemeProvider"

const MeshBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    if (!canvasRef.current) return

    const gradient = new Gradient()
    // @ts-ignore
    gradient.initGradient("#gradient-canvas")

    return () => {
      gradient.disconnect()
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        id="gradient-canvas"
        ref={canvasRef}
        className="w-full h-full"
        style={{
          opacity: isDark ? 0.8 : 0.5,
          transition: "opacity 0.5s ease",
          // The CSS variables are picked up by the Gradient class
          ["--gradient-color-1" as any]: "#1f9ea3",
          ["--gradient-color-2" as any]: "#f8bd97",
          ["--gradient-color-3" as any]: "#9e5428",
          ["--gradient-color-4" as any]: "#3b0102",
        }}
        data-transition-in
      />
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: isDark
            ? "rgba(10, 10, 10, 0.6)" // Slightly darker for dark mode contrast
            : "rgba(255, 255, 255, 0.3)", // Lighter for light mode
          transition: "background 0.5s ease",
        }}
      />
    </div>
  )
}

export default MeshBackground
