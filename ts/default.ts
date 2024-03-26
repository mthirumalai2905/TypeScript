const greet = (name:string, id?:number):string => {
    return ` Welcome ${name} with id ${id}`
}

const emp = greet("thiru");
console.log(emp);