// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task is complete");
//         resolve();
//     }, 1000)

// })
// promiseOne.then(function () {
//     console.log("promice consumed");
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async Task is completed for promiseTWO");
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log("promice Consumed");
// })

// const PromiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Chai", email: "chai@example.com" })
//     }, 1000)
// })
// PromiseThree.then(function (user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "hitesh", password: "123" })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))


// here in promiseFive we will use async and await function instead of using .then


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: "javascript", password: "123" })
//         }
//         else {
//             reject("Error! js went wrong")
//         }
//     }, 1000)
// })

// async function consumeFivePromise() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumeFivePromise();

//here we are going to use aync,await and fetch 
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/abhigyanthakur')
//         const data=await response.json();//here we need to convert the string into JSON form
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch("https://api.github.com/users/abhigyanthakur")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

// promise.all
// yes this is also available, kuch reading aap b kro.x