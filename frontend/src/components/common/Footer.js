import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white px-5">
      <hr />
      <div className="flex items-center justify-center container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10 ">
          {/* Affiliate Disclosure */}
          <div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium my-3">Amazon Affiliate</h2>
              <p className="text-slate-500 text-lg my-5">
                Fishing Shirts Now is a participant in the Amazon Services LLC
                Associates Program, an affiliate advertising program designed to
                provide a means for sites to earn advertising fees by
                advertising and linking to Amazon.com
              </p>
              <p>
                Read our{" "}
                <strong>
                  <a href="#" className="text-lg mt-3">
                    Privacy & Cookie Policy
                  </a>
                </strong>
              </p>
            </div>
          </div>
          {/* Quick Links*/}
          <div>
            <h2 className="text-2xl font-medium my-3">Quick Links</h2>
            <nav aria-label="Quick Links" className="flex flex-col">
              <Link
                href="/privacy-cookie-policy/"
                passHref
                className="text-lg mt-3 hover:text-blogNavHoverBlue"
              >
                Privacy & Cookie Policy
              </Link>
              <Link
                href="/terms-conditions/"
                passHref
                className="text-lg mt-3 hover:text-blogNavHoverBlue"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/accessibility/"
                passHref
                className="text-lg mt-3 hover:text-blogNavHoverBlue"
              >
                Accessibility
              </Link>
              <Link
                href="/about/"
                passHref
                className="text-lg mt-3 hover:text-blogNavHoverBlue"
              >
                About
              </Link>
              <Link
                href="/contact-us/"
                passHref
                className="text-lg mt-3 hover:text-blogNavHoverBlue"
              >
                Contact Us
              </Link>
              <Link
                href="/fishingshirtsnow-com-sitemap/"
                passHref
                className="text-lg mt-3 hover:text-blogNavHoverBlue"
              >
                Sitemap
              </Link>
            </nav>
          </div>
          {/* Latest Articles*/}
          <div>
            <h2 className="text-2xl font-medium my-3">Latest Articles</h2>
            <nav aria-label="Latest Articles" className="flex flex-col">
              <ul>
                <li>
                  <Link
                    href="/blog/fishing-shirts-men/"
                    passHref
                    className="text-lg mt-3 hover:text-blogNavHoverBlue"
                  >
                    Fishing Shirts For Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/funny-fishing-shirts-that-put-a-smile-on-your-face/"
                    passHref
                    className="text-lg mt-3 hover:text-blogNavHoverBlue"
                  >
                    Funny Fishing Shirts To Keep You Happy And Positive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/learn-all-about-fishing-shirts-to-pick-the-right-one-for-you/"
                    passHref
                    className="text-lg mt-3 hover:text-blogNavHoverBlue"
                  >
                    Best Fishing Shirts Carefully Reviewed Just For You
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Connect with us */}
          <div>
            <h2 className="text-2xl font-medium my-3">Connect with us</h2>
            <div className="flex flex-row gap-4 text-slate-500">
              <Link
                href="https://www.facebook.com/fishingshirtsnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook className="text-3xl hover:cursor-pointer" />
              </Link>
              <Link
                href="https://www.instagram.com/live_fishing_shirts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="text-3xl hover:cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-1" />
      <div className="container flex flex-col justify-between items-center mx-auto h-16 md:flex-row lg:flex-row">
        <span>Copyright © 2023 Fishing Shirts Now | Credits</span>
        <span>Powered by Fishing Shirts Now </span>
      </div>
    </footer>
  );
};

export default Footer;
