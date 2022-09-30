//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");
const burgerMenu = document.querySelector("#idMenuBurger");
const menuMobile = document.querySelector("#idMobileMenu");

//** === === === === === Execute Code ===  === === === === */
//desktop.classList.add("visible");
//desktop.classList.add("active");
//if (desktopMenu.classList.contains("inactive")) {}
const toggleMenu = () => {
  if (desktopMenu) {
    desktopMenu.classList.toggle(`inactive`);
  }
};

userIcon.addEventListener("click", toggleMenu);

const mobileMenu = () => {
  if (menuMobile) {
    menuMobile.classList.toggle("inactive");
  }
};
burgerMenu.addEventListener("click", mobileMenu);
