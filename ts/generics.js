"use strict";
//define a generic function to return the length of an array if any type
function arrayLength(arr) {
    return arr.length;
}
//Define an array of numbers
const numbers = [1, 2, 3, 4, 5];
//call the generic function with array of numbers
const lengthOfNumbers = arrayLength(numbers);
console.log("Length of numbers array: ", lengthOfNumbers); //Output: 5
//Define an array of strings
const strings = ["apple", "banana", "cherry"];
//call the generic function with the array of strings
const lengthOfStrings = arrayLength(strings);
console.log("Length of strings array: ", lengthOfStrings); //Output: 3
