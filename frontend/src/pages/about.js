import React from "react";
import QuickLinksBanner from "@/components/quick-links/QuickLinksBanner";
import WhoWeAre from "@/components/quick-links/about/WhoWeAre";
import FollowUs from "@/components/quick-links/about/FollowUs";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About - Fishing Shirts Now</title>
        <meta
          name="description"
          content="Whos is Fishing Shirts Now and how do we operate? Find the answer to this and many other question about us is here."
        />
        <link rel="canonical" href="https://fishingshirtsnow.com/about/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About - Fishing Shirts Now" />
        <meta
          property="og:description"
          content="Whos is Fishing Shirts Now and how do we operate? Find the answer to this and many other question about us is here."
        />
        <meta property="og:url" content="https://fishingshirtsnow.com/about/" />
        <meta property="og:site_name" content="Fishing Shirts Now" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fishingshirtsnow"
        />
        <meta
          property="article:modified_time"
          content="2021-03-04T02:34:10+00:00"
        />
        <meta
          property="og:image"
          content="https://fsn-site.s3.amazonaws.com/about/fisherman-591699_1280.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
      </Head>
      <QuickLinksBanner
        title="About Us"
        urlSrc="https://fsn-site.s3.amazonaws.com/about/fisherman-591699_1280.jpg"
        altText="Fisherman holding fishing rod"
      />
      <WhoWeAre />
      <FollowUs />
    </>
  );
};

export default about;
