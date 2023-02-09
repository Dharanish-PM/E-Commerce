import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closecartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");
toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});
closecartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});
export const openCart = () => {
  cartOverlay.classList.add("show");
};
