import React from "react";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "../../styles/posts.module.css";
import Head from "next/head";

const index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog - Fishing Shirts Now Blogs</title>
        <meta
          name="description"
          content="Stay up to date with the latest trends, recommendations and product reviews in our Fishing Shirts Now Blog,"
        />
        <link rel="canonical" href="https://fishingshirtsnow.com/blog/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog - Fishing Shirts Now" />
        <meta
          property="og:description"
          content="Stay up to date with the latest trends, recommendations and product reviews in our Fishing Shirts Now Blog,"
        />
        <meta property="og:url" content="https://fishingshirtsnow.com/blog/" />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="og:image"
          content="https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="853" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="flex items-center justify-center container mx-auto my-24 relative">
        <div className={`${styles.post}`}>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <div>
                <Link href={`/blog/${post.slug}/`} passHref>
                  <div className="overflow-hidden">
                    <Image
                      className="img-fluid"
                      src={post.frontmatter.cover_image}
                      alt={post.frontmatter.title}
                      width={1500}
                      height={500}
                      priority
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
                <div className="p-5 flex flex-col">
                  <Link href={`/blog/${post.slug}/`} passHref>
                    <h4 className="text-2xl md:text-3xl font-medium mt-3">
                      {post.frontmatter.title}
                    </h4>
                  </Link>
                  <p className="text-slate-500 text-lg mt-3">
                    {post.frontmatter.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-lg mt-3"
                    passHref
                  >
                    Read More »
                  </Link>
                  <hr className="m-1" />
                  <div className="flex flex-row gap-1 text-slate-500">
                    <span>{post.frontmatter.date}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
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
    props: { posts },
    revalidate: 10,
  };
}
