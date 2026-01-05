let ageInput = prompt('Please enter your age');
let age = parseInt(ageInput);

if (isNaN(age) || age < 0) {
  console.log("Please enter a valid age.");
} else if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 17) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}