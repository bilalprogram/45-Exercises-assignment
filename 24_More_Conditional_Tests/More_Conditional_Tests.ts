

//Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple"==="Apple");

//Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "mango");

//Tests using the lower case function
console.log ("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

//Numerical tests involving equality 
console.log("Equality test with numbers: ", 32 === 32);
//Numerical tests involving inequality
console.log("Inequality test with numbers: ", (32 as  number) != 40);

//greater than test 
console.log("Greater than test", 20 > 12);

//less than test
console.log("less than test: ", 3 < 5);
//greater than or equal to
console.log ("Greater than and equal to test: ", 7 >= 7);

//less than or equal to
console.log("less than or equal to test: ", 7 <= 15); 

//Test using "and" operator
console.log("And operator test: ", 2===2 && 5 > 4);

//Test using "or" operator
console.log("Or operator test: ", 2===2 || false);

//Test whether an item is in a array
const fruits :string[] = ['Orange','Mango','apple'];
console.log('Test "Orange" in the array: ', fruits.includes("Orange"));

//Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ' , !fruits. includes('Apple'));
