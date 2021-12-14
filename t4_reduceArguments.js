"use strict";
function sum(a, b) {
  let args = Object.values(arguments);
  return args.reduce((sum, current) => {
    return sum + current;
  }, 0);
}
console.log(sum(1, 2, 3));
