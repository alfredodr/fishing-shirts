import React from "react";
import Image from "next/image";

const Variants = ({ image, index, mainImage, setMainImage }) => {
  return (
    <div
      className={`relative w-[120px] h-[120px] flex hover:opacity-100 ${
        mainImage === index ? "opacity-100" : "opacity-60"
      }`}
    >
      <Image
        unoptimized
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 160px) 100vw, (max-width: 160px) 50vw, 33vw"
        className="object-contain cursor-pointer"
        onClick={() => setMainImage(index)}
      />
    </div>
  );
};

export default Variants;
