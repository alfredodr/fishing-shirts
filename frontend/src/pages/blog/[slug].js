import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import TopRatedProducts from "@/components/product/TopRatedProducts";
import styles from "../../styles/posts.module.css";

//Components used in my blog
const components = { TopRatedProducts };

const blog = ({ frontmatter: { title, date, cover_image }, mdxSource }) => {
  return (
    <section className={`container mx-auto m-10 ${styles.post}`}>
      <div className="overflow-hidden">
        <Image
          className="img-fluid"
          src={cover_image}
          alt={title}
          width={721.5}
          height={360.75}
          priority
        />
      </div>
      <MDXRemote {...mdxSource} components={components} />
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
