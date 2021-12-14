"use strict";

function objectValues(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

console.log(
  objectValues({
    firstName: "Joe",
    lastName: "Smith",
    age: 23,
  })
);
