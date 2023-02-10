// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

import fetchProducts from "../fetchProducts.js";

const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  const loading = getElement(".page-loading");
  display(store, getElement(".products-container"));
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
  window.addEventListener("DOMContentLoaded", function (e) {
    loading.style.display = "none";
  });
};
init();
