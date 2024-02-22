import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const { asPath } = router;
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];

    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const label = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const breadCrumb = path.charAt(0) + path.slice(1);

      return { label, breadCrumb };
    });

    setBreadcrumbs(breadcrumbs);
  }, [asPath]);

  return (
    <div
      className="flex items-center align-middle space-x-2"
      aria-label="Breadcrumb"
    >
      <span className="hover:text-blogNavHoverBlue text-xs font-medium opacity-75">
        <Link href={"/"}>Home</Link>
      </span>

      {breadcrumbs && breadcrumbs[0]?.breadCrumb === "product-category" ? (
        <div className="hover:text-blogNavHoverBlue text-xs font-medium opacity-75">
          <span className="mr-2">&gt;</span>
          <Link href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/store`}>
            Store
          </Link>
        </div>
      ) : null}
      <ul className="flex items-center space-x-2">
        {breadcrumbs?.map((breadcrumb, index) => (
          <li className=" text-xs font-medium opacity-75" key={index}>
            <span className="mr-2">&gt;</span>
            <Link
              href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${breadcrumb?.breadCrumb}`}
              passHref
              className="hover:text-blogNavHoverBlue text-xs font-medium opacity-75"
            >
              {breadcrumb?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
