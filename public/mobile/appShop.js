//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");
const burgerMenu = document.querySelector("#idMenuBurger");
const menuMobile = document.querySelector("#idMobileMenu");
const shoppingCart = document.querySelector(`#idShoppingCart`);
const productDetail = document.querySelector(`#idProductDetail`);

//** === === === === === Execute Code ===  === === === === */

//*? === BURGER mENU */
// === > Remember ADD Overlay
const mobileMenu = () => {
  const isClosedProductShopping = productDetail.classList.contains("inactive");

  if (!isClosedProductShopping) {
    productDetail.classList.add("inactive");
  }

  menuMobile.classList.toggle("inactive");
  menuMobile.classList.toggle("animationSlide");
};
burgerMenu.addEventListener("click", mobileMenu);

//*? === Desktop MENU */
//desktop.classList.add("visible");
//desktop.classList.add("active");
//if (desktopMenu.classList.contains("inactive")) {}
const toggleMenu = () => {
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle(`inactive`);
};
userIcon.addEventListener("click", toggleMenu);
//*? === Product Detail ===  */
// productDetail.classList.contains("inactive")
const onShopping = () => {
  const isMobileMenuClosed = menuMobile.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    menuMobile.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
};

shoppingCart.addEventListener("click", onShopping);
