import { log, time } from "console";

let personName: string = "Fazalbuksh";

// lowercase
console.log(personName.toLowerCase());
 
//uppercase
console.log(personName.toUpperCase());

//titlecase

let firstWord : string = personName.charAt(0).toUpperCase();
let restOfWords : string = personName.slice(1).toLowerCase();
let titlecase : string = firstWord + restOfWords;
console.log(titlecase);
 

