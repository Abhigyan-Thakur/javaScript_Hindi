// iffi: iffi is used to meet two purposes 1>iffi is used to remove the pollution(variables) of global scope 
// 2>iffi is used for fast function execution
(function chai() {
    console.log("DB Connected");
})();//here semicolon is mandatory as it works as the end of the 1st iffi function

function secondChai() {
    console.log("Second chai");
}