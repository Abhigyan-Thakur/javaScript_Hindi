let val1 = 23;
if (true) {
    // console.log(`val1: ${val1}, val2: ${val2} ,val3:${val3}`);
    // const val2 = 34;
    var val3 = 123;
    let val1 = 399;
    // console.log(val1)
}

// console.log(`val3:${val3}`);
// console.log(val1);


// function inside a function
function name() {
    let name = "aman";
    function title() {
        let title = "thakur"
        console.log(name + title)
    }
    console.log(title())
}
// console.log(name());


// DIFFERENCE B/W DIRECTLY DEFINED FUNCTION AND THE FUNCTION DEFINED INSIDE A VAR
// Mini Hosting
console.log(addOne(5));//the directly defined function can be called before the function also , 
function addOne(num) {
    return num + 1;
}

const funcAdd = function addTwo(num) {//but in the functionsdefined in a var can't be called before the function 
    return num + 2;
}
console.log(funcAdd(5));
