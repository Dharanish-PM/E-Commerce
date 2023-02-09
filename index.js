// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    //add pro to store
    setupStore(products);

    //store from local storage
    const featured = store.filter((pro) => {
      return pro.featured === true;
    });
    display(featured, getElement(".featured-center"));
  }
};
window.addEventListener("DOMContentLoaded", init);
