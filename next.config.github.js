/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/coi_calc',  // Your GitHub repo name - change this to match your repo
  assetPrefix: '/coi_calc/',
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: 'true',
    NEXT_PUBLIC_BASE_PATH: '/coi_calc'
  }
}

module.exports = nextConfig 