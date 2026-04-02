/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreEmailErrors: true,
    ignoreBuildErrors: true,
  },
}

export default nextConfig
