"use strict";
function printSum(...arr) {
  let result = arr[1];
  let result1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[0] === "number") {
      result1 += arr[i];
    }
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[0] === "+") {
      result += arr[i];
    } else if (arr[0] === "-") {
      result -= arr[i];
    } else if (arr[0] === "**") {
      result = result ** arr[i];
    } else if (arr[0] === "*") {
      result *= arr[i];
    }
  }
  return typeof arr[0] === "number" ? result1 : result;
}

console.log(printSum("-", 1, 2, 3, 6, 7));
