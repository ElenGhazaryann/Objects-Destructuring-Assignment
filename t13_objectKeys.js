"use strict";
function objectKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

console.log(
  objectKeys({
    firstName: "Joe",
    lastName: "Smith",
    age: 23,
  })
);
