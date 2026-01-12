# Ejeh Daniel - Portfolio Website

A modern, responsive portfolio website built with Gatsby, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, technology showcase with avatars, contact form integration, and automated deployment via GitHub Actions.

🌐 **Live Site:** [https://danishaft.github.io/portfolio-site](https://danishaft.github.io/portfolio-site)

## ✨ Features

- **Modern Tech Stack**: Built with Gatsby, React, TypeScript, and Tailwind CSS
- **Technology Showcase**: Display technologies with logos/avatars in categorized sections
- **Contact Form**: Integrated with Formspree for easy contact management
- **Blog/Articles**: MDX-based blog system for writing technical articles
- **Projects Portfolio**: Showcase your projects with filtering and sorting
- **Dark Mode**: Full dark mode support with theme switching
- **RSS Feed**: Automatic RSS feed generation for blog posts
- **Responsive Design**: Fully responsive and mobile-friendly
- **CI/CD**: Automated deployment to GitHub Pages via GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/danishaft/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```bash
   GATSBY_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

   Replace `YOUR_FORM_ID` with your Formspree form ID. You can get one by signing up at [formspree.io](https://formspree.io).

4. **Start development server**

   ```bash
   npm run develop
   # or
   yarn develop
   ```

   Your site will be available at `http://localhost:8000`

## 📝 Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build production site
- `npm run serve` - Serve production build locally
- `npm run lint` - Check code formatting with Prettier
- `npm run format` - Format code with Prettier
- `npm run type` - Run TypeScript type checking
- `npm run clean` - Clean Gatsby cache

## 🏗️ Project Structure

```
portfolio-site/
├── src/
│   ├── components/        # React components
│   │   ├── elements/     # Page-specific components
│   │   ├── layouts/       # Layout components
│   │   ├── screens/       # Screen/page components
│   │   └── shared/        # Reusable UI components
│   ├── data/              # Static data (profile, projects, etc.)
│   ├── images/            # Image assets
│   ├── pages/             # Gatsby pages
│   ├── posts/             # MDX blog posts
│   ├── styles/            # Global styles
│   ├── templates/         # Page templates
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── gatsby-config.ts       # Gatsby configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Customizing Your Portfolio

1. **Profile Information**: Edit `src/data/profile.ts`

   - Update personal information
   - Add/remove skill categories
   - Modify work experience

2. **Projects**: Edit `src/data/projects.ts`

   - Add your projects
   - Update project details

3. **Social Links**: Edit `src/data/socialLinks.ts`

   - Add/remove social media links

4. **Site Metadata**: Edit `src/constants/siteMeta.ts`
   - Update site title, description, and URL

### Adding Technology Logos

Technology logos are automatically fetched from CDN. To add custom logos:

1. Add logo images to `src/images/` directory
2. Update the `getTechLogo` function in `src/components/shared/Tags.tsx`
3. Or add images directly to skill entries in `src/data/profile.ts`:

```typescript
{
  name: "Your Technology",
  image: {
    srcPath: "path/to/logo.png",
    caption: "Your Technology Logo"
  }
}
```

## 🚢 Deployment

### GitHub Pages (Current Setup)

The site is automatically deployed to GitHub Pages via GitHub Actions when you push to the `main` branch.

**Required GitHub Secrets:**

- `GATSBY_FORMSPREE_ENDPOINT`: Your Formspree endpoint URL
- `ACTIONS_DEPLOY_ACCESS_TOKEN`: GitHub token with repo permissions

**Setup:**

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add the required secrets
3. Push to `main` branch - deployment happens automatically

The site will be available at: `https://YOUR_USERNAME.github.io/portfolio-site`

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🛠️ Tech Stack

- **Framework**: [Gatsby](https://www.gatsbyjs.com/) v5
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Forms**: [Formspree](https://formspree.io/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **3D Background**: [Three.js](https://threejs.org/)

## 📄 License

This project is licensed under the 0BSD license.

## 👤 Author

**Ejeh Daniel**

- Website: [https://danishaft.github.io/portfolio-site](https://danishaft.github.io/portfolio-site)
- LinkedIn: [Ejeh Daniel](https://www.linkedin.com/in/ejeh-daniel-482409190/)
- GitHub: [@danishaft](https://github.com/danishaft)
- Twitter: [@EjehAy_Daniel](https://x.com/EjehAy_Daniel)

---

Built with ❤️ using Gatsby
