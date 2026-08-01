// eslint-disable-next-line import/no-extraneous-dependencies

import * as path from "node:path"
import type { CreateNodeArgs, CreatePagesArgs } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import { routes } from "./src/constants/routes"

export function onCreateNode(args: CreateNodeArgs): void {
  // Create a slug field for markdown post nodes.
  const { actions, node, getNode } = args
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: routes.writing.path + slug,
    })
  }
}

type CreatePostPagesQuery = {
  data?: {
    allMdx?: {
      nodes?: Array<{
        fields?: { slug?: string }
        internal?: { contentFilePath?: string }
      }>
    }
  }
}

async function createPostPages(args: CreatePagesArgs): Promise<void> {
  const { actions, graphql } = args
  const { createPage } = actions
  const result: CreatePostPagesQuery = await graphql(`
    query CreatePostPagesQuery {
      allMdx {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  ;(result?.data?.allMdx?.nodes || []).forEach((node) => {
    if (!node.fields?.slug || !node.internal?.contentFilePath) {
      return
    }
    createPage({
      path: node.fields.slug,
      component: `${path.resolve(
        "./src/templates/Post.tsx"
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

export async function createPages(args: CreatePagesArgs): Promise<void> {
  await createPostPages(args)
}
