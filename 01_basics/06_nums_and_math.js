const var1 = 342;
const numvar = new Number(2312);
console.log(var1);
console.log(numvar);

console.log(var1.toString().length)
const num2 = 3423.454
console.log(num2.toFixed(2))//this is used to display digits number after decimal  

const othernumber = 1233.532
console.log(othernumber.toPrecision(4))//here we get a approx value by replacing the value after decimal, Note:- here we need to put the exact number of digits inside the function 

const num3 = 1000000
console.log(num3.toLocaleString('en-IN'));//here to get Indian formate we have used 'en-IN'

// +++++++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)


// The Math.abs() static method returns the absolute value of a number.
a = 89;
b = 90
console.log(Math.abs(a - b));

// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(56.75));

// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(23, 12, 234))


// The Math.pow() static method returns the value of a base raised to a power.
console.log(Math.pow(2, 5));

// The Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(8.7));

// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
console.log(Math.trunc(12.343))

console.log(Math.random(7));//expected output is from 0 to 7 may be decimal also

console.log(Math.sqrt(64))


// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(4.98))

console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1);

const max = 10;
const min = 20;
console.log(Math.floor((Math.random() * (max - min)) + min));

