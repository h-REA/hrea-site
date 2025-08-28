# hREA Website

The official website for hREA (Holochain Resource-Event-Agent), built with Gatsby and TypeScript.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your system. We recommend using Node Version Manager (nvm) for easy Node.js version management.

#### Installing Node.js with nvm

1. **Install nvm** (if you haven't already):

   Follow the installation instructions at:
   https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

   ```bash
   # After installation, restart your terminal or run:
   source ~/.bashrc
   ```

2. **Install and use the latest LTS Node.js version**:

   ```bash
   # Install the latest LTS version of Node.js
   nvm install --lts

   # Use the LTS version
   nvm use --lts

   # Verify installation
   node --version
   npm --version
   ```

### Project Setup

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <repository-url>
   cd hrea-site
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The site will be available at `http://localhost:8000`

   🎉 **That's it!** Your development environment is now ready.

## 🛠️ Development

### Available Scripts

- `npm start` or `npm run develop` - Start the development server with hot reloading
- `npm run build` - Build the site for production
- `npm run serve` - Serve the production build locally
- `npm run clean` - Clean the Gatsby cache and public folders
- `npm run typecheck` - Run TypeScript type checking

### Project Structure

```
src/
├── pages/           # Website pages (auto-generates routes)
│   ├── index.tsx    # Homepage (/)
│   └── 404.tsx      # 404 error page
├── components/      # Reusable React components
├── images/          # Static images
├── svgs/           # SVG icons and graphics
├── fonts/          # Custom fonts
└── global.scss     # Global styles
```

### Modifying Content

#### Adding/Editing Pages

- **Homepage**: Edit `src/pages/index.tsx` to modify the homepage content
- **New pages**: Create new `.tsx` files in `src/pages/` - they'll automatically become routes
  - Example: `src/pages/about.tsx` becomes `/about`
  - Example: `src/pages/contact.tsx` becomes `/contact`

#### Live Development

When you run `npm start`, Gatsby provides:

- **Hot reloading**: Changes to pages and components are reflected instantly
- **GraphQL playground**: Available at `http://localhost:8000/___graphql`
- **Error overlay**: Detailed error information displayed in the browser

#### Making Changes

1. **Edit content**: Modify files in `src/pages/` or `src/components/`
2. **Save the file**: Changes are automatically detected
3. **View updates**: Your browser will refresh automatically to show the changes

### Styling

- **Global styles**: Edit `src/global.scss`
- **Component styles**: Each component has its own `.scss` file
- **SASS support**: The project uses SASS for enhanced CSS capabilities

### Adding Images

Place images in `src/images/` and import them in your components using Gatsby's image processing capabilities.

## 📚 Learn More

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SASS Documentation](https://sass-lang.com/documentation)
