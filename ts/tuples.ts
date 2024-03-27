// const favCity:string[] = ["india", 'nepal', 'pakistan', 'bhutan']


//order and datatype matters strictly
type PersonInfo = readonly[string, number, boolean]



const displayPersonInfo: (person: PersonInfo) => void = (person:PersonInfo): void => {
  const[name, age, hasDriverLicense] = person;
  console.log(`Name: ${name}, Age: ${age}`)
}


const person1:PersonInfo = ['thir', 29, true];
const person2:PersonInfo = ['umala', 92, false];
displayPersonInfo(person1);             