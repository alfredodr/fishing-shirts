import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "../../styles/posts.module.css";

const index = ({ posts }) => {
  return (
    <section
      className={`flex flex-col md:flex-row lg:flex-row justify-center container mx-auto my-24 relative`}
    >
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
