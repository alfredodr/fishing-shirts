const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fsn-site.s3.amazonaws.com", "images-na.ssl-images-amazon.com", "m.media-amazon.com"],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)

