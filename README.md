# **_Objects , Destructuring Assignment_**

## _Literature_

---

- [Objects](https://javascript.info/object)

- [Object references and copying
  ](https://javascript.info/object-copy)
- [Garbage collection
  ](https://javascript.info/garbage-collection)

- [Object to primitive conversion
  ](https://javascript.info/object-toprimitive)

- [Object.keys, values, entries
  ](https://javascript.info/keys-values-entries)

- [Destructuring assignment
  ](https://javascript.info/destructuring-assignment)

## _Tasks_

---

### 1. Check the task, try to understand how it works

```js
let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
const { name, country, job } = person;
console.log(name);
```

### 2. Get name, country and jod using destructuring

[Task.2](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/commit/1f3cb5ba9c4b4e45598aec07d6f2e8fba44a38ec)

```js
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

### 3. Concatenate the two arrays

[Task.3](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t3_concatArrays.js)

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 4. How to take arguments in sum function?

[Task.4](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t4_reduceArguments.js)

```js
function sum() {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

### 5. How to pass arguments in sum function?

[Task.5](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t5_passArguments.js)

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

### 6. Swapping Values using the Destructuring Assignment

[Task.6](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t6_swapValues.js)

```js
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

### 9. Upvotes and Downvotes. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

[Task.9](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t9_subtrackValues.js)

```js
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

### 10. 50, 30, 20

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
object that shows how much a person needs to spend on needs, wants, and savings.
[Task.10](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t10_budgetPercent.js)

```js
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

### 11. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

[Task.11](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t11_populationofTheCities.js)

```js
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
```

### 12. Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +

[Task.12](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t12_getSum.js)

```js
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```

### 13. Write object.keys, object.values and object.entries methods using for..in

[Task.13 Part1](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t13_objectKeys.js)

[Task.13 Part2](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t13_objectValues.js)

[Task.13 Part3](https://github.com/ElenGhazaryann/Objects-Destructuring-Assignment/blob/main/t13_objectEntries.js)
