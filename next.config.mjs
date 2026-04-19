/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/studio-workflow-lp',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
