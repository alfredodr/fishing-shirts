import React from "react";
import QuickLinksBanner from "@/components/quick-links/QuickLinksBanner";
import ContactForm from "@/components/quick-links/contact-us/contactForm";

const contactUs = () => {
  return (
    <>
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
