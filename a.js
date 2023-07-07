const form = document.getElementById("myForm");

const html = form.outerHTML;
console.log(html);

localStorage.setItem("html", html);

const button = document.getElementById("button");

button.addEventListener("click", () => {
  console.log("hello");
  alert("hello");
  const data = Object.fromEntries(new FormData(form).entries());
  console.log(data);
  const b = document.createElement("button");
  b.innerHTML = "das";
  form.appendChild(b);
  const html = form.outerHTML;
  console.log(html);

  localStorage.setItem("html", html);
});
