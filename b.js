const myForm = localStorage.getItem("html");
console.log(myForm);

const div = document.getElementById("document");

div.innerHTML = myForm;

const formS = document.getElementById("myForm");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  console.log("hello");
  alert("hello");
  const data = Object.fromEntries(new FormData(formS).entries());
  console.log(data);
});
