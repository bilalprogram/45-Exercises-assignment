"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love Typescript. Make a large shirt and medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'Large', text = 'I love Typescript.') {
    console.log(`creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I love python');
