import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="bg-white">
      <div className="flex items-center justify-center container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 mx-5">
          {/* Who We Are */}
          <div>
            <div className="flex flex-col p-10">
              <h2 className="text-5xl font-semibold mt-3 mb-6">NEED US?</h2>
            </div>
          </div>
          {/* Image*/}
          <div className="relative overflow-hidden">
            <Image
              src="https://fsn-site.s3.amazonaws.com/about/computer-fishing-rod.png"
              alt="computer and fishing rod"
              priority
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
