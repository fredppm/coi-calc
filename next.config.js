/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export and basePath for GitHub Pages deployment
  ...(process.env.GITHUB_ACTIONS && {
    output: 'export',
    trailingSlash: true
  }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 