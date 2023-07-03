import React from "react";
import Image from "next/image";

const Variants = ({ image, index, setMainImage }) => {
  return (
    <div className="relative w-[120px] h-[120px] flex opacity-60 hover:opacity-100">
      <Image
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
