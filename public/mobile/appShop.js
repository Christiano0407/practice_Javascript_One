//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");
const burgerMenu = document.querySelector("#idMenuBurger");
const menuMobile = document.querySelector("#idMobileMenu");
const shoppingCart = document.querySelector(`#idShoppingCart`);
const productDetail = document.querySelector(`#idProductDetail`);
const CardContainer = document.querySelector("#idCardsContainer");

//** === === === === === Execute Code ===  === === === === */

//*! === BURGER mENU */
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

//*! === Desktop MENU */
const toggleMenu = () => {
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle(`inactive`);
};
userIcon.addEventListener("click", toggleMenu);
//*! === Product Detail ===  */
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

//*! === Create Card Product === */
const productList = [];

productList.push({
  name: "Bike",
  price: 120.0,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Skates",
  price: 99.99,
  image:
    "https://images.unsplash.com/photo-1596706696066-99a44cc64e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80",
});
productList.push({
  name: "Motorcycle",
  price: 250.0,
  image:
    "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
});

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imgCard = document.createElement("img");
  imgCard.setAttribute("src", product.image);
  imgCard.setAttribute("alt", "Image-Card");

  productCard.appendChild(imgCard);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  const productInfoDiv = document.createElement("div");
  const textProduct = document.createElement("p");
  textProduct.innerText = product.name;
  const priceProduct = document.createElement("p");
  priceProduct.innerText = `$` + product.price;

  const figureImage = document.createElement("figure");
  const shopImg = document.createElement("img");
  shopImg.setAttribute("src", "../src/assets/icon/bt_add_to_cart.svg");

  productInfo.append(productInfoDiv, figureImage);
  productInfoDiv.append(textProduct, priceProduct);
  figureImage.appendChild(shopImg);

  CardContainer.append(productCard);
}
