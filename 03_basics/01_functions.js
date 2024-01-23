function Add(num1, num2) {//here a function with no return 
    console.log(num1 + num2);
}

Add(2, 4);

function Add(a, b) {//function with return type
    let Sum = a + b;
    return Sum;
}
console.log(Add(2, 34));


function loginUserMessage(userName) {
    if (!userName) {
        return 'username not entered';
    }
    return `userName is: ${userName}`
}
// console.log(loginUserMessage());



function loginUserMessage(userName = "ashu") {//While calling arguments are not passed so as default name will be provided 
    return `Here userName is: ${userName}`
}
// console.log(loginUserMessage());




function calculateCartPrice(num1) {
    return num1
}
// console.log(calculateCartPrice(100));//here only one val is given




function calculateCartPrice(...num1) {//we will use rest operator for assigning all the values in the array
    return num1
}
// console.log(calculateCartPrice(100, 200, 3034, 2873));//as we have to give multiple values here 


function calculateCartPrice(val1, val2, ...num1) {//here in the values while calling the function the 1st two values are going to assigned in the value1 and value2 arguments and the rest will be assigned in the  num1 argument
    return num1
}
// console.log(calculateCartPrice(100, 200, 3000, 43493))

const user = {
    name: 'hitesh',
    price: 2500,
}
function callUserDetails(objectUser) {
    return `The username is: ${objectUser.name} and the price details for him is ${objectUser.price}`
}

console.log(callUserDetails(user));//we can pass the predefined object



function callUserPostDetails(objectUser) {
    return `The username is: ${objectUser.name} and the price details for him is ${objectUser.price}`
}

console.log(callUserPostDetails({
    name: "Hitesh Raj",
    price: 90909,
}));//we can pass newly defined object to the function