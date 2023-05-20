import React from "react";
import Image from "next/image";

const Variants = ({ image, setMainImage }) => {
  return (
    <div className="w-[100px] h-[100px] overflow-hidden opacity-60 hover:opacity-100">
      <Image
        src={image.src}
        alt={image.alt}
        priority
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
        onClick={() => setMainImage(image.src)}
      />
    </div>
  );
};

export default Variants;
