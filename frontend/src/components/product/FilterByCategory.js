import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FilterByCategory = ({ categories }) => {
  const [visibleCatCountDesktop, setVisibleCatCountDesktop] = useState(5);
  const showMoreItemsDesktop = () =>
    setVisibleCatCountDesktop(categories.length);
  const showLessItemsDesktop = () => setVisibleCatCountDesktop(5);

  const [visibleCatCountMobile, setVisibleCatCountMobile] = useState(9);
  const showMoreItemsMobile = () => setVisibleCatCountMobile(categories.length);
  const showLessItemsMobile = () => setVisibleCatCountMobile(9);

  const sleeveTypes = categories.filter(
    (category) =>
      category?._id === "fishing-shirts-short-sleeve" ||
      category?._id === "fishing-shirts-long-sleeve"
  );
  const genders = categories.filter(
    (category) =>
      category?._id === "fishing-shirts-for-him" ||
      category?._id === "fishing-shirts-for-her" ||
      category?._id === "fishing-shirts-for-kids"
  );
  const excludedCategories = [
    "fishing-shirts-short-sleeve",
    "fishing-shirts-long-sleeve",
    "fishing-shirts-for-him",
    "fishing-shirts-for-her",
    "fishing-shirts-for-kids",
  ];
  const fishingShirts = categories.filter(
    (category) => !excludedCategories.includes(category._id)
  );

  return (
    <div className="mt-2">
      <p className="text-lg font-medium">Gender:</p>

      <ul className="flex gap-2 md:gap-0 md:flex-col">
        {genders.map((category) => (
          <li
            className="md:hover:text-blogNavHoverBlue text-sm border my-1 p-2 rounded-md md:border-0 md:p-0 md:border-transparent"
            key={category._id}
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${category.slug}`}
              passHref
            >
              {category.name.substring(15)}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-lg font-medium">Sleeve Length:</p>
      <ul className="flex gap-2 md:gap-0 md:flex-col">
        {sleeveTypes.map((category) => (
          <li
            className="md:hover:text-blogNavHoverBlue text-sm border my-1 p-2 rounded-md md:border-0 md:p-0 md:border-transparent"
            key={category._id}
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${category.slug}`}
              passHref
            >
              {category.name.substring(15)}
            </Link>
          </li>
        ))}
      </ul>

      <Link href={"/product-category"}>
        <p className="mt-6 text-lg font-medium hover:text-blogNavHoverBlue">
          All Categories
        </p>
      </Link>

      {/* Mobile */}
      <ul className="md:hidden grid grid-cols-3 gap-2">
        {fishingShirts?.slice(0, visibleCatCountMobile).map((category) => (
          <li
            key={category._id}
            category={category}
            className="md:hover:text-blogNavHoverBlue text-sm border p-2 rounded-md md:border-transparent md:p-0"
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${category.slug}`}
              passHref
            >
              {(category?.name).substring(15)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="block md:hidden">
        {categories.length > 9 && visibleCatCountMobile < categories.length ? (
          <button
            onClick={showMoreItemsMobile}
            className="flex items-center"
            aria-label="See More"
          >
            <IoIosArrowDown className="mr-1 font-bold" />
            <span className="text-blue-900 hover:text-blogNavHoverBlue">
              See more
            </span>
          </button>
        ) : (
          visibleCatCountMobile > 9 && (
            <button
              onClick={showLessItemsMobile}
              className="flex items-center"
              aria-label="See Less"
            >
              <IoIosArrowUp className="mr-1 font-bold" />
              <p className="text-blue-900 hover:text-blogNavHoverBlue">
                See less
              </p>
            </button>
          )
        )}
      </div>

      {/* Desktop */}
      <ul className="hidden md:block">
        {fishingShirts?.slice(0, visibleCatCountDesktop).map((category) => (
          <li
            key={category._id}
            category={category}
            className="hover:text-blogNavHoverBlue text-sm my-3"
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/product-category/${category.slug}`}
              passHref
            >
              {(category?.name).substring(15)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        {categories.length > 5 && visibleCatCountDesktop < categories.length ? (
          <button onClick={showMoreItemsDesktop} className="flex items-center">
            <IoIosArrowDown className="mr-1 font-bold" />
            <span className="text-blue-900 hover:text-blogNavHoverBlue">
              See more
            </span>
          </button>
        ) : (
          visibleCatCountDesktop > 5 && (
            <button
              onClick={showLessItemsDesktop}
              className="flex items-center"
            >
              <IoIosArrowUp className="mr-1 font-bold" />
              <p className="text-blue-900 hover:text-blogNavHoverBlue">
                See less
              </p>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default FilterByCategory;
