type  Student = {
    name:string;
    age:number;
    gender?:string;
    greet: (country:string) => string // method call signature
}

const student1:Student = {
    name: "monkey",
    age: 100,
    greet: ((country): string => `Hey am from ${country}`)
}

const introduction: (student: Student) => string = (student1:Student) : string =>{
    const {name, age} = student1;
    return `Welcome My name is ${name}, I am ${age} old`
}
console.log(introduction(student1));
console.log(student1.greet('India'));