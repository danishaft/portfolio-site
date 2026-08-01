# Ejeh Daniel's portfolio

This repository contains Ejeh Daniel's portfolio and technical writing. The
site presents selected product work, open-source projects, work history, and a
printable resume.

**Live site:** [danishaft.github.io/portfolio-site](https://danishaft.github.io/portfolio-site)

## What is included

The site has dedicated routes for the material a reviewer needs:

- `/work` documents professional work at Doow.
- `/projects` presents selected projects and evidence-backed project details.
- `/articles` publishes long-form writing from MDX files.
- `/` introduces Daniel and routes readers to the deeper sections.
- `/about` tells Daniel's fuller story and links to his public profiles.
- `/resume` provides a browser-readable and printable resume.

The featured projects are REAPER MCP, StemSplitter, and Peruz. Project facts
come from the corresponding implementations and documentation rather than from
generic portfolio copy.

## Technology

The site uses Gatsby 5, React 18, TypeScript, MDX, and plain CSS. Biome formats
and checks source files, and TypeScript checks the application before each
deployment.

## Local development

You need Node.js 22 and npm 10 or later.

1. Install the dependencies:

   ```bash
   npm ci
   ```

2. Start Gatsby:

   ```bash
   npm run develop
   ```

3. Open `http://localhost:8000`.

Run the complete local check before publishing:

```bash
npm run check
```

## Project structure

The application keeps content, route composition, and shared presentation
separate:

```text
portfolio-site/
|-- src/
|   |-- components/     Shared layout and presentation components
|   |-- data/           Project, work, and site metadata
|   |-- pages/          Gatsby route entry points
|   |-- posts/          MDX articles and article media
|   |-- styles/         Global visual system and article styles
|   |-- templates/      Project and article detail templates
|   `-- types/          Content model types
|-- static/             Resume, social preview, and project media
|-- gatsby-config.ts    Plugins, metadata, path prefix, and RSS feed
`-- gatsby-node.ts      Project and article page generation
```

## Content updates

Edit `src/data/work.ts` for work history and `src/data/projects.ts` for project
details. Add articles as MDX files under `src/posts/`. Keep claims specific and
traceable to shipped work or repository evidence.

## Deployment

The `CI` GitHub Actions workflow checks pull requests and publishes `main` to
GitHub Pages. It installs the locked dependencies, runs Biome, runs TypeScript,
builds the prefixed Gatsby site, and deploys the generated `public` directory
through the GitHub Pages artifact API. The workflow uses the repository's
short-lived `GITHUB_TOKEN`; it does not require a personal access token.

## License

This project uses the [0BSD license](LICENSE).
