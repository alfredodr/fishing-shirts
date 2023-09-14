import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "../styles/posts.module.css";
import { NextSeo, WebPageJsonLd } from "next-seo";

const Sitemap = ({ products, posts }) => {
  const [data, setData] = useState(products);
  const [pageNumber, setpageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data: newData } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?pageNumber=${pageNumber}`
      );
      setData((data) => [...data, ...newData?.products]);
      setLoading(false);
    }

    fetchProducts();
  }, [pageNumber]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        setpageNumber((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <NextSeo
        title=" FishingShirtsNow.com Sitemap - Content Drilldown Map Of Our Website"
        titleTemplate="%s | Fishing Shirts Now"
        description="To enjoy fishing you should wear the appropriate outfit. This is what our website is all about. Check us out here:FishingShirtsNow.com Sitemap."
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://fishingshirtsnow.com/sitemap/",
          },
          {
            property: "article:modified_time",
            content: "2021-04-16T16:13:51+00:00",
          },
        ]}
        openGraph={{
          type: "article",
          title:
            "FishingShirtsNow.com Sitemap - Content Drilldown Map Of Our Website",
          description:
            "To enjoy fishing you should wear the appropriate outfit. This is what our website is all about. Check us out here:FishingShirtsNow.com Sitemap.",
          url: "https://fishingshirtsnow.com/sitemap/",
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
        id="https://fishingshirtsnow.com/sitemap/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
      <section
        className={`flex flex-col md:flex-row lg:flex-row justify-center container mx-auto my-10 relative`}
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
              <Link href={`/accessibility/`} passHref className="font-medium">
                Accessibility
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
              <Link href={`/sitemap/`} passHref className="font-medium">
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
            {data?.map((product, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    href={`/product/${product.slug}/`}
                    passHref
                    className="font-medium"
                  >
                    {product.name}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
          {loading && <div>Loading...</div>}
          {/* <button
            onClick={handleLoadMore}
            aria-label="load more products"
            type="button"
            className={`${
              pageNumber === 30 && "hidden"
            } h-12 border-2  bg-white 
            px-4 rounded hover:bg-lightBlue hover:text-white my-5 font-medium focus-visible:none`}
          >
            Load more
          </button> */}
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

export default Sitemap;

export async function getStaticProps() {
  //Get all products
  const {
    data: { products },
  } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/all`
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
