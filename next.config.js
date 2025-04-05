/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'github.com', 'avatars.githubusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 