// Hello Admin: Make a array of Five or more usernames,including the name 'admin'. Imagine your writing code that will ptint a greeting to each user after they log in to a website.Loop through the array,and print a greeting to each user:
// . If username is 'admin',print a special greeting , such as Hello admin, would you like to see a status report?
// . otherwise, print a generic greeting, such as Hello Eric, thank you logging in again. 

const userNames:string[] = ['admin','sajid','hammad','bilal','owais'];
for(let i=0; i<userNames.length; i++){
    if(userNames[i] === 'admin'){
        console.log('Hello admin, would you like to see a status report?')
    }
    else{
        console.log(`Hello ${userNames[i]} Eric, thank you logging in again.`)
    }
} 