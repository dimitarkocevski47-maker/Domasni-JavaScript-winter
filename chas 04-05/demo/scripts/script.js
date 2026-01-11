//1.Average of Numbers
function calculateAverage() {
    let count = parseInt(prompt("How many numbers do you want to enter?"));
    let numbers = [];
    let sum = 0;

    for (let i = 0; i < count; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}:`));
        numbers.push(num);
        sum += num;
    }

    let average = sum / count;
    console.log("Numbers:", numbers);
    console.log("Average:", average);
}
calculateAverage();


//2.Count Even Numbers
function countEvenNumbers() {
    let count = parseInt(prompt("How many numbers do you want to enter?"));
    let evenCount = 0;  
    for (let i = 0; i < count; i++) {
        let num = parseInt(prompt(`Enter number ${i + 1}:`));
        if (num % 2 === 0) {
            evenCount++;
        }
    }
    console.log("Count of even numbers:", evenCount);
}
countEvenNumbers();


//3.Find the Smallest Number
function findSmallest () {
    let count = parseInt(prompt('How many numbers do you want to enter?'));
    let samllestCount = 0;
    for (let i = 0; i < count; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}:`));
        if (i === 0 || num < samllestCount) {
            samllestCount = num;
        }
    }
    console.log("The smallest number is:", samllestCount);
}
findSmallest();


//4.Reverse an Array
function reverseArray() {
    let count = parseInt(prompt("How many elements do you want to enter?"));
    let arr = [];
    for (let i = 0; i < count; i++) {
        let element = prompt(`Enter element ${i + 1}:`);
        arr.push(element);
    }
    let reversedArr = arr.reverse();
    console.log("Reversed Array:", reversedArr);
}
reverseArray();


//5.Sum of Positive Numbers
function sumOfPositiveNumbers() {
    let count = parseInt(prompt("How many numbers do you want to enter?"));
    let sum = 0;
    for (let i = 0; i < count; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}:`));
        if (num > 0) {
            sum += num;
        }
    }
    console.log("Sum of positive numbers:", sum);
};
sumOfPositiveNumbers();


//6.FizzBuzz
function fizzBuzz() {
    let count = parseInt(prompt("Enter a positive integer:"));
    for (let i = 1; i <= count; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();


//7.Sum Until Zero
function sumUntilZero() {
    let sum = 0;
    while (true) {
        let num = parseFloat(prompt("Enter a number (0 to stop):"));
        if (num === 0) {
            break;
        }
        sum += num;
    }
    console.log("Total sum:", sum);
}
sumUntilZero();


//8.Multiplication Table
function multiplicationTable() {
    let number = parseInt(prompt("Enter a number:"));

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
multiplicationTable();


//9.Count Digits
function countDigits() {
    let number = prompt("Enter a number:");
    let digitCount = 0;
    for (let char of number) {
        if (char >= '0' && char <= '9') {
            digitCount++;
        }
    }
    console.log("Number of digits:", digitCount);
}
countDigits();


//10. Find Longest String
function findLongestString() {
    let count = parseInt(prompt("How many strings do you want to enter?"));
    let longestString = "";
    for (let i = 0; i < count; i++) {
        let str = prompt(`Enter string ${i + 1}:`);
        if (str.length > longestString.length) {
            longestString = str;
        }
    }
    console.log("The longest string is:", longestString);
}
findLongestString();


//11.Revrse a Number
function reverseNumber() {
    let number = parseInt(prompt("Enter a number:"));
    let reversed = 0;

    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }

    console.log("Reversed number:", reversed);
}
reverseNumber();


//12.Prime Number Check
function isPrime() {
    let number = parseInt(prompt("Enter a number:"));

    if (number <= 1) {
        console.log("Not Prime");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Not Prime");
            return;
        }
    }

    console.log("Prime");
}
isPrime();


//13.Remove Duplicates
function removeDuplicates() {
    let number = parseInt(prompt("Enter a number:"));
    let numStr = number.toString();
    let result = "";
    let seen = new Set();
    for (let char of numStr) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    console.log("Number after removing duplicates:", result);
}
removeDuplicates();


//14.Sum of Digits
function sumOfDigits() {
    let number = prompt("Enter a number:");
    let sum = 0;
    for (let char of number) {
        if (char >= '0' && char <= '9') {
            sum += parseInt(char);
        }
    }
    console.log("Sum of digits:", sum);
}
sumOfDigits();


//15.Palindrome Number Check
function isPalindrome() {
    let number = prompt("Enter a number:");
    let reversed = number.split('').reverse().join('');
    if (number === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}
isPalindrome();


//16.Armstrong Number Check 
function isArmstrong() {
    let number = prompt("Enter a number:");
    let numStr = number.toString();
    let numDigits = numStr.length;
    let sum = 0;
    for (let char of numStr) {
        let digit = parseInt(char);
        sum += Math.pow(digit, numDigits);
    }
    if (sum === parseInt(number)) {
        console.log("Armstrong Number");
    } else {
        console.log("Not an Armstrong Number");
    }
}
isArmstrong();


//17.Calculator with History
function calculatorWithHistory() {
  const results = [];
  let count = prompt("How many calculations do you want to perform?");

  for (let i = 0; i < count; i++) {
    let num1 = Number(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = Number(prompt("Enter second number:"));

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        continue;
    }

    results.push(result);
  }

  console.log("Calculation results:", results);
  return results;
}
calculatorWithHistory();