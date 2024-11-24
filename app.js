const form = document.querySelector("#form");
const app = document.querySelector("#app");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const hatemail = document.querySelector("input");
  console.log(hatemail.value);
  const p = document.createElement("p");
  app.append(p);
  p.innerText = hatemail.value;
  hatemail.value = "";
});
