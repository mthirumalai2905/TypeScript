const person:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        city:string;
        state:string;
    }
} = {
    name: "thiru",
    age: 20,
    isStudent:true,
    address:{
        city: "Mumbai",
        state: "Maharhastra"
    }
}

console.log(person.address.city);

person.address.city = 'dubai'
console.log(person.address.city)
console.log(person)