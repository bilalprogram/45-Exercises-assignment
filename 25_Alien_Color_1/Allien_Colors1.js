"use strict";
//Allien Colors#1 Imagine an allien was just shot down in a game. Create a variable called allien_color and assign it a value of 'green' , 'yellow', or 'red'.  
let alien_color = 'green';
//an if statement to test whether the allien's color is green. If it is, print a message that the player just earned 5 points.  
if (alien_color === 'green') {
    console.log("player just earned 5 points !");
}
//Write one version of this program that passesthe if test and another that fails.
alien_color = 'yellow';
//The version that fails will have no output.
if (alien_color === 'green') {
    console.log("player just earned 5 points !");
}
