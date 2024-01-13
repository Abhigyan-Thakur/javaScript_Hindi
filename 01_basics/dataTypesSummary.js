// PrimitiveDataType
// 7_Types:- String,Number,Boolean,null,undefined,Symbol,BigInt 
const data1 = 12;
const data2 = "ksdj";
const data3 = false;
const data4 = null;

console.log(data4);
const data7 = undefined
console.log(data7)
// Here in all u can see that we are not definig the dataTypes like we do in another lang
const data5 = Symbol('123')
const data6 = Symbol('123')
console.log(data5 === data6);

const bigNumber = 23232323343434343n
//for bigInt datatypes we use n in the last





// non-Primitive
// arrays, objects, Functions

// Array
const A = ["asjk", 23, false];

// objects
const obj = {
    name: 'array1',
    class: 23232,
    age: 32,
}

const func_var = function func() {
    console.log("Hello world")
}

console.log("type is ", typeof bigNumber);
console.log("type is ", typeof obj);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack{primitive data Type} ,heap(non-primitive data_Type)

let myYoutubeName = "amanajsdhjsbd"
let anothername = myYoutubeName;
anothername = "ksd";
console.log(anothername);
console.log(myYoutubeName);

let userOne = {
    email: "user@gmail",
    age: 23,
}

let userTwo = userOne;
userTwo.age = 90;
console.log(userOne)