import React from "react"

type HoverPreviewProps = {
  anchorRect: DOMRect | null
  previewUrl: string | null
  title?: string
}

const HoverPreview = ({
  anchorRect,
  previewUrl,
  title,
}: HoverPreviewProps): React.ReactElement | null => {
  if (!anchorRect) return null

  const top = anchorRect.top
  // Match looskie: anchorRect.right + 12
  const left = anchorRect.right + 12

  const [imgError, setImgError] = React.useState(false)
  React.useEffect(() => setImgError(false), [previewUrl])

  const src = previewUrl

  return (
    <div
      className="hover-preview"
      style={{
        position: "fixed",
        top,
        left,
        width: 320,
        pointerEvents: "none",
        zIndex: 40,
      }}
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
            background: previewUrl ? "var(--background)" : "var(--muted)",
          }}
        >
          {previewUrl && !imgError ? (
            <img
              alt={title ? `Preview of ${title}` : ""}
              src={src ?? undefined}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="eager"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--muted)",
                fontSize: 12,
              }}
            >
              {title ? `Preview of ${title}` : "No preview"}
            </div>
          )}
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
    </div>
  )
}

export default HoverPreview
