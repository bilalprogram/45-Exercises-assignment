"use strict";
//Alien colors #3: turn your if else chain from exercise 5-4 into an if-else chain.
//write three version of this program, making sure each message is printed for the appropriate color alien.
let alienColors = "green";
//If the alien color is green, print a message that the player earned 5 points.  
//If the alien color is yellow, print a message that the player earned 10 points.
//If the alien color is red, print a message that the player earned 15 points.  
//Version 1 of the program.
if (alienColors === "green") {
    console.log("version 1: player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
;
//version 2 of the program.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Version 2: player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
;
//version 3 of the program.
alienColors = "red";
if (alienColors === "green") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Version 3: player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
;
