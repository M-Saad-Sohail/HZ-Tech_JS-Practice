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