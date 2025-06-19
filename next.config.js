/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export only for GitHub Pages deployment
  ...(process.env.GITHUB_ACTIONS && {
    output: 'export',
    trailingSlash: true,
    basePath: '/coi-calc',
    assetPrefix: '/coi-calc/',
  }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 