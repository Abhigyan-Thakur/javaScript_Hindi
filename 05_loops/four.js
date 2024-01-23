const Object = {
    'js': "javaScript",
    'C++': "cPlusplus",
    'php': 'sjdh'
}
for (const key in Object) {
    // console.log(`${Object[key]}:-${key}`);
}

const array = [1, 2, 3, 4, 5];
for (const key in array) {
    // console.log(array[key]);
}

const mapObj2 = new Map();
mapObj2.set('k1', 'v1');
mapObj2.set('k2', 'v2');
mapObj2.set('k3', 'v3');


for (const key in mapObj2) {//keys and values can't be retreived from map object using 
    console.log(key);
}


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javashjgcript",
        languageFileName: "ph"
    },

]
myCoding.forEach((item) => {
    console.log(item.languageName);

})

// create six.js and try to retreive data by using filter method(try using explicit return and normal return also)


// create seven.js use map method to retreive data from array 25:00 filtermap
// do chaining means map method chainig 

