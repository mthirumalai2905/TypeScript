## TypeScript Basic Documentation
**Overview**
This documentation provides a basic guide to TypeScript, a superset of JavaScript that adds optional static typing to the language.
TypeScript offers developers a powerful tool for writing more robust and scalable code.

**Table of Contents**
1.Installation
2.Getting Started
3.Basic Syntax
4.Type Annotations
5.Interfaces
6.Classes
7.Modules
8.Compiler Options
9.Resources

`1. Installation`
To use TypeScript, you need to have Node.js installed on your system. You can install TypeScript globally using npm (Node Package Manager) by running the following command:

```bash
npm install -g typescript
```

`2. Getting Started`
After installing TypeScript, you can create a new TypeScript file (with a .ts extension) and start writing code. You can compile TypeScript files to JavaScript using the TypeScript compiler (tsc). Run the following command to compile a TypeScript file:


```bash
tsc filename.ts
```
This command will generate a JavaScript file (filename.js) that you can run in your Node.js environment or include in your HTML file for client-side JavaScript.

3. Basic Syntax
TypeScript syntax is similar to JavaScript, with some additional features. Here's a basic example:

```typescript

function greet(name: string) {
    console.log("Hello, " + name);
}

greet("World");
```
In this example, name: string is a type annotation specifying that the name parameter must be a string.

4. Type Annotations
Type annotations in TypeScript allow you to specify the type of variables, function parameters, and return values. Here are some examples:

```typescript
let count: number = 5;
let message: string = "Hello";
let isDone: boolean = false;

function add(x: number, y: number): number {
    return x + y;
}
```

5. Interfaces
Interfaces in TypeScript define the structure of objects. They allow you to enforce a specific shape on objects. Here's an example:

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    console.log("Hello, " + person.firstName + " " + person.lastName);
}

let user = { firstName: "John", lastName: "Doe" };
greet(user);
```
6. Classes
TypeScript supports class-based object-oriented programming. You can define classes with properties and methods. Here's an example:

```typescript
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("World");
console.log(greeter.greet());
```

7. Modules
TypeScript supports modules, allowing you to organize code into reusable components. You can export and import modules using export and import statements. Here's an example:

```typescript
// greeter.ts
export function greet(name: string) {
    console.log("Hello, " + name);
}

// main.ts
import { greet } from "./greeter";
greet("World");
```

8. Compiler Options
The TypeScript compiler (tsc) provides various options for customizing the compilation process. You can specify these options in a tsconfig.json file. For example:


```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "dist"
    }
}
```
9. Resources
TypeScript Documentation
TypeScript Playground
Conclusion
This concludes the basic documentation for TypeScript. TypeScript offers a powerful way to write JavaScript code with optional static typing, helping you catch errors early and write more maintainable code. Explore the official documentation and experiment with TypeScript to unleash its full potential. Happy coding!
