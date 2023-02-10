import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = [
    "all", //all is also a option to be included in company list
    ...new Set(
      store.map((pro) => {
        return pro.company;
      })
    ),
  ]; //spread operator to the set object(converts obj to array)
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((comp) => {
      return `<button class="company-btn">${comp}</button>`;
    })
    .join("");

  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter((pro) => {
          return pro.company === e.target.textContent;
        });
      }
      display(newStore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
