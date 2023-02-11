const output = document.querySelector(".output");
const previousNumber = output.querySelector(".previousNumber");
const currentNumber = output.querySelector(".currentNumber");
const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");
const remove = document.querySelector(".remove");

let current = "";
let previous = "";
let operation = undefined;

numbers.forEach(number => {
  number.addEventListener("click", (event) => {
    current = current + event.target.innerText;
    currentNumber.innerText = current;
  });
});

decimal.addEventListener("click", (event) => {
  if (!current.includes(".")) {
    current = current + event.target.innerText;
    currentNumber.innerText = current;
  }
});

remove.addEventListener("click", () => {
  current = current.substring(0, current.length - 1);
  currentNumber.innerText = current;
});

