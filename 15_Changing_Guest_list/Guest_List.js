"use strict";
let Guest_List = ['Imran khan', 'Nawaz sharif', 'Asif Zaldari'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
}
let absent_Guest = 'Asif Zaldari';
let new_Guest = 'Moulana Fazal ur Rehman ';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party. `);
