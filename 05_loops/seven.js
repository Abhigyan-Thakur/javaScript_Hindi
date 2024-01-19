const arrayData = [1, 2, 3, 4, 6, 7, 8];
const arr = arrayData.map((data) => data);
// console.log(arr);
// console.log(arr.filter((d) => d >= 4));

const arrData2 = [12, 3, 4, 56, 77, 43, 22];
const a = arrData2
    .map((num) => num * 10)
    .map((numOne) => numOne + 1)
    .filter((numTwo) => { return numTwo >= 50 })//here i have entered the scope => {}, so here it is necessary to implement return
console.log(a)