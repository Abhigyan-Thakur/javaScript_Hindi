// 1st declare a function inside an object and use this keyword to access the content of parent function inside the inner function
// implicit return 
// this keyword behaviour in both arrow function and normal function

const Obj = {
    name: "Aman",
    class: 10,
    message: function toSpeak() {
        console.log(`${this.name}`);
        console.log(this);
    }
}
// Obj.message();
// Obj.name = "AmanRaj";
// Obj.message();

function thisBehavior() {
    let name = "Aman";
    console.log(this.name);//here in normal function this keyword doesn't works
}

const thisBehaviors = () => {
    let name = "Hitesh";
    console.log(this.name);//in arrow function also this keyword doesn't works
}

// +++++++implicit-return+++++
const funcAdd = (num1, num2) => (num1 + num2)
console.log(funcAdd(212, 34));