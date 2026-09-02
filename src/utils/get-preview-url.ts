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
  // No fallback preview dir — return null so hover shows pill only, no broken img
  // (previews dir does not exist; use cover only)
  return null
}

export function getPreviewUrlForPost(post: {
  fields: { slug: string }
  frontmatter: { cover?: { publicURL?: string | null } | null }
}): string | null {
  return getPreviewUrl(post.fields.slug, post.frontmatter.cover?.publicURL ?? null)
}
