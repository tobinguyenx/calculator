let num1 = 8;
let num2 = 2;

document.getElementById("first").innerText = num1;
document.getElementById("second").innerText = num2;

const add = document.getElementById("add");
let sum = document.getElementById("sum");

add.addEventListener("click", () => {
  let result = num1 + num2;
  sum.innerText = "= " + result;
});
