import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Top30Products from "@/components/product/Top30Products";
import ProductsByCategory from "@/components/product/ProductsByCategory";
import GetProduct from "@/components/product/GetProduct";
import styles from "../../styles/posts.module.css";
import Link from "next/link";
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";
import Breadcrumb from "@/components/common/Breadcrumb";

//Components used in my blog
const components = {
  Top30Products,
  ProductsByCategory,
  GetProduct,
  Breadcrumb,
};

const blog = ({
  frontmatter: { title, cover_image, excerpt, published_time, modified_time },
  mdxSource,
  slug,
}) => {
  return (
    <>
      <NextSeo
        title={`${title}`}
        titleTemplate="%s | Fishing Shirts Now"
        description={excerpt}
        additionalLinkTags={[
          {
            property: "author",
            content: "Alfredo Dominguez",
          },
        ]}
        openGraph={{
          type: "article",
          article: {
            publishedTime: published_time,
            modifiedTime: modified_time,
            authors: ["Alfredo Dominguez"],
          },
          title: `${title} - Fishing Shirts Now`,
          description: excerpt,
          url: `https://fishingshirtsnow.com/blog/${slug}/`,
          images: [
            {
              url: cover_image,
              width: 1000,
              height: 500,
              alt: "fisherman with fishing rod looking at the sea",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          title: `${title} - Fishing Shirts Now`,
          description: "Fishing Shirts Now Home Page",
        }}
      />
      <ArticleJsonLd
        type="Article"
        url={`https://fishingshirtsnow.com/blog/${slug}/`}
        title={`${title} - Fishing Shirts Now`}
        images={[cover_image]}
        datePublished={published_time}
        dateModified={modified_time}
        authorName="Alfredo Dominguez"
        description={excerpt}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "https://fishingshirtsnow.com/",
          },
          {
            position: 2,
            name: "Blog",
            item: "https://fishingshirtsnow.com/blog/",
          },
          {
            position: 3,
            name: `${title}`,
            item: `https://fishingshirtsnow.com/blog/${slug}/`,
          },
        ]}
      />
      <section
        className={`flex flex-col md:flex-row lg:flex-row items-center md:items-start justify-center container mx-auto my-10 relative`}
      >
        <div className={`${styles.post}`}>
          <Image
            src={cover_image}
            alt={title}
            width={1000}
            height={500}
            style={{ objectFit: "contain" }}
          />
          <MDXRemote {...mdxSource} components={components} />
        </div>
        <div className={`${styles.sidebar}`}>
          <aside className={`${styles.sponsor}`}>
            <h2>SPONSOR:</h2>
            <div>
              <Link
                target="_blank"
                href="https://www.amazon.com/hz/audible/mlp/membership/plus?ref_=assoc_tag_ph_1524216631897&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=fishing-shirts-now00-20&linkId=16ea12bbe62d15f91c859914e2df3dff"
              >
                <Image
                  src={
                    "https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/Minerva-Plus-Associate-300x250-V08.png"
                  }
                  alt={"Try Audible Plus"}
                  priority
                  width={300}
                  height={250}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          </aside>
          <aside className={`${styles.recentPosts}`}>
            <h2>Recent Posts</h2>
            <nav aria-label="Recent Posts">
              <ul>
                <li>
                  <Link href="/blog/delve-deep-into-the-pleasures-of-angling-with-the-remarkable-koofin-fishing-shirts/">
                    Koofin Fishing Shirts
                  </Link>
                </li>
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
