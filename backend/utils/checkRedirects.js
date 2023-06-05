import products from "../data/products.js";
import redirects from "../data/redirects.js";

//check if slug is present in the source
const isSlugPresent = (slug, redirects) => {
  for (let i = 0; i < redirects.length; i++) {
    if (redirects[i].source.includes(slug)) {
      return true;
    }
  }
  return false;
};

// Check if the slug in products is present in the redirects. If it is, remove it, and update the redirects in the frontend
for (let i = 0; i < products.length; i++) {
  const slug = products[i].slug;
  const isPresent = isSlugPresent(slug, redirects);

  if (isPresent === true) {
    console.log(
      `Slug "${slug}" from products is present in the redirects: ${isPresent}`
    );
  }
}
