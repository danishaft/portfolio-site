// Adapted from looskie/website src/utils/get-preview-url.ts
// Original: item.image ? `/images/${image}` : `/images/previews/${slug}.png`
// For Gatsby articles: prefer cover publicURL, fallback to preview by slug

export function getPreviewUrl(
  slug: string,
  coverPublicUrl?: string | null
): string | null {
  if (coverPublicUrl) {
    return coverPublicUrl
  }
  if (!slug) return null
  // Normalize slug: /articles/how-computers-work/ -> how-computers-work
  const clean = slug.replace(/^\/|\/$/g, "").split("/").pop()
  if (!clean) return null
  return `/images/previews/${clean}.png`
}

export function getPreviewUrlForPost(post: {
  fields: { slug: string }
  frontmatter: { cover?: { publicURL?: string | null } | null }
}): string | null {
  return getPreviewUrl(post.fields.slug, post.frontmatter.cover?.publicURL ?? null)
}
