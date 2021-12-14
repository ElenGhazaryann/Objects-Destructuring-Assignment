"use strict";
function concat(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3;
}
console.log(concat([1, 2, 3, 4], [5, 6, 7, 8, 9]));

function concat1(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i < arr1.length) {
      arr3.push(arr1[i]);
    } else {
      arr3.push(arr2[i - arr1.length]);
    }
  }
  return arr3;
}
console.log(concat1([1, 2, 3, 4], [5, 6, 7, 8, 9]));
