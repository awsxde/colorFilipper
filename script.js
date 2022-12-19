let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let body = document.querySelector("body");

const randomColor = () =>
  Math.ceil(Math.random() * 9999999999999999)
    .toString(16)
    .slice(0, 6);

const btnHandler = () => {
  let num = randomColor();
  h1.textContent = `Color name: #${num}`;
  body.style.backgroundColor = `#${num}`;
};

btn.addEventListener("click", btnHandler);
