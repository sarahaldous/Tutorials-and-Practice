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

// Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).
const str = `({ one = 1, two } = { two : 2 }).toString()`

//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
const animals = (chickens, cows, pigs) => chickens * 2 + (cows + pigs) * 4

//Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

const isTriangle = (a, b, c) => (a + b > c && b + c > a && c + a > b) ? true : false

// In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested in order to have an matching equality. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
const checkEquality = (a, b) => a === b

//Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
function greaterThanOne(frac) {
	const fraction = eval(frac)
	if (fraction > 1) {
		return true
	} else if (fraction === 1) {
		return false
	} else {
		return false
	}
}
// Much shorter solution:
const greaterThanOne = frac => eval(frac) > 1;


// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
const profitableGamble = (prob, prize, pay) => prob * prize > pay

//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
const divisible = (num) => num % 100 === 0 ? true : false

//Create a function that takes an array of words and transforms it into an array of each word's length.
function wordLengths(arr) {
	const newArr = arr.map(x => x.length)
	return newArr
}
//or
const wordLengths = arr => arr.map(x => x.length)

//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
const comp = (str1, str2) => str1.length === str2.length  

//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
const divisibleByFive = n => n % 5 === 0

//Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
function getCase(str) {
	
	if (str === str.toUpperCase()){
		return "upper"
	} else if (str === str.toLowerCase()){
		return "lower"
	} else {
		return "mixed"
	}
}
//OR
const getCase = str => 
	str.toUpperCase() === str ? "upper" : 
	str.toLowerCase() === str ? "lower" : "mixed"

//Write a function that returns the length of a string. Make your function recursive.
const length = (str) => str.length


// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
	var result = str.split('').join(' ')
	return result
}
const spaceMeOut = str => str.split('').join(' ')


//Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
	return (lastName + ", " + firstName)
}
function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`
}
const concatName = (firstName, lastName) => `${lastName}, ${firstName}`

//Create a function that returns the number of argument it was called with.
function numArgs(...args) {
	return args.length
}
const numArgs = (...args) => args.length
//this also works:
function numArgs() {
	return arguments.length;
}


// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
const profitableGamble = (prob, prize, pay) => prob * prize > pay ? true : false