import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestArticles from "@/components/home/LatestArticles";
import Features from "@/components/home/Features";
import axios from "axios";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextSeo, WebPageJsonLd } from "next-seo";

export default function Home({ products, posts }) {
  return (
    <>
      <NextSeo
        title="Fishing Shirts Now - UV Protection - High Quality - Affordable Prices"
        titleTemplate="%s | Fishing Shirts Now"
        description="Fishing shirts at affordable prices, carefully selected for you. All sizes and textures in stock right now. We stand by the quality of our products."
        canonical="https://fishingshirtsnow.com"
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://fishingshirtsnow.com",
          },
          {
            property: "article:modified_time",
            content: "2021-01-16T04:25:05+00:00",
          },
        ]}
        openGraph={{
          type: "website",
          title:
            "Fishing Shirts Now - UV Protection - High Quality - Affordable Prices",
          description: "Fishing Shirts Now Home Page",
          url: "https://fishingshirtsnow.com",
          images: [
            {
              url: "https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg",
              width: 1280,
              height: 853,
              alt: "fisherman with fishing rod looking at the sea",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          title: "Fishing Shirts Now",
          description: "Fishing Shirts Now Home Page",
        }}
      />
      <WebPageJsonLd
        name="Fishing Shirts Now"
        description="Get the best fishing shirts for your next trip"
        id="https://fishingshirtsnow.com/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
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
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?pageSize=30`
  );

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
  };
}
