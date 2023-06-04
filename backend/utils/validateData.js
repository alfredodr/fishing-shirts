import productDetails from "../data/productDetails.js";
import categories from "../data/categories.js";

console.log("Count of products:", productDetails.length);

const validateData = (products, categories) => {
  for (const product of products) {
    for (const category of product.categories) {
      const categoryId = category._id;
      const matchingCategory = categories.find((c) => c._id === categoryId);
      if (!matchingCategory) {
        console.log(
          `Product '${product.asin}' has an invalid category: '${categoryId}'`
        );
      } else {
        const matchingProduct = matchingCategory.products.find(
          (p) => p._id === product.asin
        );
        if (!matchingProduct) {
          console.log(
            `Category '${matchingCategory.name}' is missing product: '${product.asin}'`
          );
        }
      }
    }
  }

  for (const category of categories) {
    for (const product of category.products) {
      const productId = product._id;
      const matchingProduct = products.find((p) => p.asin === productId);
      if (!matchingProduct) {
        console.log(
          `Category '${category.name}' has an invalid product: '${productId}'`
        );
      }
    }
  }
};

validateData(productDetails, categories);
