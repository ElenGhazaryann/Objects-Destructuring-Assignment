"use strict";

function cityFacts({ name: x, population: y, continent: z }) {
  return `${x} has a population if ${y} and is situated in ${z}`;
}
console.log(
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
  })
);
