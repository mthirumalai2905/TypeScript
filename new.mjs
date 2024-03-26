let a = 5;
let b = 6;

console.log(a,b);
console.log("-----------------------");

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a,b);
console.log("-------------------------");
