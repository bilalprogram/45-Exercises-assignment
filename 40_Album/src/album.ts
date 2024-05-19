//Album: Write afunction called make_album() that builds a object describing a music album.
//The function should take in an artist name and an album title, and it should return a object
//containing these two pieces of information . Use the function to make three dictionaries
//representing different album. print each return value to show that Objects are storing the 
//album information correctly.add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes
//a value for the number of tracks, add that value to the album's Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName: string, albumTitle: string, tracks?: number){
    return {artistName, albumTitle, tracks}
}

let album1 = make_album("Artist 1", "Title 1");
let album2 = make_album("Artist 2", "Title 2");
let album3 = make_album("Artist 3","Title 3", 5);

console.log(album1);
console.log(album2);
console.log(album3);