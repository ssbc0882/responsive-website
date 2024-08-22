import "./app/scss/styles.scss";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const breakpoint = window.matchMedia("(width < 43.75em)");
const menuTopNav = document.getElementById("menuTopNav");
const overlay = document.getElementById("overlay");

const main = document.getElementById("main");
const footer = document.getElementById("footer");

const setupTopNav = () => {
  if (breakpoint.matches) {
    menuTopNav.setAttribute("inert", "");
  } else {
    menuTopNav.removeAttribute("inert");
  }
};

setupTopNav();

const openMobileMenu = () => {
  btnOpen.setAttribute("aria-expanded", "true");
  main.setAttribute("inert", "");
  menuTopNav.removeAttribute("inert");
  footer.setAttribute("inert", "");

  menuTopNav.style.transitionDuration = "0.4s";
  overlay.style.transitionDuration = "0.4s";
  disableBodyScroll(menuTopNav);
  btnClose.focus();
};

const closeMobileMenu = () => {
  btnOpen.setAttribute("aria-expanded", "false");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");
  menuTopNav.setAttribute("inert", "");

  enableBodyScroll(menuTopNav);
  btnOpen.focus();

  setTimeout(() => {
    menuTopNav.removeAttribute("style");
    overlay.removeAttribute("style");
  }, 500);
};

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

breakpoint.addEventListener("change", () => {
  console.log("breakpoint");
  setupTopNav();
});
