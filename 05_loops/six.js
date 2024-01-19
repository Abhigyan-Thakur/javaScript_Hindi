const array = [1, 2, 3, 4, 5, 6];
// const arrayVal = array.filter((item) => item >= 4)//explicit return 
// console.log(arrayVal);

arrayVal = array.filter((item) => { return item >= 5 }) //normal return
console.log(arrayVal);