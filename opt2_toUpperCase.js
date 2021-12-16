"use strict";

function my_f(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].toUpperCase();
  }
  return obj;
}
console.log(my_f(["p", "s"]));
