// eslint-disable-next-line import/no-extraneous-dependencies

import * as path from "node:path"
import type { CreateNodeArgs, CreatePagesArgs } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import { routes } from "./src/constants/routes"
import { projects } from "./src/data/projects"

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

async function createProjectPages(args: CreatePagesArgs): Promise<void> {
  const { actions } = args
  const { createPage } = actions
  projects.forEach((project) => {
    createPage({
      path: `${routes.projects.path}/${project.id}`,
      component: path.resolve("./src/templates/Project.tsx"),
      context: {
        projectID: project.id,
      },
    })
  })
}

export async function createPages(args: CreatePagesArgs): Promise<void> {
  await createPostPages(args)
  await createProjectPages(args)
}
