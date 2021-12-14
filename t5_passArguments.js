"use strict";
const numbers = [1, 2, 3];
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(...numbers));

const numbers1 = [1, 2, 3];
function sum1([x, y, z]) {
  return x + y + z;
}
console.log(sum1(numbers1));
