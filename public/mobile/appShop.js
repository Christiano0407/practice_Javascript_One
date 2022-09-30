//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");
const menuMobileBurger = document.querySelector("#idMenuBurger");
const idMenuMobile = document.querySelector("#idMobileMenu");

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

/* const mobileMenu = () => {
  if (idMenuMobile) {
/idMenuMobile.classList.toggle("inactive");
  }
}; */
//menuMobileBurger.addEventListener("click", mobileMenu);
