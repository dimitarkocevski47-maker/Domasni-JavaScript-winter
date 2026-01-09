//1.minutesToSeconds
function minutesToSeconds(minutes) {
 if (typeof minutes !== "number" || isNaN(minutes) || minutes < 0) {
    return null;
  }
  return minutes * 60;
}

console.log(
  minutesToSeconds(Number(prompt("Enter minutes:")))
);


//2. hoursToMinutes
function hoursToMinutes(hours) {
 if (typeof hours !== "number" || isNaN(hours) || hours < 0) {
    return null;
  } 
    return hours * 60;
}

console.log(
  hoursToMinutes(Number(prompt("Enter hours:")))
);


//3. hoursToSeconds
function hoursToSeconds(hours) {
    if (typeof hours !== "number" || isNaN(hours) || hours < 0) {
         return null;
    }
    return hours * 3600;
}

console.log(
  hoursToSeconds(Number(prompt("Enter hours:")))
);

//4. daysToHours
function daysToHours(days) {
    if (typeof days !== "number" || isNaN(days) || days < 0) {      
            return null;
    }
    return days * 24;
}

console.log(
  daysToHours(Number(prompt("Enter days:")))
);

//5. daysToSeconds
function daysToSeconds(days) {
    if (typeof days !== "number" || isNaN(days) || days < 0) {
        return null;
    }
    return days * 86400;
}

console.log(
  daysToSeconds(Number(prompt("Enter days:")))
);

//6. isTruthyValue
function isTruthyValue(value) {
    return Boolean(value);
} 

console.log(
  isTruthyValue(prompt("Enter value:"))
);

//7. areBothTruthy
function areBothTruthy(a, b) {    
    return Boolean(a && b);
}

console.log(
  areBothTruthy(prompt("Enter first value:"), prompt("Enter second value:"))
);

//8. getStringLength
function getStringLength(text) {
    if (typeof text !== "string") {
        return null;
    }
    return text.length;
}
console.log(
  getStringLength(prompt("Enter text:"))
);

// 9. getFirstAndLastChar
function getFirstAndLastChar(text) {
  if (typeof text !== "string" || text.length < 2) {
    return null;
  }
  return text[0] + text[text.length - 1];
}

console.log(
  getFirstAndLastChar(prompt("Enter text:"))
);

//10. capitalizeIfLong
function capitalizeIfLong(text) {
  if (typeof text !== "string") {
    return null;
  }

  if (text.length >= 5) {
    return text[0].toUpperCase() + text.slice(1);
  }

  return text;
}

console.log(
  capitalizeIfLong(prompt("Enter a string:"))
);

//11.isVowel
function isVowel(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return false;
  }
  char = char.toLowerCase();
  return (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  );
}

console.log(
  isVowel(prompt("Enter one character:"))
);

// 12.getLargerNumber
function getLargerNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return null;
    }

    return a > b ? a : b;
}

console.log(
  getLargerNumber(
    Number(prompt("Enter first number:")),
    Number(prompt("Enter second number:"))
  )
);

// 13.getMiddleNumber
function getMiddleNumber(a, b, c) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c)
  ) {
    return null;
  }

  if (a === b || b === c || a === c) {
    return null;
  }

  if ((a > b && a < c) || (a < b && a > c)) return a;
  if ((b > a && b < c) || (b < a && b > c)) return b;
  return c;
}

console.log(
  getMiddleNumber(
    Number(prompt("Enter first number:")),
    Number(prompt("Enter second number:")),
    Number(prompt("Enter third number:"))
  )
);

//14.formatFullName
function formatFullName(firstName, lastName) {
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    !firstName ||
    !lastName
  ) {
    return null;
  }
  return lastName + ", " + firstName;
}

console.log(
  formatFullName(
    prompt("Enter first name:"),
    prompt("Enter last name:")
  )
);

//15.isValidUsername
function isValidUsername(username) {
  if (typeof username !== "string") {
    return false;
  }

  if (username.length < 5 || username.length > 12) {
    return false;
  }

  if (!isNaN(username[0])) {
    return false;
  }

  return true;
}

console.log(
  isValidUsername(prompt("Enter username:"))
);