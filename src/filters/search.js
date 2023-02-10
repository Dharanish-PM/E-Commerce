import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const val = nameInput.value;
    if (val) {
      const newStore = store.filter((pro) => {
        let { name } = pro;
        name = name.toLowerCase();
        if (name.startsWith(val)) {
          return pro;
        }
      });
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">No items matched</h3>`;
      } else {
        display(newStore, getElement(".products-container"));
      }
    } else {
      display(store, getElement(".products-container"));
    }
  });
};
export default setupSearch;
