import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BreadcrumbJsonLd } from "next-seo";

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
      return {
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [asPath]);

  return (
    <ol
      className="flex items-center align-middle space-x-2"
      aria-label="Breadcrumb"
    >
      <li className="hover:text-blogNavHoverBlue text-xs font-medium opacity-75">
        <Link href={"/"}>Home</Link>
      </li>

      {breadcrumbs && (
        <>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <li className=" text-xs font-medium text-gray-500">&gt;</li>
              <li className=" text-xs font-medium opacity-75">
                {breadcrumb.label}
              </li>
            </React.Fragment>
          ))}
        </>
      )}
    </ol>
  );
};

export default Breadcrumb;

// {index !== breadcrumbs.length - 1 && (
//   <li className="text-xs font-medium opacity-75">&gt;</li>
// )}
