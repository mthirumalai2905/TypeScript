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





// const person:Person = {
//     name: "thiru",
//     age: 20,
//     isStudent:true,
//     address:{
//         city: "Mumbai",
//         state: "Maharhastra"
//     }
// }

// const person2:Person = {
//     name: "malai",
//     age: 21,
//     isStudent:true,
//     address:{
//         city: "Pune",
//         state: "Maharhastra"
//     }
// }

// console.log(person.address.city);

// person.address.city = 'dubai'
// console.log(person.address.city)
// console.log(person)


type Product = {
    name:string;
    price:number;
    quantity:number
}

const product:Product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
}

const calculateTotalPrice = (product:Product):any => {
    return product.price * product.quantity
}
console.log(calculateTotalPrice(product))