let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

let num1 = parseInt(input1);
let num2 = parseInt(input2);

let operation = prompt("Choose an operation (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numbers.");
} else {
  let result;

  if (operation === "+") {
    result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
  } else if (operation === "-") {
    result = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + result);
  } else if (operation === "*") {
    result = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + result);
  } else if (operation === "/") {
    if (num2 === 0) {
      console.log("Division by zero is not allowed.");
    } else {
      result = num1 / num2;
      console.log(num1 + " / " + num2 + " = " + result);
    }
  } else {
    console.log("Invalid operation selected.");
  }
}