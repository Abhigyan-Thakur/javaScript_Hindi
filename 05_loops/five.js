const Ar = [12, 23, 34, 45, 56];
Ar.forEach(element => {//arrow function
    // console.log(element)
});
Ar.forEach(function (element) {//normal function
    // console.log(element);
});

Ar.forEach((element, index, arr) => {//here we will get all value ,index and the whole array
    console.log(element, index, arr);
});
