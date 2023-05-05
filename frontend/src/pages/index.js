import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestArticles from "@/components/home/LatestArticles";
import Features from "@/components/home/Features";
import axios from "axios";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ products, posts }) {
  return (
    <>
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
