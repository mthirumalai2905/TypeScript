"use strict";
// function add(a:number, b:number):number;
// function add(a:string, b:string): string;
// function add(a: any, b: any): any{
//     return a + b;
// }
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
add(5, "10");
add("Hello", 5);
