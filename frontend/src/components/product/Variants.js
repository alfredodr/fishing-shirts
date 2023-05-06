import React from "react";

const Variants = ({ image, setMainImage }) => {
  return (
    <div className="overflow-hidden ">
      <img
        src={image.src}
        alt={image.alt}
        onClick={() => setMainImage(image.src)}
      />
    </div>
  );
};

export default Variants;
