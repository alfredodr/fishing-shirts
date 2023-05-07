import React from "react";
import QuickLinksBanner from "@/components/quick-links/QuickLinksBanner";
import WhoWeAre from "@/components/quick-links/about/WhoWeAre";
import FollowUs from "@/components/quick-links/about/FollowUs";

const about = () => {
  return (
    <>
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
