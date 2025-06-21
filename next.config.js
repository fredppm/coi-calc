/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages deployment
  ...(process.env.GITHUB_PAGES && {
    output: 'export',
    trailingSlash: true,
    basePath: process.env.BASE_PATH || '',
  }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 