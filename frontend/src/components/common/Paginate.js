import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Paginate = ({ pages, page, keyword = "", slug = "" }) => {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(10);
  const itemsPerPage = 10;

  useEffect(() => {
    const currentPageIndex = page - 1;
    const newStartPage =
      Math.floor(currentPageIndex / itemsPerPage) * itemsPerPage + 1;
    const newEndPage = Math.min(newStartPage + itemsPerPage - 1, pages);
    setStartPage(newStartPage);
    setEndPage(newEndPage);
  }, [pages, page]);

  const handlePrevious = () => {
    const newStartPage = startPage - itemsPerPage;
    const newEndPage = startPage - 1;
    if (newStartPage >= 1) {
      setStartPage(newStartPage);
      setEndPage(newEndPage);
    } else {
      setStartPage(1);
      setEndPage(itemsPerPage);
    }
  };

  const handleNext = () => {
    const newEndPage = endPage + itemsPerPage;
    if (newEndPage <= pages) {
      setStartPage(startPage + itemsPerPage);
      setEndPage(newEndPage);
    } else {
      setStartPage(startPage + itemsPerPage);
      setEndPage(pages);
    }
  };

  const showPreviousButton = startPage > 1;
  const showNextButton = endPage < pages;

  return (
    <>
      {pages > 1 && (
        <nav className="flex flex-wrap items-center rounded-lg my-10">
          {/* Previous button */}
          {
            <button
              onClick={handlePrevious}
              aria-label="previous page"
              className={cn(
                "h-12 border border-lightBlack px-4 rounded-l-lg ",
                {
                  "text-gray-400": !showPreviousButton,
                  "hover:bg-blogNavHoverBlue hover:text-white":
                    showPreviousButton,
                }
              )}
              aria-disabled={showPreviousButton ? "false" : "true"}
              disabled={showPreviousButton ? false : true}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          }
          {/* Pages */}
          {[...Array(pages).keys()]
            .slice(startPage - 1, endPage)
            .map((x, index) => (
              <Link
                key={index}
                href={
                  keyword
                    ? `${slug}/search?s=${keyword}&page=${x + 1}`
                    : `${slug}?page=${x + 1}`
                }
                className={`h-12 w-12 flex items-center justify-center border border-lightBlack border-l-transparent border-r-transparent ${
                  x + 1 == page
                    ? "bg-blogNavHoverBlue text-white"
                    : "bg-lightGray"
                } hover:bg-blogNavHoverBlue hover:text-white`}
              >
                {x + 1}
              </Link>
            ))}
          {/* Next button */}
          {
            <button
              onClick={handleNext}
              aria-label="next page"
              className={cn(
                "h-12 border border-lightBlack px-4 rounded-r-lg  ",
                {
                  "text-gray-400": !showNextButton,
                  "hover:bg-blogNavHoverBlue hover:text-white": showNextButton,
                }
              )}
              aria-disabled={showNextButton ? "false" : "true"}
              disabled={showNextButton ? false : true}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          }
        </nav>
      )}
    </>
  );
};

export default Paginate;
