import productDetails from "../data/productDetails.js";

//check duplicate slugs in the productDetails
const checkDuplicates = (data) => {
  const slugs = new Set();
  const duplicates = [];

  for (const obj of data) {
    if (slugs.has(obj.slug)) {
      if (!duplicates.includes(obj.slug)) {
        duplicates.push(obj.slug);
      }
    } else {
      slugs.add(obj.slug);
    }
  }

  if (duplicates > 0) {
    console.log("Duplicates products in the productDetails file:", duplicates);
  } else {
    console.log("No duplicate products found in the productDetails file");
  }
};

checkDuplicates(productDetails);
