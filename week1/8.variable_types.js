//Declaring and assigning values to variables
let age = 20;
let firstName = 'Alusine';
let something = null; 
let boy = true;

//Logging the values of the variables
console.log("The value of my  first variable is: " + age);
console.log("The value of my  second variable is: " + firstName);
console.log("The value of my  third variable is: " + something);
console.log("The value of my  fourth variable is: " + boy);

//Explaining the types of my variables
console.log("My first variable is a number");
console.log("My second variable is a string");
console.log("My third variable is an object");
console.log("My fourth variable is a boolean");

//Using the typeof to show the actual types of the variables
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof something);
console.log(typeof boy);


//Comparing the variable types
if (age === firstName || something === boy) {
    console.log("They are the same type");
}
else if (boy === age || firstName === something) {
    console.log("They are the same type");
}
else if (firstName === boy || age === something) {
    console.log("They are the same type")
}
else{
    console.log("They are not the same type");
}