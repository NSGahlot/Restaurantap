function handleFormSubmit(event) {
  event.preventDefault();
  userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value
  }

  axios.post("https://crudcrud.com/api/d2a181925f154b09b012af23362a8c6b/appointmentData"
  ,userDetails
)
.then((response) => displayUserOnScreen(response.data))
.catch((error) => console.log(error))

document.getElementById("username").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";
}

const url =
  "https://crudcrud.com/api/d2a181925f154b09b012af23362a8c6b/appointmentData";
function displayUserOnScreen(userDetailsResponse) {
  const li = document.createElement("li");
  li.textContent =
    userDetailsResponse.username +
    " - " +
    userDetailsResponse.email +
    " - " +
    userDetailsResponse.phone;

    li.id = userDetailsResponse._id

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    li.appendChild(editBtn);

    const ul = document.querySelector("ul");
    ul.appendChild(li);

    deleteBtn.addEventListener('click', function(event) {
       axios
       .delete(url + "/" + event.target.parentElement.id)
       .then((res) => console.log(res))
       .catch((err) => console.log(err))
       
       ul.removeChild(li);
    })
    
    editBtn.addEventListener('click', function(event) {
      axios
      .edit(url + "/" + event.target.parentElement.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

      ul.removeChild(li);

      document.getElementById("username").value = userDetailsResponse.username;
      document.getElementById("email").value = userDetailsResponse.email;
      document.getElementById("phone").value = userDetailsResponse.phone;
    });
};