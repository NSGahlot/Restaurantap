function handleFormSubmit(event) {
event.preventDefault();
const expenseAmount = event.target.expenseAmount.value;
const description = event.target.description.value;
const category = event.target.category.value;

const expenseDetails = {
    expenseAmount,
    description,
    category
}

localStorage.setItem(expenseDetails.description, JSON.stringify(expenseDetails));

showOnScreen(expenseDetails);
};

function showOnScreen(expenseDetails) {
    const ul = document.getElementById("userDetails");
    const li = document.createElement("li");

    li.textContent = expenseDetails.expenseAmount + " - " + expenseDetails.description + " - " + expenseDetails.category;
    console.log(li.textContent);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Expense";
    deleteBtn.addEventListener("click", deleteFun)
    function deleteFun() {
        ul.removeChild(li);
        localStorage.removeItem(expenseDetails.description);
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Expense"
    editBtn.addEventListener("click", editFun);
    function editFun() {
ul.removeChild(li);
localStorage.removeItem(expenseDetails.description);
document.getElementById("expenseAmount").value = expenseDetails.expenseAmount;
document.getElementById("description").value = expenseDetails.description;
document.getElementById("category").value = expenseDetails.category;

    };
li.appendChild(deleteBtn);
li.appendChild(editBtn);
ul.appendChild(li);
};
