import products from "../data/products.js";
import redirects from "../data/redirects.js";

//check if slug is present in the source
const isSlugPresent = (slug, redirects) => {
  for (let i = 0; i < redirects.length; i++) {
    if (redirects[i].source === `/product/${slug}`) {
      return true;
    }
  }
  return false;
};

console.log("Slugs from products present in the redirects: ");

// Check if the slug in products is present in the redirects. If it is, remove it, and update the redirects in the frontend
for (let i = 0; i < products.length; i++) {
  const slug = products[i].slug;
  const isPresent = isSlugPresent(slug, redirects);

  if (isPresent === true) {
    console.log(`${slug}`);
  }
}
