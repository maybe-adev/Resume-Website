import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'encrypted-tbn0.gstatic.com'],
  },
};

module.exports = {
  distDir: "build",
};

export default nextConfig;
