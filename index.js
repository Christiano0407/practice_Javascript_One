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
title.innerHTML = "Manipulation Of DOM";
textOne.textContent = "APP Images";

//*Todo === Events === === === === === === */
btn.addEventListener("click", eventClick);
function eventClick() {
  console.log(input.value);
  console.log(inputName.value);
}

btnAdd.addEventListener("click", addImg);
function addImg() {
  idImage.append(image, figureCaption);
}
