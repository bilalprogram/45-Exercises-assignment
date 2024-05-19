"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personName = "Fazalbuksh";
// lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titlecase
var firstWord = personName.charAt(0).toUpperCase();
var restOfWords = personName.slice(1).toLowerCase() + (' ');
var titlecase = firstWord + restOfWords;
console.log(titlecase);
