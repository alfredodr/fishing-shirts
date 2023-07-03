import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const { asPath } = router;
  const [breadcrumbs, setBreadcrumbs] = useState();

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
    <nav className="inline-flex space-x-1" aria-label="Breadcrumb">
      <Link
        href={"/"}
        className="hover:text-blogNavHoverBlue text-xs font-medium opacity-75"
      >
        Home
      </Link>
      {breadcrumbs && (
        <>
          <span className="text-xs font-medium text-gray-500">&gt;</span>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <span className="text-xs font-medium opacity-75">
                {breadcrumb.label}
              </span>
              {index !== breadcrumbs.length - 1 && (
                <span className="text-xs font-medium opacity-75">&gt;</span>
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
