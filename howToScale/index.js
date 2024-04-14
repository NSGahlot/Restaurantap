const form = document.querySelector("form");
function handleFormSubmit(event) {
event.preventDefault();
const username = event.target.username.value;
const mail = event.target.email.value;
const phone = event.target.phone.value;
const obj = {
    username,
    mail,
    phone
}
localStorage.setItem(obj.mail, JSON.stringify(obj));
displayOnScreen(obj);
}

function displayOnScreen(obj) {
const ul = document.getElementById("display_details");
const li = document.createElement('li');
li.textContent = obj.username + " - " + obj.mail + " - " + obj.phone;
ul.appendChild(li);
}

// console.log("a");

// console.log("b");

// setTimeout(() => console.log("c"), 1000);

// console.log("d");

// console.log("a");

// console.log("b");

// setTimeout(() => console.log("c"), 1000);

// setTimeout(() => console.log("d"), 0);

// console.log("e");

// var arr = [1, 2, 3, 5];

// var newArr = arr.forEach((item, i) => {
//   console.log(item + "index" + i);

//   return item + i;
// });

// console.log(newArr);

var arr = [1, 2, 3, 5];

var newArr = arr.map((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);