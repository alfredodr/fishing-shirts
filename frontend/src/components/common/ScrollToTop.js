import React, { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!isBrowser()) return;

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const halfPageHeight = document.documentElement.scrollHeight / 2;

    setShowButton(scrollPosition > halfPageHeight);
  };

  useEffect(() => {
    if (!isBrowser()) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBrowser, handleScroll]);

  return (
    <button
      className={`fixed right-2 bottom-36 z-40 ${showButton ? "" : "hidden"}`}
      onClick={scrollToTop}
    >
      <BsArrowUpCircle fontSize={35} />
    </button>
  );
};

export default ScrollToTop;
