const withMDX = require("@next/mdx")({
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
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fsn-site.s3.amazonaws.com",
      "images-na.ssl-images-amazon.com",
      "m.media-amazon.com",
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/wp/wp-content/plugins/rwwipru/ss/citii/ON/com/Login.html",
        destination: "https://fishingshirtsnow.com/store/",
        permanent: true,
      },
      {
        source: "/wp/wp-content/plugins/rwwipru/ss/2020citii.zip",
        destination: "https://fishingshirtsnow.com/store/",
        permanent: true,
      },
      {
        source: "/wp/wp-content/plugins/rwwipru/ss/citii/ON/com",
        destination: "https://fishingshirtsnow.com/store/",
        permanent: true,
      },
      {
        source: "/ads.txt",
        destination: "https://fishingshirtsnow.com/store/",
        permanent: true,
      },
      { source: "/my-account/", destination: "/", permanent: true },
      {
        source: "/product-category/long-sleeve/",
        destination: "/product-category/fishing-shirts-long-sleeve/",
        permanent: true,
      },
      {
        source: "/product-category/funny-fishing-shirts/",
        destination: "/product-category/fishing-shirts-funny/",
        permanent: true,
      },
      {
        source:
          "/product/performance-fishing-hoodie-with-face-mask-sunblock-shirt-hooded-long-sleeve-with-drawstrings-pocket/",
        destination: "/product/koofin-fishing-hooded-shirt/",
        permanent: true,
      },
      {
        source:
          "/product/gotta-love-a-good-pole-dance-funny-fishing-pole-humor-fisherman-unisex-t-shirt/",
        destination: "/product/ann-arbor-funny-fishing-tee/",
        permanent: true,
      },
      {
        source:
          "/product/mens-cant-work-today-my-arm-is-in-a-cast-t-shirt-funny-fishing-graphic-top-guys/",
        destination: "/product/crazy-dog-funny-fishing-tee/",
        permanent: true,
      },
      {
        source: "/download/S/a/l/SaltyCrew.PNG",
        destination:
          "https://fishingshirtsnow.com/?s=salty+crew&post_type=product",
        permanent: true,
      },
      {
        source: "/product-category/for-her/",
        destination: "/product-category/fishing-shirts-for-her/",
        permanent: true,
      },
      { source: "/cart/", destination: "/", permanent: true },
      { source: "/checkout/", destination: "/", permanent: true },
      {
        source:
          "/product/classic-teaze-lord-is-my-light-religious-jesus-christian-t-shirt/",
        destination: "https://fishingshirtsnow.com/store/",
        permanent: true,
      },
      { source: "/home/", destination: "/", permanent: true },
      {
        source:
          "/product/mens-upf-50-uv-outdoor-sun-protection-hoodie-t-shirt-long-sleeve-performance-spf-rashguard-shirt-for-fishing-hiking-running/",
        destination: "/store/",
        permanent: true,
      },
      {
        source:
          "/product/baleaf-womens-upf-50-sun-protection-t-shirt-long-short-sleeve-outdoor-performance/",
        destination: "/product-category/fishing-shirts-for-her/",
        permanent: true,
      },
      {
        source: "/sitemap/",
        destination: "/fishingshirtsnow-com-sitemap/",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
