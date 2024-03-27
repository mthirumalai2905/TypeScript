interface Person{
    firstName: string;
    lastName: string;
    age: number;
    greet: () => void; // method signature
}

//Implement the interface
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

person.greet(); //Output: Hello, my name is is John Doe