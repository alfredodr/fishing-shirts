import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestArticles from "@/components/home/LatestArticles";
import Features from "@/components/home/Features";
import axios from "axios";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function Home({ products, posts }) {
  return (
    <>
      <Head>
        <title>
          Fishing Shirts Now - UV Protection - High Quality - Affordable Prices
        </title>
        <meta
          name="description"
          content="Fishing shirts at affordable prices, carefully selected for you. All sizes and textures in stock right now. We stand by the quality of our products."
        />
        <link rel="canonical" href="https://fishingshirtsnow.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://fishingshirtsnow.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fishing Shirts Now - UV Protection - High Quality - Affordable Prices"
        />
        <meta
          property="og:description"
          content="Fishing shirts at affordable prices, carefully selected for you. All sizes and textures in stock right now. We stand by the quality of our products."
          class="yoast-seo-meta-tag"
        />
        <meta property="og:url" content="https://fishingshirtsnow.com/" />
        <meta property="og:site_name" content="Fishing Shirts Now" />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:modified_time"
          content="2021-01-16T04:25:05+00:00"
        />
        <meta
          property="og:image"
          content="https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="853" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="22 minutes" />
      </Head>
      <Banner />
      <FeaturedProducts products={products} />
      <LatestArticles posts={posts} />
      <Features />
    </>
  );
}

export async function getStaticProps() {
  const {
    data: { products },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);

  // Get files from the posts dir
  const files = fs.readdirSync(path.join("src", "posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((file) => {
    // Get slug
    const slug = file.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", file),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { products, posts },
    revalidate: 10,
  };
}
