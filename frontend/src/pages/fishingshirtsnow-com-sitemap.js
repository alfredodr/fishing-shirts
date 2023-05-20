import React from "react";
import Link from "next/link";
import axios from "axios";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "../styles/posts.module.css";
import { NextSeo, WebPageJsonLd } from "next-seo";

const sitemap = ({ products, posts }) => {
  return (
    <>
      <NextSeo
        title=" FishingShirtsNow.com Sitemap - Content Drilldown Map Of Our Website"
        titleTemplate="%s | Fishing Shirts Now"
        description="To enjoy fishing you should wear the appropriate outfit. This is what our website is all about. Check us out here:FishingShirtsNow.com Sitemap."
        canonical={`${process.env.NEXT_PUBLIC_BACKEND_URL}/fishingshirtsnow-com-sitemap/`}
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://www.facebook.com/fishingshirtsnow",
          },
          {
            property: "article:modified_time",
            content: "2021-04-16T16:13:51+00:00",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
        openGraph={{
          type: "article",
          title:
            "FishingShirtsNow.com Sitemap - Content Drilldown Map Of Our Website",
          description:
            "To enjoy fishing you should wear the appropriate outfit. This is what our website is all about. Check us out here:FishingShirtsNow.com Sitemap.",
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/fishingshirtsnow-com-sitemap/`,
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
        name="FishingShirtsNow.com Sitemap - Content Drilldown Map Of Our Website"
        description="To enjoy fishing you should wear the appropriate outfit. This is what our website is all about. Check us out here:FishingShirtsNow.com Sitemap."
        id={`${process.env.NEXT_PUBLIC_BACKEND_URL}/fishingshirtsnow-com-sitemap/#corporation`}
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section
        className={`flex flex-col md:flex-row lg:flex-row justify-center container mx-auto my-24 relative`}
      >
        <div className={`${styles.post}`}>
          <h1 className="flex justify-center font-medium">
            FishingShirtsNow.com Sitemap
          </h1>
          <p>
            Hello fishing fans, we all live and breathe fishing. That’s why we
            have created this site, to help you enjoy what you love the most in
            a safer and more comfortable way. We focus on helping you find only
            the best fishing shirts in the market. Every shirt is carefully
            selected just for you. In this page find a guide with all of our
            content. Hope you find it valuable. Let us know what you think in
            our contact us section and if we can do better, we will definitely
            do so. Happy Fishing, folks 🙂
          </p>
          <h4 className="font-medium">Pages</h4>
          <ul className="flex flex-col list-disc ml-5">
            <li>
              <Link href={`/accessibility`} passHref className="font-medium">
                Accessibility
              </Link>
            </li>
            <li>
              <Link
                href={`/fishingshirtsnow-com-sitemap/`}
                passHref
                className="font-medium"
              >
                Sitemap
              </Link>
            </li>
            <li>
              <Link
                href={`/terms-conditions/`}
                passHref
                className="font-medium"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href={`/privacy-cookie-policy/`}
                passHref
                className="font-medium"
              >
                Privacy & Cookie Policy
              </Link>
            </li>
            <li>
              <Link href={`/blog/`} passHref className="font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link href={`/contact-us/`} passHref className="font-medium">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={`/about/`} passHref className="font-medium">
                About
              </Link>
            </li>
            <li>
              <Link
                href={`/fishingshirtsnow-com-sitemap/`}
                passHref
                className="font-medium"
              >
                Sitemap
              </Link>
            </li>
            <li>
              <Link href={`/store/`} passHref className="font-medium">
                Store
              </Link>
            </li>
            <li>
              <Link href={`/`} passHref className="font-medium">
                Home
              </Link>
            </li>
          </ul>
          <h4 className="font-medium">Products</h4>
          <ul className="flex flex-col list-disc ml-5">
            {products.map((products, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    href={`/products/${products.slug}/`}
                    passHref
                    className="font-medium"
                  >
                    {products.name}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <h4 className="font-medium">Posts</h4>
          <ul className="flex flex-col list-disc ml-5">
            {posts.map((post, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    href={`/blog/${post.slug}/`}
                    passHref
                    className="font-medium"
                  >
                    {post.frontmatter.title}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default sitemap;

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
