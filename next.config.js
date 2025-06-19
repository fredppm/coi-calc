/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',          // Commented out for local development
  // trailingSlash: true,       // Not needed for local dev
  // basePath: '/coi-calc',     // Not needed for local dev
  // assetPrefix: '/coi-calc/', // Not needed for local dev
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 