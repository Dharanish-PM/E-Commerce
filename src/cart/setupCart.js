// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemcountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");
let cart = getStorageItem("cart");

export const addToCart = (id) => {
  //item in cart increment count or add new
  //console.log(id);
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    //updatevalues
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];

    //al can use const ele= items.find((val)=>val.dataset.id===id), ele.innerHTML="amount"
    items.forEach((itemAmount) => {
      if (itemAmount.dataset.id == id) {
        itemAmount.innerHTML = `${amount}`;
      }
    });
  }

  displayCartItemCount();
  displayCartTotal();
  setStorageItem("cart", cart);
  openCart(); //to open the cart once the add to cart icon clicked
};
function displayCartItemCount() {
  let amount = 0;
  cart.forEach((cartItem) => {
    amount += cartItem.amount;
  });
  console.log(amount);

  // const amount = cart.reduce((total, cartItem) => {
  //   return (total += cartItem.amount);
  // }, 0);
  cartItemcountDOM.textContent = `${amount}`;
}
function displayCartTotal() {
  let totalprice = 0;
  cart.forEach((cartItem) => {
    totalprice += cartItem.amount * cartItem.price;
  });
  console.log(totalprice);

  // let totalprice = cart.reduce((total, cartItem) => {
  //   console.log(cartItem);
  //   return (total += cartItem.price * cartItem.amount);
  // }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(totalprice)}`;
}
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}
function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      //cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      cartItem.amount += 1;
      newAmount = cartItem.amount;
    }
    return cartItem;
  });
  return newAmount;
}
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      //cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      cartItem.amount -= 1;
      newAmount = cartItem.amount;
    }
    return cartItem;
  });
  return newAmount;
}
function removeItem(id, element) {
  cart = cart.filter((cartItem) => cartItem.id != element.dataset.id);
}

function setupCartFunctionality() {
  cartItemsDOM.addEventListener("click", function (e) {
    const element = e.target;
    //element removed

    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(element.dataset.id, element);
      element.parentElement.parentElement.remove();
    } else if (
      //increment
      element.parentElement.classList.contains("cart-item-increase-btn")
    ) {
      console.log(cart);
      let newAmount = increaseAmount(element.parentElement.dataset.id);
      element.parentElement.nextElementSibling.textContent = `${newAmount}`;
    } else if (
      element.parentElement.classList.contains("cart-item-decrease-btn")
    ) {
      let newAmount = decreaseAmount(element.parentElement.dataset.id);
      element.parentElement.previousElementSibling.textContent = `${newAmount}`;
      if (newAmount == 0) {
        removeItem(element.parentElement.dataset.id, element);
        element.parentElement.parentElement.parentElement.remove();
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}
const init = () => {
  //display aount of cart items
  console.log(cart);
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};
init(); //gets called in all pages
