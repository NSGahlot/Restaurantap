// const form = document.querySelector('form')
// const newInput = document.createElement('input');
// newInput.placeholder = "Description of fruits";
// newInput.style.fontStyle = "italic"
// form.appendChild(newInput);
// const button = document.querySelector('button');
// form.insertBefore( newInput, button);

// // const newPara = document.createElement("p");
// // if(newInput.value) {
// //     newPara.textContent = newInput.value;
// // }
// const filter = document.getElementById('filter');

// filter.addEventListener('keyup', function(event) {
// const textEntered = event.target.value.toLowerCase();
// const fruitItems = document.getElementsByClassName('fruit');
// for(let i=0; i<fruitItems.length; i++) {
//     const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
//     if(currentFruitText.indexOf(textEntered) === -1) {
//        fruitItems[i].style.display = 'none';
//     }
//     else {
//         fruitItems[i].style.display = "flex";
//     }
// }
// })

// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const input = document.createElement("input");
input.placeholder = "Description of fruits";
const button = document.querySelector("button");
form.insertBefore(input, button);
form.appendChild(input);

// Show the fruit description in italics on the next line
input.style.fontStyle = "italic";


