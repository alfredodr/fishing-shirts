import React from "react";
import QuickLinksBanner from "@/components/quick-links/QuickLinksBanner";
import WhoWeAre from "@/components/quick-links/about/WhoWeAre";
import FollowUs from "@/components/quick-links/about/FollowUs";
import { NextSeo, WebPageJsonLd } from "next-seo";

const about = () => {
  return (
    <>
      <NextSeo
        title="About"
        titleTemplate="%s | Fishing Shirts Now"
        description="Whos is Fishing Shirts Now and how do we operate? Find the answer to this and many other question about us is here."
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://fishingshirtsnow.com/about/",
          },
          {
            property: "article:modified_time",
            content: "2021-03-04T02:34:10+00:00",
          },
        ]}
        openGraph={{
          type: "article",
          title: "About - Fishing Shirts Now",
          description:
            "Who is Fishing Shirts Now and how do we operate? Find the answer to this and many other question about us is here.",
          url: "https://fishingshirtsnow.com/about/",
          images: [
            {
              url: "https://fsn-site.s3.amazonaws.com/about/fisherman-591699_1280.jpg",
              width: 1280,
              height: 853,
              alt: "fisherman holding fishing rod",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <WebPageJsonLd
        name="About - Fishing Shirts Now"
        description="Who is Fishing Shirts Now and how do we operate? Find the answer to this and many other question about us is here."
        id="https://fishingshirtsnow.com/about/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
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
