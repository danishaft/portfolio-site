import { withPrefix } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

type HoverPreviewProps = {
  anchorRect: DOMRect | null
  previewUrl: string | null
  title?: string
}

const SPRING = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
}

const HoverPreview = ({ anchorRect, previewUrl, title }: HoverPreviewProps): React.ReactElement | null => {
  if (!anchorRect || !previewUrl) return null

  const top = anchorRect.top
  // Match looskie: anchorRect.right + 12
  const left = anchorRect.right + 12
  const src = previewUrl ? withPrefix(previewUrl) : null

  return (
    <AnimatePresence>
      {previewUrl ? (
        <motion.div
          key={previewUrl}
          layoutId="hover-preview"
          initial={{ opacity: 0, filter: "blur(4px)", x: -4 }}
          animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
          exit={{ opacity: 0, filter: "blur(4px)", x: -4 }}
          transition={SPRING}
          style={{
            position: "fixed",
            top,
            left,
            width: 320,
            pointerEvents: "none",
            zIndex: 40,
          }}
          aria-hidden="true"
        >
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 10",
                overflow: "hidden",
                background: "var(--background)",
              }}
            >
              <img
                alt={title ? `Preview of ${title}` : ""}
                src={src ?? previewUrl}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                loading="eager"
              />
            </div>
            {title ? (
              <div
                style={{
                  padding: "10px 12px",
                  fontSize: 13,
                  color: "var(--muted)",
                  borderTop: "1px solid var(--border)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  background: "var(--surface)",
                }}
              >
                {title}
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default HoverPreview
