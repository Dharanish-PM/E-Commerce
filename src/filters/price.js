import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceVal = getElement(".price-value");

  //setup Filter
  let maxPrice = store.map((pro) => pro.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceVal.textContent = `values: $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const val = parseInt(priceInput.value); //as it return string
    priceVal.textContent = `values: $${val}`;
    let newStore = store.filter((pro) => pro.price / 100 <= val);
    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">No items matched</h3>`;
    } else {
      display(newStore, getElement(".products-container"));
    }
  });
};

export default setupPrice;
