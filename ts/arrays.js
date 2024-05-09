"use strict";// Transpiled hence used this respective keyword at the top of the code
// //a) Using square brackets
const fruits = ["mango", "banana", "orange", "pineapple", "mastani"];
// const fruitss:string[] = fruits.filter((fruit) => fruit.toLowerCase().startsWith('m'))
// console.log(fruitss);
const fruitss = fruits.map((curVal) => curVal.charAt(0).toUpperCase() + curVal.slice(1));
console.log(fruitss);
// const newUpdatedFruits = fruits.push("Kiwi")
// console.log(newUpdatedFruits);
// console.log(fruits);
// const lastData = fruits.pop();
// console.log(lastData);
// console.log(fruits);
// for(let i =0; i < fruits.length; i++){
//      console.log(fruits[i]);
// }
// for(const fruit of fruits){
//     console.log(fruit);
// }
// fruits.forEach((curVal:string) => console.log(curVal))
// const numbers:number[] = [1,2,3,4,5,6];
// const doubleData:number[] = numbers.map((curVal:number) => curVal*2)
// console.log(doubleData);
// const numberToString:string[] = numbers.map((curEle:number) => curEle.toString() )
// console.log(numberToString);
// // limitation of map method comes under filter method
// const evenNumbers:number[] = numbers.filter((curElm) => curElm % 2 === 0);
// console.log(evenNumbers);
