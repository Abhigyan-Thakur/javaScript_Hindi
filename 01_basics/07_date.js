// Date
const my_Date = new Date();
console.log(my_Date.toString());
console.log(my_Date.toDateString());
console.log(my_Date.toLocaleString());
console.log(typeof my_Date);

const myCreatedDate = new Date(2023, 0, 23, 5, 23);
const myCreatedDateOne = new Date("11-24-2002");
console.log(myCreatedDateOne.toLocaleString());
console.log(myCreatedDate.toDateString());

const timeStamp = Date.now()
console.log(timeStamp);

console.log(myCreatedDateOne.getTime())


const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))




