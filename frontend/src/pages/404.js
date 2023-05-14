import React from "react";
// import styles from "../styles/posts.module.css";

const notFound = () => {
  return (
    <section className="flex items-center justify-center container mx-auto my-24 relative">
      <div className="bg-white w-11/12 space-y-10 py-12 px-9">
        <h1 className="flex items-center justify-center text-customBlack text-5xl">
          This page doesn't seem to exist.
        </h1>
        <p className="flex items-center justify-center text-2xl font-bold text-customBlack">
          It looks like the link pointing here was faulty. Maybe try searching?
        </p>
      </div>
    </section>
  );
};

export default notFound;

//className={`flex flex-col md:flex-row lg:flex-row justify-center container mx-auto my-24 relative`}
