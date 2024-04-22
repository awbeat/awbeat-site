/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {

    ignoreDuringBuilds: true
  },
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
}

module.exports = nextConfig;
