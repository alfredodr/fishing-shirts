import React from "react";
import QuickLinksBanner from "@/components/quick-links/QuickLinksBanner";
import ContactForm from "@/components/quick-links/contact-us/ContactForm";
import { NextSeo, WebPageJsonLd } from "next-seo";

const contactUs = () => {
  return (
    <>
      <NextSeo
        title="Contact Us"
        titleTemplate="%s | Fishing Shirts Now"
        description="Best way to contact us. Quickly enter your information and any feedback or concern and will get back to you shortly."
        additionalMetaTags={[
          {
            property: "article:publisher",
            content: "https://fishingshirtsnow.com/contact-us",
          },
          {
            property: "article:modified_time",
            content: "2021-06-16T02:29:31+00:00",
          },
        ]}
        openGraph={{
          type: "article",
          title: "Contact Us - Fishing Shirts Now",
          description:
            "Best way to contact us. Quickly enter your information and any feedback or concern and will get back to you shortly.",
          url: "https://fishingshirtsnow.com/contact-us",
          images: [
            {
              url: "https://fsn-site.s3.amazonaws.com/contact-us/bottle-message.jpg",
              width: 1280,
              height: 853,
              alt: "Bottle with paper inside",
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
        name="Contact Us - Fishing Shirts Now"
        description="Best way to contact us. Quickly enter your information and any feedback or concern and will get back to you shortly."
        id="https://fishingshirtsnow.com/contact-us/#corporation"
        publisher="https://fishingshirtsnow.com/#organization"
      />
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
