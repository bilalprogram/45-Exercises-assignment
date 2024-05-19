"use strict";
//Pizza: Think of at least three kinds of your favorite pizza. store these pizzas names in a array, and then use a for loop to print the name of each pizza .
//Modify your for loop to print a sentence using the name of pizza instead of printing just the name of pizza. for each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program.outside the for loop, that states how much you like pizza. the output should consist of three or more lines about the kinds of pizza you like and an aditional sentence, such as I really love pizza!
let Pizzas = ['Pepperoni', 'Fajita', 'BBQ Chicken',];
for (let Pizza of Pizzas) {
    console.log(`I like ${Pizza} pizza`);
}
console.log(`I really love pizza!`);
