const prompt = require('prompt-sync')()
// chapter 2PS
// Problem No 1
/*let age = prompt ("What is your age?");
if(age>10 && age<20) {
    console.log("Your age lies between 10 and 20")
}
else {
    console.log("Your age does'nt lies between 10 and 20")
}
*/

// Problem No 2
/* let age = prompt("What is your age?")
switch(age) {
    case '12':
    console.log("Your age is 12")
    break;
    case '13':
    console.log("Your age is 13")
    case '14':
    console.log("Your age is 14")
    case '15':
    console.log("Your age is 15")
    default:
    console.log("Your age is not special")
}
*/

// Problem No 3
/*let num = prompt("What is your age?")
num = Number.parseInt(num)
if(num%2==0 && num%3==0) {
    console.log("Your number is divisible by 2 and 3")
}
else {
console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem No 4
/*let num = prompt("What is your age ?")
num = Number.parseInt(num)
if(num%2==0) {
    console.log("Your number is divisible by 2")
}
else {
    console.log("Your number is not divisible by 2")
}

if(num%3==0) {
    console.log("Your number is divisible by 3")
}
else {
    console.log("Your number is not divisible by 3")
}
*/

// Problem No 5
let age = 12
let a = age>18?"?You can drive" :  "You cannot drive"
console.log(a)