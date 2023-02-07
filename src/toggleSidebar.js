import { getElement } from "./utils.js";
const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closebtn = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});
closebtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
