let Guest_List :string[] = ['Imran khan', 'Nawaz sharif', 'Asif Zaldari'];
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
// }
let absent_Guest :string = 'Asif Zaldari';
let new_Guest :string = 'Moulana Fazal ur Rehman ';
Guest_List[0] = new_Guest;
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
// }
console.log(`Mr. ${absent_Guest} is not coming to the party. `);


console.log('Good news! We find big table so we are inviting 3 more guest.');
Guest_List. unshift('Sir Kamran Khan Tessori ');
Guest_List.splice(2 , 0 , 'Sir Zia Khan');
Guest_List.push();

for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
}
 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n\tThank You!\t\n\n');
}
console.log('\nSorry we can not arrange big table, only two people will be invited');
while(Guest_List. length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, your are not invited to the party.`);
}

for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\n\tYou are still invited .\n\n\tThank You!\t\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);