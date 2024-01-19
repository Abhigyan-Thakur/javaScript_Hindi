const ifLoggedIn = true;


// check conditions like <,>,<=,>=,==,===,!=,!== and see the outcomes i.e. True or False
// like
if (2 == "2") {//here it should return false as the datatypes are different, so for accuate operations we need to use strictequal operators instead of using ==
    // console.log("the condition is true");
}
if (2 === "2") {//here it will not be true because strict operator will not allow this to be equal as they are different data types
    // console.log("the condition is false")
}

// define an if else condotional loop
// define an if else condition where we can see the difference btw let and var datatypes
// define implicite scope(not ideal for good practice)
// define an if elseif else condition
// define an if else using && multiple condition using logical operators
// also define the || or logical operators

// IF ELSE Statement
const isLogedIn = true;
if (isLogedIn) {
    // console.log("He is going to work for others ");
}
else {
    // console.log("Else he is going to work for any one less");
}

// if else condition where we can see the difference btw let and var datatypes
if (true) {
    const letVar = 'letvariable';// it's scope is within the is statement
    var one = 'varvariable';
}
else {
}
// console.log(letVar);
console.log(one);


const balance = 1000;
if (balance < 1000) {
    console.log("balance equals to 500")
}
else if (balance < 750) {
    console.log("balance equals to 750")
}
else if (balance < 800) {
    console.log("balance equals to 800")
}
else {
    console.log("balance greater then 1000")
}

const a = 34;
const n = "indian"
if (a >= 18 && n == "indian") {
    console.log("Eligible to vote");
}
else {
    console.log("Not Eligible to vote");
}

const aman = 20;
const ankit = 12;
if (aman >= 18 || ankit >= 18) {
    console.log('the team consisting aman and ankit is eligible ');
}
else {
    console.log('the team containing aman and ankit is not eligible');
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create switch.js
// create a switch case to check the key is of which value when all cases are wrong then we use default


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// create a new file called truthy.js
// here create a variable with a value or vacant
// now using if else condition if value exists then true else false condition will be executed
// here values are classified that they are truthy even if they are empty or falsy values


// Truthy values
// [],"0",'false'," ",{},function(){}

// Falsy values
// 0,-0,BigInt on,"",null,undefined,NaN

// now create an empty object, 1st convert that into an array and then calculate the length in the if else condition (Here Object.keys(object_name)is used to convert the object in the form of array)


// Nullish coalesing  Operator  (??):null defined basically it is used to prevent any variable from having a null or undefined variable  44:16

const num = 0;
// const baz = null ?? num;
// console.log(baz);

const num1 = 90;
const bazz = num1 ?? num;
console.log(bazz);
// Ternary Operator
const num22 = 23;
const v = num22 > 20 ? 'greater' : 'smaller';
console.log(v);