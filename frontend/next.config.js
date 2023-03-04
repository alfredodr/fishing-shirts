/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
      return [
          {
              source: '/api/products/:slug*',
              destination: 'http://localhost:5000/api/products/:slug*'
          },
      ]
  },
}