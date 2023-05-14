import React from "react";
import QuickLinksBanner from "@/components/quick-links/QuickLinksBanner";
import ContactForm from "@/components/quick-links/contact-us/ContactForm";
import Head from "next/head";

const contactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Fishing Shirts Now</title>
        <meta
          name="description"
          content="Best way to contact us. Quickly enter your information and any feedback or concern and will get back to you shortly."
        />
        <link rel="canonical" href="https://fishingshirtsnow.com/contact-us/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact Us - Fishing Shirts Now" />
        <meta
          property="og:description"
          content="Best way to contact us. Quickly enter your information and any feedback or concern and will get back to you shortly."
        />
        <meta
          property="og:url"
          content="https://fishingshirtsnow.com/contact-us/"
        />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:modified_time"
          content="2021-06-16T02:29:31+00:00"
        />
        <meta
          property="og:image"
          content="https://fsn-site.s3.amazonaws.com/contact-us/bottle-message.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
      </Head>
      <QuickLinksBanner
        title="Contact Us"
        urlSrc="https://fsn-site.s3.amazonaws.com/contact-us/bottle-message.jpg"
        altText="Bottle with paper inside"
      />
      <ContactForm />
    </>
  );
};

export default contactUs;
