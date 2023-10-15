
/** @type {import('next').NextConfig} */
// const nextConfig = {reactStrictMode: false}
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['booking.tayyurt-surf.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true, // You can include other experimental options here if needed
    // ...
  },
}