// function squareMultiply(num1, num2) {
//     function squarer(num) {
//         return num * num;
//     }
//     return squarer(num1) * squarer(num2)
// }
// console.log(squareMultiply(5, 6));
// for (let i = 1; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizz Buzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
// const users = {
//     1:"saad",
//     2:"saad2",
//     3:"saad3",
//     4:"saad4",
//     5:"saad5",
// }
// for(let u in users){
//     console.log(users[u]); 
// }

// // FOR OF
// const originalArray = ["saad","saad","Sohail","Sohail","Billy","bob"]
// const uniqueArray = new Set(originalArray)
// for (const i of uniqueArray) {
//     console.log(i);
// }


// DESTRUCTURING

// const myArray = [1,2,3,4,5,6];
// consty [a,b,c,d,e,f] = myArray
// console.log(a);


// const myArray2 = [1,2,3,4,5,6];
// const [,,,,,f] = myArray
// console.log(f);

// SWAPPING USING DESTRucturing
// let a = 100
// let b = 200
// let c = 300
// console.log(a, b, c);
// [a, b, c] = [b, c, a]
// console.log(a, b, c);


// let filteredArray = (array, numbers) => {
//     let numArray = new Array()
//     numArray.push(array.filter((num) => num % numbers === 0))
//     return numArray
// }
// const [resultArray] = filteredArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 2); 
// console.log(resultArray);


// // REST PATTERN
// let restPattern = (arguments, ...restOfArguments) => {
//     return `${arguments} \n\n ${restOfArguments} `
// }
// console.log(restPattern("Saad Sohail", "HZTECH", 19, false, { 12: "saad", 13: "sohail" }));

// throw "JS ERROR"

// if(isNaN("saad")){
//     // console.log("not a number");
// }

// // OOPS
// function myInfo(){
//     // let name = "Saad Sohail"
//     this.name = "Saad Sohail"
//     this.age = 19
//     // console.log(name,age);
// }
// const newMyInfo = new myInfo()
// console.log(newMyInfo.name);
// // myInfo()
// // console.log(myInfo());

// class Car {
//     constructor(name, model, color) {
//         this.name = name
//         this.model = model
//         this.color = color
//     }
//     printsInfo() {
//         const str = `My name is: ${this.name}, Model is: ${this.model} and Color is: ${this.color}`
//         return str
//     }
// }
// const corolla = new Car("Corolla", 2019, "Black")
// console.log(corolla.printsInfo());


// // CALLBACKS
// let mainFunction = (callback) => {
//     setTimeout(function () {
//         console.log("This is the main function");
//         callback()
//     }, 1500)
// }
// let callbackFunction = () => {
//     console.log(`This is the callback fuction inside mainfunction`);
// }
// mainFunction(callbackFunction)