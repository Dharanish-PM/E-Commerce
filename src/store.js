import { getStorageItem, setStorageItem } from "./utils.js";
// let store = [];
let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((pro) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = pro;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem("store", store);
};
// console.log(store); empty array only, access using export
const findProduct = () => {};
export { store, setupStore, findProduct };
