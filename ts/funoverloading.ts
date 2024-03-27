// function add(a:number, b:number):number;
// function add(a:string, b:string): string;

// function add(a: any, b: any): any{
//     return a + b;
// }

function add<T,U>(a:T,b:U): void{
    console.log(typeof a)
    console.log(typeof b)
}

add<number,string>(5,"10");
add<string,number>("Hello", 5);

