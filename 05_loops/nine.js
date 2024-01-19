const nums = [1, 2, 3];

//here reduce method is introduced where we need accumulators and current values 
const value = nums.reduce(function (acc, currVal) {//this is a normal function means a non-Arrow function
    console.log(`accu :${acc} and currval:${currVal}`);//here we can use this reduce method to calculate the grandTotal amount in cart website
    return acc + currVal;
}, 0)//here this assigned 0 means acc=0 that will be added to the elements of the array further
// console.log(value);


// here we will perform the same reduce method using arrow function 
const tValue = nums.reduce(((acc, currVal) => acc + currVal), 0);
// console.log(tValue);

// here i have to create a array containing items and price in my cart and using the reduce method i need to sumUp the total price
const CartItem = [
    {
        itemName: "Rascon",
        price: 123,
    },
    {
        itemName: "Rascon1",
        price: 92,
    },
    {
        itemName: "Rascon2",
        price: 142,
    },
    {
        itemName: "Rascon3",
        price: 643,
    },
]
const gtTotal = CartItem.reduce((acc, item) => acc + item.price, 0);
console.log(gtTotal);
