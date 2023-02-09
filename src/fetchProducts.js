import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  //   try {
  //     const res = await fetch(allProductsUrl);
  //     if (!res.ok) {
  //         return res.json();
  //     }
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  const res = await fetch(allProductsUrl).catch((err) => {
    console.log(err);
  });
  if (res) {
    return res.json();
  }
  return res;
};

export default fetchProducts;
