const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit',function(event){
event.preventDefault();
const fruitsToAdd = document.getElementById('fruit-to-add');
const newLi = document.createElement('li');
const newLiText = document.createTextNode(fruitsToAdd.value);
newLi.appendChild(newLiText);
newLi.className = "fruit";
const deleteBtn = document.createElement('button');
const deleteBtnText = document.createTextNode('x');
deleteBtn.appendChild(deleteBtnText);
deleteBtn.className = 'delete-btn';
newLi.appendChild(deleteBtn);

const editButton = document.createElement('button');
const editBtnText = document.createTextNode('Edit');
editButton.appendChild(editBtnText);
editButton.className ='edit-btn';
newLi.appendChild(editButton);
fruits.appendChild(newLi);
// console.log(newLi);
})

fruits.addEventListener('click', function(event){ 
if(event.target.classList.contains('delete-btn') ){
const fruitToDelete = event.target.parentElement;
fruits.removeChild(fruitToDelete)
};
});