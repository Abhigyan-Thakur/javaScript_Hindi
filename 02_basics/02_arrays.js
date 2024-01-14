// push one array in another, concat one array in othernumber,spred,flat(Infinity),Array.isArray,Array.from(),Array.of(Type_elements_here)
const Arr1 = ['asl', 'sdf', 'erwe']
const Arr2 = ['ere_one', '2nd_elem', '3rd_element']
Arr1.push(Arr2);//this is not ideal way as in this the array goes underneath the next array
// console.log(Arr1)

const Arr3 = ['asl', 'sdf', 'erwe']
const Arr23 = ['ere_one', '2nd_elem', '3rd_element']

console.log(Arr3.concat(Arr23))//in concatinate method elements are joined as an array so this makes it ideal

const newArr = [...Arr23, ...Arr3]//spread operator
console.log(newArr);

const arr10 = [2, 3, 5, 6, ['we', true, 34], 43];//if anoter array resides in an array then flat method just removes the inner array ;
console.log(arr10.flat(Infinity));

console.log(Array.isArray('kjksf'));//it checks wether the provided parameter is an array or not returns o/p in bollean

console.log(Array.from("Foor"));//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.


console.log(Array.of('Aman', 34, true, 'kdsf'));//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
