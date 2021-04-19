let value = document.getElementById("value");

let startingNumber = 0;

const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

decrease.addEventListener("click", () => {
  value.textContent = --startingNumber;
  colourOfValue();
});

increase.addEventListener("click", () => {
  value.textContent = startingNumber++;
  colourOfValue();
});

reset.addEventListener("click", () => {
  startingNumber = 0;
  value.textContent = startingNumber;
  colourOfValue();
});

const colourOfValue = () => {
  if (startingNumber >= 1) {
    value.style.color = "green";
  } else if (startingNumber == 0) {
    value.style.color = "black";
  } else {
    value.style.color = "red";
  }
};
