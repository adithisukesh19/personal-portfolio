/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/personal-portfolio',
  assetPrefix: '/personal-portfolio/',
}
export default nextConfig