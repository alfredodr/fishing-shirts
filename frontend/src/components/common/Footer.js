import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white px-5">
      <hr />
      <div className="flex items-center justify-center container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 my-10 ">
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
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium my-3">Quick Links</h2>
              <a href="#" className="text-lg mt-3">
                Terms & Conditions
              </a>
              <a href="#" className="text-lg mt-3">
                Accessibility
              </a>
              <a href="#" className="text-lg mt-3">
                About
              </a>
              <a href="#" className="text-lg mt-3">
                Contact Us
              </a>
              <a href="#" className="text-lg mt-3">
                Sitemap
              </a>
            </div>
          </div>
          {/* Latest Articles*/}
          <div>
            <h2 className="text-2xl font-medium my-3">
              Fishing Shirts For Men
            </h2>
            <p className="text-slate-500 text-lg my-5">
              Fishing Shirts For Men Funny Fishing Shirts To Keep You Happy And
              Positive Best Fishing Shirts Carefully Reviewed Just For You
            </p>
          </div>
          {/* Connect with us */}
          <div>
            <h2 className="text-2xl font-medium my-3">Connect with us</h2>
            <div className="flex flex-row gap-4 text-slate-500">
              <a
                href="https://www.facebook.com/fishingshirtsnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook className="text-3xl hover:cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/live_fishing_shirts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="text-3xl hover:cursor-pointer" />
              </a>
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
