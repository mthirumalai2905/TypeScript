"use strict";
const student1 = {
    name: "monkey",
    age: 100,
    greet: ((country) => `Hey am from ${country}`)
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `Welcome My name is ${name}, I am ${age} old`;
};
console.log(introduction(student1));
console.log(student1.greet('India'));
