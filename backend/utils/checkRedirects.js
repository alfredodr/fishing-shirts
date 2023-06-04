import productDetails from "../data/productDetails.js";
import redirects from "./redirects.js";

//check if slug is present in the source
const isSlugPresent = (slug, redirects) => {
  for (let i = 0; i < redirects.length; i++) {
    if (redirects[i].source.includes(slug)) {
      return true;
    }
  }
  return false;
};

// Check if the slug in productDetails is present in the redirects. If it is, remove it, and update the redirects in the frontend
for (let i = 0; i < productDetails.length; i++) {
  const slug = productDetails[i].slug;
  const isPresent = isSlugPresent(slug, redirects);

  if (isPresent === true) {
    console.log(
      `Slug "${slug}" from productDetails is present in the redirects: ${isPresent}`
    );
  }
}
