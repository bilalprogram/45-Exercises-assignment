// Sandwiches:write a function that accepts a array of items a person wants on a sandwiches . the function should have one parameter that collects as many items 
//as the function call provides, and it should print a summary of the sandwichesthat is being ordered.Call the function three times, using a different number of arguments each time.

function makeSandwich (item: string[]){
    console.log('\nMaking your sandwich with:');

    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich !\n");

    
}

makeSandwich(['Lettuce', 'Ham','Cheese']);
makeSandwich([ 'Meat ball','Americian Cheese']);
makeSandwich(['Turkey', 'Bacon']);