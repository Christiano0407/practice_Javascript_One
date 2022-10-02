//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");
const burgerMenu = document.querySelector("#idMenuBurger");
const menuMobile = document.querySelector("#idMobileMenu");
const shoppingCart = document.querySelector(`#idShoppingCart`);
const productDetail = document.querySelector(`#idProductDetail`);

//** === === === === === Execute Code ===  === === === === */
//desktop.classList.add("visible");
//desktop.classList.add("active");
//if (desktopMenu.classList.contains("inactive")) {}
//*? === SLIDE MENU */
const toggleMenu = () => {
  if (desktopMenu) {
    desktopMenu.classList.toggle(`inactive`);
  }
};

userIcon.addEventListener("click", toggleMenu);
//*? === BURGER mENU */
const mobileMenu = () => {
  if (menuMobile) {
    menuMobile.classList.toggle("inactive");
    menuMobile.classList.toggle("animationSlide");
  }
};
burgerMenu.addEventListener("click", mobileMenu);

//*? === Product Detail ===  */
// productDetail.classList.contains("inactive"
const onShopping = () => {
  if (productDetail) {
    productDetail.classList.toggle("inactive");
  }
};

shoppingCart.addEventListener("click", onShopping);
