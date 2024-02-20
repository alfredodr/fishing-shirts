import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IoMdClose } from "react-icons/io";
import FilterByCategory from "./FilterByCategory";
import FilterByBrand from "./FilterByBrand";
import FilterByPrice from "./FilterByPrice";

const MobileProductFilter = ({
  categories,
  brands,
  checkedBrands,
  setCheckedBrands,
  count,
  router,
  asPath,
  minPrice,
  maxPrice,
  setMin,
  setMax,
  setMinPrice,
  setMaxPrice,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling on body
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow style when component unmounts or menu closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      <button
        className=" my-5 py-1 px-3 text-blue-800 font-medium border border-solid border-gray-400 rounded-md shadow-md"
        onClick={toggleMenu}
      >
        Filters
      </button>

      {isOpen && (
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-0 bg-white z-40 transition-all ease-in-out delay-150 duration-500 -translate-y-0",
            {
              "h-full": isOpen,
            }
          )}
        >
          <div className="fixed top-0 left-0 right-0 flex flex-col space-y-4 p-5 bg-white border border-r-transparent border-l-transparent z-20">
            <div className="w-full flex justify-between">
              <span className="font-semibold">Filters</span>
              <button onClick={toggleMenu}>
                <IoMdClose style={{ fontSize: 20 }} />
              </button>
            </div>
          </div>

          <div className="py-20 px-5 w-full h-full overflow-y-auto">
            <FilterByCategory categories={categories} />

            <FilterByBrand
              brands={brands}
              checkedBrands={checkedBrands}
              setCheckedBrands={setCheckedBrands}
              count={count}
              router={router}
              asPath={asPath}
            />
            <FilterByPrice
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMin={setMin}
              setMax={setMax}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              router={router}
              asPath={asPath}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileProductFilter;
