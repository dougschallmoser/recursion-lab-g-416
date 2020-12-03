// Code your solution here!

function printString(string) {
  console.log(string[0])
  
  if (string.length > 1) {
    let subString = string.substring(1, string.length)
    printString(subString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 0) {
    let subString = string.substring(0, string.length - 1)
    reverseString(subString)
  } else {
    return true
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}