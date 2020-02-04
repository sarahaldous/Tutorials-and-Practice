// Create a function that returns true when num1 is equal to num2.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

function isSameNum(num1, num2) {
    return num1 === num2 ? true : false
}
const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// Fix the following using es6 destructuring
// Only edit what's inside of [ trans1, trans2, trans3, trans4 ]
let [ trans1, trans2, [trans3, [trans4 ]]] = arr

/* 
console.log(trans1) // should output "cars"
console.log(trans2) // should output "planes"
console.log(trans3) // should output "trains"
console.log(trans4) // should output "motorcycles"
*/

// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element 
const str = `[head, ...tail] = [1, 2, 3, 4]`

// console.log(head) // should output 1
// console.log(tail) // should output [2, 3, 4]