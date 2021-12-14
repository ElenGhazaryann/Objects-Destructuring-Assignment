"use strict";
function fiftyThirtyTwenty(budget) {
  let obj = {};
  let percent = [budget * 0.5, budget * 0.3, budget * 0.2];
  [obj.Needs, obj.Wants, obj.Savings] =
    `${percent[0]} ${percent[1]} ${percent[2]}`.split(" ");
  return obj;
}

console.log(fiftyThirtyTwenty(10000));
