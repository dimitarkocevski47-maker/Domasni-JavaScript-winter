let storedUsername = "Dimitar";
let storedPassword = "1234";

let enteredUsername = prompt("Enter your username:");
let enteredPassword = prompt("Enter your password:");

if (
  enteredUsername === "" || enteredPassword === "" ||
  enteredUsername === null || enteredPassword === null
) {
  console.log("Username and password cannot be empty.");
} else if (
  enteredUsername === storedUsername &&
  enteredPassword === storedPassword
) {
  console.log("Login successful.");
} else {
  console.log("Incorrect username or password.");
}
