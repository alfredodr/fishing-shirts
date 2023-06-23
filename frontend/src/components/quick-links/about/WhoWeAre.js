import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="bg-white">
      <div className="flex items-center justify-center container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 mx-5 bg-whoWeAreBackgroundGray">
          {/* Who We Are */}
          <div>
            <div className="flex flex-col p-10">
              <h2 className="text-5xl font-semibold mt-3 mb-6">Who We Are</h2>
              <p className="mb-6">
                Hi and welcome to our site. We hope we can help you find the
                best fishing shirts that suit your needs. Whether you want one
                for your next fishing trip, as a gift for that friend that loves
                fishing or any other outdoor activity, its a smart choice to
                have one. Now, a little bit about me: I&apos;ve had a passion
                for outdoor activities like fishing, for as long as I can
                remember. I used to go fly fishing as a kid in a river close to
                my grandpa&apos;s farm by myself. The experience was incredible.
                I picked up the bait and the fishing line and sat down by the
                river for hours. I came home after with a smile on my face and
                whatever I could catch in my hands. Those times will stay with
                me forever. Then as an adult, my passion for fishing continues.
                Whether it is fishing on a boat or sitting next to a fishing
                spot I&apos;m always ready to go. I get so excited when its that
                time.
              </p>
              <p className="mb-6">
                If you have any questions or feedback you want to share feel
                free to contact us.
              </p>
            </div>
          </div>
          {/* Image*/}
          <div className="relative min-h-[500px] overflow-hidden">
            <Image
              src="https://fsn-site.s3.amazonaws.com/about/computer-fishing-rod.png"
              alt="computer and fishing rod"
              fill
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
