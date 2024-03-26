"use strict";
// type Person = {
//     name:string;
//     age:number;
//     isStudent:boolean;
//     class?:string;//optional parameter
//     address:{
//         city:string;
//         state:string;
//     }
// }
const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
