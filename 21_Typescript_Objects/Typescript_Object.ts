// Write a program that creates objects containing these items.
// Data type of person object
interface person {
    age  : number,
    name : string,
    nationality : string,
    student : Boolean
}
// person object
let person :person = {
    age  : 22,
    name : 'Bilal ',
    nationality : 'Pakistan',
    student : true
}
//print person 
console.log(person);
//Data type of car objects
interface car {
    maker : string
    color : string,
    automatic : boolean
}
// car object
let car = {
    maker : 'Toyota',
    color : 'White',
    automatic : true 
}
//print car
console.log(car)