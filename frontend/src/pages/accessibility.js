import React from "react";
import styles from "../styles/posts.module.css";

const accessibility = () => {
  return (
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
          The fishingshirtsnow.com accessibility menu can be enabled by clicking
          the accessibility menu icon that appears on the corner of the page.
          After triggering the accessibility menu, please wait a moment for the
          accessibility menu to load in its entirety.
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
          accessibility issues, we also regularly scan fishingshirtsnow.com with
          UserWay's{" "}
          <a
            title="Free Website Accessibility Scanner"
            href="https://UserWay.org/scanner"
          >
            Accessibility Scanner
          </a>{" "}
          to identify and fix every possible accessibility barrier on our site.
          Despite our efforts to make all pages and content on
          fishingshirtsnow.com fully accessible, some content may not have yet
          been fully adapted to the strictest accessibility standards. This may
          be a result of not having found or identified the most appropriate
          technological solution.
        </p>
        <h2>Here For You</h2>
        <p>
          If you are experiencing difficulty with any content on
          fishingshirtsnow.com or require assistance with any part of our site,
          please contact us during normal business hours as detailed below and
          we will be happy to assist.
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
  );
};

export default accessibility;
