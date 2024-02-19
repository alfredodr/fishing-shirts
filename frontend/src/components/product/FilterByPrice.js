import React, { useState } from "react";
import { MdClear } from "react-icons/md";

const FilterByPrice = ({
  minPrice,
  maxPrice,
  setMin,
  setMax,
  setMinPrice,
  setMaxPrice,
  router,
  asPath,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleButtonClick = () => {
    setToggle(!toggle);
    setMin(Number(minPrice) || 0);
    setMax(Number(maxPrice) || 999);
    if (asPath?.includes("?page=")) {
      const newPath = router?.asPath?.split("?")[0];
      router.push(newPath);
    }
  };

  const handleClear = () => {
    setMinPrice("");
    setMaxPrice("");
    setMin(0);
    setMax(999);
    setToggle(!toggle);
  };

  return (
    <div className="my-5">
      <span className="text-lg">Price</span>

      {toggle ? (
        <button
          className="p-1 mb-3 flex items-center border border-solid border-gray-400 rounded-md bg-slate-300"
          onClick={handleClear}
          aria-label="Clear"
        >
          <span className="hover:text-blogNavHoverBlue">Clear</span>
          <MdClear />
        </button>
      ) : null}

      <div className="flex gap-1 ">
        <input
          name="min"
          className="min-w-max appearance-none border border-solid border-gray-400 bg-gray-100 rounded-md p-2 hover:border-gray-400 focus:outline-none focus:border-gray-400"
          type="number"
          placeholder="Min"
          min={0}
          max={999}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          name="max"
          className="min-w-max appearance-none border border-solid border-gray-400 bg-gray-100 rounded-md p-2 hover:border-gray-400 focus:outline-none focus:border-gray-400"
          type="number"
          placeholder="Max"
          min={0}
          max={999}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button
          className="py-2 px-3 text-center inline-block border border-solid border-gray-400 rounded-md shadow-md hover:bg-slate-100"
          onClick={handleButtonClick}
          aria-label="Go"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default FilterByPrice;
