// 1.Singleton Objects
// eg:-const object_name=new Object();

// 2.Literal Objects

// .operator,squareNotation
//create an object having key of string type and try to retrieve
//try to get symbol type key in the object and retreive it
// try to change the data using key and retrive it to check
// try to use freeze method

const symbolKey = Symbol('keyOne');

const jsUser = {//The keys are by default taken as a String 
    name: 'Abhigyan',
    "fullname": "Abhigyan Thakur",
    age: 24,
    [symbolKey]: 'keyonevalue',
    email: 'abhigyanthakur2710@gmail.com',
    isLogedIn: false,
    "password": 12345678,//key is of String dataType
}

console.log(jsUser.password)
console.log(jsUser.name);
console.log(jsUser['age']);
console.log(jsUser.fullname)
console.log(jsUser["fullname"])
console.log(jsUser[symbolKey])
console.log(typeof symbolKey)
console.log(typeof jsUser[symbolKey])
jsUser.age = 25;
console.log(jsUser.age);
// Object.freeze(jsUser);//Here freeze method is activated so further we are unable to mutate the key values present in the jsUser object
jsUser.email = "abbhigyanthakur2710@gmail.com"
console.log(jsUser.email)

jsUser.greet = function () {
    console.log("Hello js User");
}
console.log(jsUser.greet())

jsUser.Greeting = function () {
    console.log(`This is Greeting of ${jsUser.fullname}`);
}

console.log(jsUser.Greeting())


