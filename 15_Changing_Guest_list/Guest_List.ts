let Guest_List :string[] = ['Imran khan', 'Nawaz sharif', 'Asif Zaldari'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
}
let absent_Guest :string = 'Asif Zaldari';
let new_Guest :string = 'Moulana Fazal ur Rehman ';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party. `);
