const nObject = {}
nObject.name = "Hitest Chaudhary";
nObject.age = 18;
nObject.email = "hitesh@googlegmail.com"
// console.log(nObject);
const obj1 = {
    name: 'nameOne',
    age: 23,
    ismale: false,
    fullname: {
        userFullName: {
            firtName: "Hitesh",
            lastName: 'Sharma',
        }
    }
}
// console.log(obj1);
// console.log(obj1.fullname);
// console.log(obj1.fullname.userFullName.lastName);

const obj10 = {
    1: 'a',
    2: 'b',
}
const obj20 = {
    3: 'c',
    4: 'd',
}
const obj30 = {
    4: 'e',
    5: 'f',
}
const obj40 = {
    6: 'g',
    7: 'h',
}


const obj100 = { obj10, obj20 }
// console.log(obj100);

const obj200 = { ...obj10, ...obj20, ...obj30 }
// console.log(obj200)

nObject.isLoggedIn = false;
// console.log(nObject)

//we can retreive the keys and values of tinderUser here from the objects using object.keys(Object_name)
// console.log(Object.keys(nObject));
// console.log(Object.values(nObject));
// console.log(Object.entries(nObject));
// console.log(nObject.hasOwnProperty('isLoggedIn'));


//OBJECT_DESTRUCTURE

const news = {
    name: "anaks",
    age: 12,
    invigilatorName: 'Hitesh Sharma'
}
// console.log(news.invigilatorName);
// console.log(news.invigilatorName);
// console.log(news.invigilatorName);//here if we want the same data again so for that destructring is the best way

const { invigilatorName: IN } = news;// Here is how we destructure the key from the object
// console.log(invigilatorName);
// console.log(IN);