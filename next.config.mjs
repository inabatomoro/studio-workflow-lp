/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/studio-workflow-lp',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/studio-workflow-lp',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
