//** === Javascript Practice Challenge === */
//*TODO === Variables  === === === === === === ===  */
const title = document.querySelector(`#idTitle`);
const textOne = document.querySelector(`#idTextOne`);
const input = document.querySelector(`#idInputText`);
const inputName = document.querySelector(`#name`);
const inputError = document.querySelector("#idInputError");
const inputErrorPassword = document.querySelector("#idInputErrorPassword");
const sectionOne = document.getElementById(`idSectionMain`);
const btn = document.getElementById(`idBtnClick`);
const btnAdd = document.getElementById(`idBtnClickImg`);
const idImage = document.querySelector(`#idImage`);
const idTextInput = document.querySelector(`#idTextInput`);
const inputDiscount = document.querySelector(`#discount`);
const textError = document.querySelector(`#idInputError`);
const textErrorPassword = document.querySelector(`#idInputErrorPassword`);
const formError = document.querySelector("#idFormError");

const formulary = document.querySelector(`#idForm`);
const inputs = document.querySelectorAll(`#idForm input`); // Access all form and Inp
//console.log(inputs);

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
  idInputText: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letters, numbers, Screenplay y underscore
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letter y space, can have accents.
  password: /^.{4,12}$/, // 4 a 12 digits.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phoneNumber: /^\d{7,14}$/, // 7 a 14 numbers.
  discount: /^[a-zA-Z0-9\_\-]{4,16}$/,
};

//* === Camps*/
const camps = {
  idInputText: false,
  name: false,
  password: false,
  email: false,
  phoneNumber: false,
  discount: false,
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

//*Todo === Events === & Form === === === === === */
const idFormGroupUser = document.querySelector("#idFormGroupUser");
// name => input
const formularyValidation = (e) => {
  //console.log(e.target.name);
  if (e.target.name === "idInputText") {
    console.log("idInput");
    validationCamp(expressions.idInputText, e.target, `idInputText`);
    return;
  }
  if (e.target.name === "name") {
    console.log("Name");
    return;
  }
  if (e.target.name === "discount") {
    console.log("Discount");
    return;
  }
  if (e.target.name === "password") {
    console.log("Password");
    return;
  }

  console.log("Not Access");
};
// == idFormGroupUser / idFormGroupUser i
//** === Function Validation */
const validationCamp = (expression, input, camp) => {
  if (expression.test(input.value)) {
    document
      .getElementById(`${camp}`)
      .classList.remove("form__group--incorrect");
    document.getElementById(`${camp}`).classList.add("form__group--correct");

    document.querySelector(`${camp} i`).classList.remove(`fa-circle-xmark`);
    document.querySelector(` ${camp} i`).classList.add(`fa-user-group`);
    inputError.classList.remove("form__group--incorrect-active");
  } else {
    document.getElementById(`${camp}`).classList.add("form__group--incorrect");
    document.getElementById(`${camp}`).classList.remove("form__group--correct");

    document.querySelector(`${camp} i`).classList.remove(`fa-user-group`);
    document.querySelector(`${camp} i`).classList.add(`fa-circle-xmark`);
    inputError.classList.add("form__group--incorrect-active");
  }
};

//** === Call Input */
inputs.forEach((input) => {
  input.addEventListener("keyup", formularyValidation);
  input.addEventListener("blur", formularyValidation);
});

//** === Btn Click */
btn.addEventListener("click", eventClick);

function eventClick(event) {
  event.preventDefault();
  /* sectionOne.append(idTextInput); */
  idTextInput.append(
    `${input.value}: ${inputName.value - inputDiscount.value}`
  );
  formError.style.background = "#f66868";
  formError.append(errorParagraph);
  inputErrorPassword.style.display = "flex";
}

//* === Button Img === */
btnAdd.style.display = "none";
btnAdd.addEventListener("click", addImg);
function addImg() {
  idImage.append(image, figureCaption);
}
