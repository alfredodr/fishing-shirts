import React, { useEffect, useRef } from "react";

const FilterByPrice = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  min,
  max,
  step,
  initialMin,
  initialMax,
  priceCap,
}) => {
  const progressRef = useRef(null);
  const handleMin = (e) => {
    if (maxPrice - minPrice >= priceCap && maxPrice <= max) {
      if (parseInt(e.target.value) > parseInt(maxPrice)) {
      } else {
        setMinPrice(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minPrice) {
        setMinPrice(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxPrice - minPrice >= priceCap && maxPrice <= max) {
      if (parseInt(e.target.value) < parseInt(minPrice)) {
      } else {
        setMaxPrice(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxPrice) {
        setMaxPrice(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minPrice / max) * step + "%";
    progressRef.current.style.right = step - (maxPrice / max) * step + "%";
  }, [minPrice, maxPrice, max, step]);
  return (
    <>
      {/* Filter */}
      <h2 className="mb-5">Filter by price</h2>
      {/* Slider */}
      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-customBlack rounded"
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative">
          <input
            onChange={handleMin}
            type="range"
            value={minPrice}
            min={min}
            step={step}
            max={max}
            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />

          <input
            onChange={handleMax}
            type="range"
            value={maxPrice}
            min={min}
            step={step}
            max={max}
            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <span className="mr-2">Price: </span>
        <span>${minPrice}</span>
        <span className="px-2">{"-"}</span>
        <span>${maxPrice}</span>
      </div>
    </>
  );
};

export default FilterByPrice;
