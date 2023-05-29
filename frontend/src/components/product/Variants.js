import React from "react";
import Image from "next/image";

const Variants = ({ image, setMainImage }) => {
  return (
    <div className="relative w-[120px] h-[120px] bg-white flex overflow-hidden opacity-60 hover:opacity-100 m-2">
      <Image
        src={image.src}
        alt={image.alt}
        width={120}
        height={120}
        placeholder="blur"
        blurDataURL={"/FSN-Transparent-Logo-250x250-1.webp"}
        className="object-contain bg-white cursor-pointer w-auto h-auto mx-auto"
        onClick={() => setMainImage(image.src)}
      />
    </div>
  );
};

export default Variants;
