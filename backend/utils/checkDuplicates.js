import products from "../data/products.js";

//check duplicate asins and slugs values in the products data
const checkDuplicates = (data) => {
  const slugs = new Set();
  const asins = new Set();
  const duplicateSlugs = [];
  const duplicateAsins = [];

  for (const obj of data) {
    // Check for duplicate slugs
    if (slugs.has(obj.slug)) {
      if (!duplicateSlugs.includes(obj.slug)) {
        duplicateSlugs.push(obj.slug);
      }
    } else {
      slugs.add(obj.slug);
    }

    // Check for duplicate asins
    if (asins.has(obj.asin)) {
      if (!duplicateAsins.includes(obj.asin)) {
        duplicateAsins.push(obj.asin);
      }
    } else {
      asins.add(obj.asin);
    }
  }

  // Log results for duplicates
  if (duplicateSlugs.length > 0) {
    console.log("Duplicate slugs in the productDetails file:", duplicateSlugs);
  } else {
    console.log("No duplicate slugs found in the productDetails file");
  }

  if (duplicateAsins.length > 0) {
    console.log("Duplicate ASINs in the productDetails file:", duplicateAsins);
  } else {
    console.log("No duplicate ASINs found in the productDetails file");
  }
};

checkDuplicates(products);
