// If the list is empty, print the message that we need to find some users! 
//Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = ['admin','ali','salman','dilsher','fazal','murid','abdullah',];
if(userNames.length === 0){
    console.log('we need to find some users!');
}
else{
    userNames = [];
    console.log('All usernames have been removed. ' + userNames.length);
}
