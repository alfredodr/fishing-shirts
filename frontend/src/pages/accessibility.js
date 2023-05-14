import React from "react";
import styles from "../styles/posts.module.css";
import Head from "next/head";

const accessibility = () => {
  return (
    <>
      <Head>
        <title>Accessibility - Fishing Shirts Now</title>
        <meta
          name="description"
          content="Fishing Shirts Now Accessibility Disclosure Document. Find all the information about how we operate and make the site accessible to our users"
        />
        <link
          rel="canonical"
          href="https://fishingshirtsnow.com/accessibility/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Accessibility - Fishing Shirts Now"
        />
        <meta
          property="og:description"
          content="Fishing Shirts Now Accessibility Disclosure Document. Find all the information about how we operate and make the site accessible to our users"
        />
        <meta
          property="og:url"
          content="https://fishingshirtsnow.com/accessibility/"
        />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:modified_time"
          content="2021-04-20T14:47:29+00:00"
        />
        <meta
          property="og:image"
          content="https://fsn-site.s3.amazonaws.com/home/ocean-1950583_1280.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="853" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
      </Head>
      <section className={`container mx-auto my-24`}>
        <div className={`${styles.post}`}>
          <h1>fishingshirtsnow.com Accessibility Statement</h1>
          <p>Updated: December 2019.</p>
          <h2>General</h2>
          <p>
            fishingshirtsnow.com strives to ensure that its services are
            accessible to people with disabilities. fishingshirtsnow.com has
            invested a significant amount of resources to help ensure that its
            website is made easier to use and more accessible for people with
            disabilities, with the strong belief that every person has the right
            to live with dignity, equality, comfort and independence.
          </p>
          <h2>Accessibility on fishingshirtsnow.com</h2>
          <p>
            fishingshirtsnow.com makes available the{" "}
            <a
              title="Free Website Accessibility Widget"
              href="https://UserWay.org"
            >
              UserWay Website Accessibility Widget
            </a>{" "}
            that is powered by a dedicated accessibility server. The software
            allows fishingshirtsnow.com to improve its compliance with the Web
            Content Accessibility Guidelines (WCAG 2.1).
          </p>
          <h2>Enabling the Accessibility Menu</h2>
          <p>
            The fishingshirtsnow.com accessibility menu can be enabled by
            clicking the accessibility menu icon that appears on the corner of
            the page. After triggering the accessibility menu, please wait a
            moment for the accessibility menu to load in its entirety.
          </p>
          <h2>Disclaimer</h2>
          <p>
            fishingshirtsnow.com continues its efforts to constantly improve the
            accessibility of its site and services in the belief that it is our
            collective moral obligation to allow seamless, accessible and
            unhindered use also for those of us with disabilities.
          </p>
          <p>
            In an ongoing effort to continually improve and remediate
            accessibility issues, we also regularly scan fishingshirtsnow.com
            with UserWay's{" "}
            <a
              title="Free Website Accessibility Scanner"
              href="https://UserWay.org/scanner"
            >
              Accessibility Scanner
            </a>{" "}
            to identify and fix every possible accessibility barrier on our
            site. Despite our efforts to make all pages and content on
            fishingshirtsnow.com fully accessible, some content may not have yet
            been fully adapted to the strictest accessibility standards. This
            may be a result of not having found or identified the most
            appropriate technological solution.
          </p>
          <h2>Here For You</h2>
          <p>
            If you are experiencing difficulty with any content on
            fishingshirtsnow.com or require assistance with any part of our
            site, please contact us during normal business hours as detailed
            below and we will be happy to assist.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you wish to report an accessibility issue, have any questions or
            need assistance, please{" "}
            <a href="/contact-us/" target="_blank" rel="noopener">
              contact fishingshirtsnow.com Customer Support here.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default accessibility;
