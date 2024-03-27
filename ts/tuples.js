"use strict";
// const favCity:string[] = ["india", 'nepal', 'pakistan', 'bhutan']
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}`);
};
const person1 = ['thir', 29, true];
const person2 = ['umala', 92, false];
displayPersonInfo(person1);
