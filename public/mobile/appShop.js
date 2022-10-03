//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");
const burgerMenu = document.querySelector("#idMenuBurger");
const menuMobile = document.querySelector("#idMobileMenu");
const shoppingCart = document.querySelector(`#idShoppingCart`);
const productDetail = document.querySelector(`#idProductDetail`);
const CardContainer = document.querySelector("#idCardsContainer");
const upDetailProduct = document.querySelector("#idDetailProducts");
const closedProduct = document.querySelector("#idProductClosed");

//** === === === === === Execute Code ===  === === === === */

//*! === BURGER mENU */
// === > Remember ADD Overlay
const mobileMenu = () => {
  const isClosedProductShopping = productDetail.classList.contains("inactive");
  const isUpDetailProduct = upDetailProduct.classList.contains("inactive");

  if (!isClosedProductShopping) {
    productDetail.classList.add("inactive");
  }
  if (!isUpDetailProduct) {
    upDetailProduct.classList.add("inactive");
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
productList.push({
  name: "Skateboard",
  price: 150.99,
  image:
    "https://images.unsplash.com/photo-1602519392653-94913ff0005a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
});
productList.push({
  name: "Skydiving",
  price: 50.0,
  image:
    "https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
});
productList.push({
  name: "Ice Skates",
  price: 350.0,
  image:
    "https://images.unsplash.com/photo-1638720495078-facd4bd6625f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
});
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
  name: "Skateboard",
  price: 150.99,
  image:
    "https://images.unsplash.com/photo-1602519392653-94913ff0005a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
});

//*! === Product Detail */
const upProductDetail = () => {
  console.log("ON!");

  upDetailProduct.classList.remove("inactive");
  /*  upDetailProduct.classList.toggle("inactive"); */
};
//*! Closed Btn Detail Product */
const closedProductDetail = () => {
  upDetailProduct.classList.add("inactive");
};

closedProduct.addEventListener("click", closedProductDetail);

const renderProduct = (arr) => {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", product.image);
    imgCard.setAttribute("alt", "Image-Card");
    imgCard.classList.add("image-product");
    imgCard.addEventListener("click", upProductDetail);

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

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figureImage);

    productInfoDiv.appendChild(textProduct);
    productInfoDiv.appendChild(priceProduct);

    figureImage.appendChild(shopImg);

    productCard.append(imgCard, productInfo);

    CardContainer.appendChild(productCard);
  }
};
renderProduct(productList);
