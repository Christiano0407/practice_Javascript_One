//** === Javascript Practice Challenge === */
//*TODO === Variables  === === === === === === ===  */
const title = document.querySelector(`#idTitle`);
const textOne = document.querySelector(`#idTextOne`);
const input = document.querySelector(`#idInputText`);
const inputName = document.querySelector(`#name`);
const sectionOne = document.getElementById(`idSectionMain`);
const btn = document.getElementById(`idBtnClick`);
const btnAdd = document.getElementById(`idBtnClickImg`);
const idImage = document.querySelector(`#idImage`);
const idTextInput = document.querySelector(`#idTextInput`);
const inputDiscount = document.querySelector(`#discount`);
const formulary = document.querySelector(`#idForm`);
const textError = document.querySelector(`#idInputError`);
const textErrorPassword = document.querySelector(`#idInputErrorPassword`);
const formError = document.querySelector("#idFormError");

//*TODO ===  === === === Create Virtual DOM === === === === === === === === */
const image = document.createElement(`img`);
const figureCaption = document.createElement(`figcaption`);
image.src =
  "https://images.unsplash.com/photo-1663720409027-5f7b019b0990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80";
//image.setAttribute(`src`, `./url`);
image.width = 250;
image.height = 200;
//image.setAttribute(`class`, `img-DOM`);
image.classList.add("img-DOM");
image.alt = "imgNew";
figureCaption.textContent = "Image App New";
title.innerHTML = "User: Enter & confirm";
textOne.textContent = "APP Images";
textError.textContent = "Have 8 or 16 Characters of the User";
textErrorPassword.textContent =
  "Your Password have: name, characters and numbers";

//* === === === Regular Expressions === === === */
const expressions = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letters, numbers, Screenplay y underscore
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letter y space, can have accents.
  password: /^.{4,12}$/, // 4 a 12 digits.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phoneNumber: /^\d{7,14}$/, // 7 a 14 numbers.
};

//* === Camps*/
const camps = {
  user: false,
  name: false,
  password: false,
  email: false,
  phoneNumber: false,
};

//*Todo === === ===  Add Error ===  === ===  */
const errorParagraph = document.createElement("p");
errorParagraph.setAttribute(
  "class",
  "error__Paragraph fa-solid fa-triangle-exclamation"
);
errorParagraph.textContent = " Error: Please fill correct your formulary";
//const icon = document.createElement("img");

errorParagraph.style.display = "none";

//*Todo === Events === === === === === === */
btn.addEventListener("click", eventClick);
function eventClick(event) {
  //console.log({ event });
  //event.preventDefault();
  /* sectionOne.append(idTextInput); */
  idTextInput.append(
    `${input.value}: ${inputName.value - inputDiscount.value}`
  );
  formError.style.background = "#f66868";
  formError.append(errorParagraph);
  errorParagraph.style.display = "flex";
}
btnAdd.style.display = "none";
btnAdd.addEventListener("click", addImg);
function addImg() {
  idImage.append(image, figureCaption);
}
