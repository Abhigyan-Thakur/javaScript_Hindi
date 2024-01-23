const myArr = [0, 1, 2, 3, 4];

// Push, Pop, shift, unshift, includes, indexof, join, slice, splice
myArr.push(23)//in push data is added in the last index
console.log(myArr);

myArr.pop()//pop is used to erage the data in the last index
console.log(myArr)

myArr.shift();//shift method removes the 1st element from the array
console.log(myArr)

myArr.unshift(231);//unshift adds the element at the 1st element 
console.log(myArr)

console.log(myArr.includes(2));

console.log(myArr.indexOf(2));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr)//here it will show the type as string

console.log(myArr.slice(1, 3))//in the 1st difference noted is that it does not include the inclosing range and the 2nd difference from splice is it does not mutate the original array
console.log(myArr);


console.log(myArr.splice(1, 3))  // while in splice the range is included and the 2nd point/diff is it mutates the original array and we can see it
console.log(myArr);

