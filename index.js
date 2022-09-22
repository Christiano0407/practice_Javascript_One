//** === Javascript Practice Challenge === */
//*TODO === Variables  === === === === === === ===  */
const title = document.querySelector(`#idTitle`);
const textOne = document.querySelector(`#idTextOne`);
const textTwo = document.querySelector(`#idTextTwo`);
const textThree = document.querySelector(`#idTextThree`);
const input = document.querySelector(`#idInputText`);
const sectionOne = document.getElementById(`idSectionMain`);

//*TODO ===  === === === Create Virtual DOM === === === === === === === === */
// getAttribute;
// setAttribute;
// classList => .add / .remove / .toggle / .contains ===
// .append
const image = document.createElement(`img`);
image.src =
  "https://images.unsplash.com/photo-1663720409027-5f7b019b0990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80";
//image.setAttribute(`src`, `./url`);
image.width = 250;
image.height = 200;
//image.setAttribute(`class`, `img-DOM`);
image.classList.add("img-DOM");
sectionOne.appendChild(image);

title.innerHTML = "Manipulation Of DOM";
textOne.textContent = "Javascript Manipulation Text";
textTwo.textContent = "This is Text Two";
textThree.textContent = "Three Text New";
console.log(input.value);
