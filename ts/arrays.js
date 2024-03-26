"use strict";
//a) Using square brackets
const fruits = ["mango", "banana", "orange", "pineapple"];
const newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits);
console.log(fruits);
const lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (const fruit of fruits) {
    console.log(fruit);
}
fruits.forEach((curVal) => console.log(curVal));
