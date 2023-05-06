import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import TopRatedProducts from "@/components/product/TopRatedProducts";
import ProductsByCategory from "@/components/product/ProductsByCategory";
import GetProduct from "@/components/product/GetProduct";
import styles from "../../styles/posts.module.css";
import Link from "next/link";

//Components used in my blog
const components = { TopRatedProducts, ProductsByCategory, GetProduct };

const blog = ({ frontmatter: { title, date, cover_image }, mdxSource }) => {
  return (
    <section
      className={`flex flex-col md:flex-row lg:flex-row justify-center container mx-auto my-24 relative`}
    >
      <div className={`${styles.post}`}>
        <Image
          src={cover_image}
          alt={title}
          width={1000}
          height={500}
          priority
          style={{ objectFit: "contain" }}
        />
        <MDXRemote {...mdxSource} components={components} />
      </div>
      <div className={`${styles.sidebar}`}>
        <aside className={`${styles.sponsor}`}>
          <h2>SPONSOR:</h2>
          <div>
            <iframe
              src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=8&l=ez&f=ifr&linkID=d35fac43f6903a16f2451f61b93ed33b&t=fishing-shirts-now00-20&tracking_id=fishing-shirts-now00-20"
              width="120"
              height="240"
              border="0"
              rel="nofollow"
            ></iframe>
          </div>
        </aside>
        <aside className={`${styles.recentPosts}`}>
          <h2>Recent Posts</h2>
          <nav aria-label="Recent Posts">
            <ul>
              <li>
                <Link href="/blog/fishing-shirts-men/">
                  Fishing Shirts For Men
                </Link>
              </li>
              <li>
                <Link href="/blog/funny-fishing-shirts-that-put-a-smile-on-your-face/">
                  Funny Fishing Shirts To Keep You Happy And Positive
                </Link>
              </li>
              <li>
                <Link href="/blog/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you/">
                  Best Fishing Shirts Carefully Reviewed Just For You
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </section>
  );
};

{
  /* <MDXRemote {...MDXRemote} components={components}/> */
}

export default blog;

export async function getStaticPaths() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("src", "posts"));

  const paths = files.map((file) => {
    return { params: { slug: file.replace(".mdx", "") } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", slug + ".mdx")
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
}