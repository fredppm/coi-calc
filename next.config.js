/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/coi-calc',
  assetPrefix: '/coi-calc/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 