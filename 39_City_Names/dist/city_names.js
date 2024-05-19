"use strict";
//City Names: write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: 
// "Lahore,Pakistan"
// Call your function with at least three city-country pairs, and print the value that's returned.
function city_Country(city, country) {
    return `${city},${country}`;
}
console.log(city_Country('Multan', 'Pakistan'));
console.log(city_Country('Mumbai', 'India'));
console.log(city_Country('Kandy', 'Srilanka'));
