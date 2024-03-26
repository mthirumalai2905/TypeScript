//Greeting function
// function greet(name:string, id:number){
// console.log(`welcome ${name} and your ${id}`)
// }
// greet("thiru", 1);


//Arrow functions
// const greet = (name:string, id:number):string=> {
//     return `Welcome, ${name} and your id is ${id}`;
// }
// console.log(greet("thiru", 1));

// const isPalindrome = (palin:string):boolean => {
//     let myPalin = palin.split("").reverse().join("");
//     return myPalin === palin;
// }

// console.log(isPalindrome("123621"));


const arr = [1,2,3,4,5];
const sum:number = arr.reduce((total,num) => total += num,0);
console.log(sum);