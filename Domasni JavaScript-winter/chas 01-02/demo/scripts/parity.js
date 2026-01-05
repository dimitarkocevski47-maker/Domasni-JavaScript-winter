let input = prompt("Enter a number:");
let number = parseInt(input);

if (isNaN(number)) {
  console.log("Invalid input. Please enter a number.");
} else {
  let sign;
  let type;

  if (number > 0) {
    sign = "positive";
  } else if (number < 0) {
    sign = "negative";
  } else {
    sign = "zero";
  }

  if (number % 2 === 0) {
    type = "even";
  } else {
    type = "odd";
  }

   console.log("The number " + number + " is " + sign + " and " + type + ".");
}
