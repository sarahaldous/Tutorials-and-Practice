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

// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

function helloWorld(num) {
	if (num % 15 === 0) {
		return "Hello World"
	} else if (num % 5 === 0) {
		return "World"
	} else if (num % 3 === 0) {
		return "Hello"
	} else {
		return num
	}
}

//Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

// Examples
// addUpTo(3) ➞ 6
// // 1 + 2 + 3 = 6

// addUpTo(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55

// addUpTo(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28
function addUpTo(n) {
	return (n) * (n + 1) / 2
}

//A for loop solution:
function addUpTo(n) {
	let sum = 0
	for(let i=0; i<=n; i++){
		sum += i
	}
	return sum
}

//Use the variable name rest in order to assign it an object containing the rest of the object properties. 

const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`

//NOT FINISHED
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

Examples
addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
function addIndexes(arr) {
	var indices = []
	var i;
	var idx = arr.indexOf()
		for (i of arr) {
			indices.push(idx)
			idx = arr.indexOf(i, idx + 1)
		return (i + arr.indexOf() + 1)
	}
}
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000
// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// Assume the screen produces 60 frames every second.
const frames = (minutes, fps) => minutes * fps * 60

// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr) {
	return arr.map(x => x * 2)
}
// OR
const getMultipliedArr = arr => (arr.map(x => x * 2))

//Return the Remainder from Two Numbers
const remainder = (x, y) => x % y

//Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// const REGEXP = /\D/g

