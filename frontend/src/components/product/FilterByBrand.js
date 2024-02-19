import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MdClear } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FilterByBrand = ({
  brands,
  checkedBrands,
  setCheckedBrands,
  count,
  asPath,
  router,
}) => {
  const [visibleBrandsCount, setVisibleBrandsCount] = useState(5);
  const [toggle, setToggle] = useState(false);

  const showMoreItems = () => setVisibleBrandsCount(brands.length);
  const showLessItems = () => setVisibleBrandsCount(5);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      setCheckedBrands([...checkedBrands, name]);
    } else {
      setCheckedBrands(checkedBrands.filter((brand) => brand !== name));
    }
    setToggle(checkedBrands.length > 0 || checked);
    if (asPath.includes("/store/?page=")) {
      router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/store/`);
    }
  };

  const toggleBrandSelection = (brand) => {
    if (checkedBrands.includes(brand)) {
      setCheckedBrands(checkedBrands.filter((b) => b !== brand));
    } else {
      setCheckedBrands([...checkedBrands, brand]);
    }
    setToggle(checkedBrands.length > 0 || !checkedBrands.includes(brand));
    if (asPath.includes("/store/?page=")) {
      router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/store/`);
    }
  };

  const handleClear = () => {
    setCheckedBrands([]);
    setToggle(false);
  };

  return (
    <>
      {/* Mobile */}
      <div className="mt-5 block md:hidden">
        {count !== 0 && (
          <>
            <span className="mt-5 text-lg">Brands</span>
            {checkedBrands?.length > 0 ? (
              <button
                className="p-1 my-3 flex items-center border border-solid border-gray-400 rounded-md bg-slate-300"
                onClick={handleClear}
                aria-label="Clear"
              >
                <span className="hover:text-blogNavHoverBlue mr-1">Clear</span>
                <MdClear />
              </button>
            ) : null}
          </>
        )}

        <ul className="flex flex-col">
          {brands?.slice(0, visibleBrandsCount).map((brand, index) => (
            <li
              key={index}
              className={cn("p-1 my-1 flex border rounded-md bg-white", {
                "bg-blue-100 text-lightBlue": checkedBrands.includes(brand),
              })}
              onClick={() => toggleBrandSelection(brand)}
              aria-label={brand}
            >
              {brand}
            </li>
          ))}
        </ul>

        {brands?.length > 5 && visibleBrandsCount < brands?.length ? (
          <button
            onClick={showMoreItems}
            className="flex items-center"
            aria-label="See More"
          >
            <IoIosArrowDown className="mr-1 font-bold" />
            <p className="text-blue-900">See more</p>
          </button>
        ) : (
          visibleBrandsCount > 5 && (
            <button
              onClick={showLessItems}
              className="flex items-center"
              aria-label="See Less"
            >
              <IoIosArrowUp className="mr-1 font-bold" />
              <p className="text-blue-900">See less</p>
            </button>
          )
        )}
      </div>

      {/* Desktop */}
      <div className="mt-5 hidden md:block">
        {count !== 0 && (
          <>
            <span className="mt-5 text-lg">Brands</span>
            {checkedBrands?.length > 0 ? (
              <button
                className="p-1 my-3 flex items-center border border-solid border-gray-400 rounded-md bg-slate-300"
                onClick={handleClear}
                aria-label="Clear"
              >
                <span className="hover:text-blogNavHoverBlue mr-1">Clear</span>
                <MdClear />
              </button>
            ) : null}
          </>
        )}

        <div>
          {brands?.slice(0, visibleBrandsCount).map((brand, index) => (
            <label
              key={index}
              className="flex items-center hover:cursor-pointer"
            >
              <input
                type="checkbox"
                id={brand}
                name={brand}
                checked={checkedBrands.includes(brand)}
                onChange={handleCheckboxChange}
                className="hover:cursor-pointer"
              />
              <span className="text-sm my-1 ml-2">{brand}</span>
            </label>
          ))}
        </div>

        {brands?.length > 5 && visibleBrandsCount < brands?.length ? (
          <button
            onClick={showMoreItems}
            className="flex items-center"
            aria-label="See More"
          >
            <IoIosArrowDown className="mr-1 font-bold" />
            <p className="text-blue-900">See more</p>
          </button>
        ) : (
          visibleBrandsCount > 5 && (
            <button
              onClick={showLessItems}
              className="flex items-center"
              aria-label="See Less"
            >
              <IoIosArrowUp className="mr-1 font-bold" />
              <p className="text-blue-900">See less</p>
            </button>
          )
        )}
      </div>
    </>
  );
};

export default FilterByBrand;
