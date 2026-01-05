let input = prompt("Enter a score between 0 and 100:");
let score = parseInt(input);

if (isNaN(score) || score < 0 || score > 100) {
  console.log("Please enter a valid score between 0 and 100.");
} else {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

 console.log("Your score is " + score + " and your grade is " + grade + ".");
}
