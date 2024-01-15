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
console.log(loginUserMessage("hitesh"));