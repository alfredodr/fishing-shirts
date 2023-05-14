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
import Head from "next/head";

//Components used in my blog
const components = { TopRatedProducts, ProductsByCategory, GetProduct };

const blog = ({
  frontmatter: { title, cover_image, excerpt },
  mdxSource,
  slug,
}) => {
  return (
    <>
      <Head>
        <title>{`${title} - Fishing Shirts Now`}</title>
        <meta name="description" content={excerpt} />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/fishing-shirts-men/`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} - Fishing Shirts Now`} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${slug}`}
        />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:published_time"
          content="2021-05-12T02:22:03+00:00"
        />
        <meta
          property="article:modified_time"
          content="2021-05-12T02:25:00+00:00"
        />
        <meta property="og:image" content={cover_image} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="author" content="Alfredo Dominguez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Alfredo Dominguez" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="5 minutes" />
      </Head>
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
    </>
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
      slug,
    },
  };
}
