const form = document.querySelector("#form");
const app = document.querySelector("#app");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const hatemail = document.querySelector("input");
  const p = document.createElement("p");
  const randomColor = makeRandomColor();

  app.append(p);

  p.innerText = hatemail.value;
  p.style.backgroundColor = randomColor;

  hatemail.value = "";
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
