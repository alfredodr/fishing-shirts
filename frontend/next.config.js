/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fsn-site.s3.amazonaws.com", "images-na.ssl-images-amazon.com", "m.media-amazon.com"],
  },
  
}

module.exports = nextConfig

