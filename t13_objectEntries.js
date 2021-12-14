"use strict";

function objectEntries(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push([`${key} : ${obj[key]}`]);
  }
  return arr;
}
console.log(
  objectEntries({
    firstName: "Joe",
    lastName: "Smith",
    age: 23,
  })
);
