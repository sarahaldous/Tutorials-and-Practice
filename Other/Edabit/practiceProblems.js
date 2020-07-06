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
let [trans1, trans2, [trans3, [trans4]]] = arr

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
	for (let i = 0; i <= n; i++) {
		sum += i
	}
	return sum
}

//Use the variable name rest in order to assign it an object containing the rest of the object properties. 

const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }
const str = `({ name, email, ...rest} = user ).toString()`

//NOT FINISHED
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

Examples
addIndexes([0, 0, 0, 0, 0]) ➞[0, 1, 2, 3, 4]

addIndexes([1, 2, 3, 4, 5]) ➞[1, 3, 5, 7, 9]

addIndexes([5, 4, 3, 2, 1]) ➞[5, 5, 5, 5, 5]
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

	if (str === str.toUpperCase()) {
		return "upper"
	} else if (str === str.toLowerCase()) {
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

//Write a function to reverse an array.
function reverse(arr) {
	return arr.reverse()
}
//or
const reverse = arr => arr.reverse()

//Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
function totalCups(n) {
	return Math.floor(n + (n / 6))
}
//or
const totalCups = n => Math.floor(n + (n / 6))

//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
// function footballPoints(wins, draws, losses) {
// 	return ((wins * 3) + (draws * 1))
// }
//or
const footballPoints = (wins, draws, losses) => ((wins * 3) + (draws * 1))

// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.
//function isOdd(num) {
// 	if (num % 2 === 0) {
// 		return false
// 	} else {
// 		return true
// 	}
// }
//or
// const isOdd = num => (num % 2 === 0) ? false : true 
//even better:
const isOdd = num => num % 2 !== 0

//Make a function using the && operator.
const and = (a, b) => a === true && b === true
//even shorter
//const and = (a, b) => a && b

//The eval() function will take whatever arithmetic is set up between the parentheses and calculate it. It either evaluates the expression, or executes the statement(s), whatever's between the parentheses.
//function eq(evaluate) {
// 	return eval(evaluate)
// }
const eq = (evaluate) => eval(evaluate)
//even shorter:
eq = eval


//Create a function that takes a word and returns the new word without including the first character.
function newWord(txt) {
	return txt.substring(1)
}
//or
const newWord = txt => txt.substring(1)
//or
function newWord(txt) {
	return txt.slice(1, txt.length)
}
//or
const newWord = txt => txt.slice(1, txt.length)
//or figure out how to do it with charAt() and a for loop
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

//Create a function that takes a string and returns it as an integer.
function stringInt(str) {
	return parseInt(str)
}
//or
const stringInt = str => parseInt(str)

//Booleans can also be written as integers, where 1 = True and 0 = False. Make a function that returns the opposite of the boolean given.
function flipBool(b) {
	if (b === 0 || b === false) {
		return 1
	} else {
		return 0
	}
}
//or
const flipBool = b => b === 1 || b === true ? 0 : 1

//Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.
function validStrNumber(n) {
	if (isNaN(n)) {
		return false
	} else {
		return true
	}
}
//or
const validStrNumber = (n) => isNaN(n) ? false : true
//even shorter
const validStrNumber = n => !isNaN(n)

//Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
	return arr.join('')
}
//or
const arrayToString = (arr) => arr.join('')

//Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
const yeah_nope = (bool) => bool ? "yeah" : "nope"

//Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
function checkSquareAndCube(arr) {
	let a = Math.sqrt(arr[0])
	let b = Math.cbrt(arr[1])
	if (a === b) {
		return true
	} else {
		return false
	}
}
//doesn't work:
(Math.sqrt(arr[0]) === Math.cbrt(arr[1])) ? true : false
//or
const checkSquareAndCube = arr => Math.sqrt(arr[0]) ** 3 === arr[1];
//or
const checkSquareAndCube = ([a, b]) => Math.sqrt(a) === Math.cbrt(b);

//Create a function that takes an equation (e.g. "1+1"), and returns the answer.
function equation(s) {
	return eval(s)
}
//or
const equation = s => eval(s)
//Although apparently using eval() is a huge security risk. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!

//Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
function integerBoolean(n) {
	let array = n.split("")
const result =  array.map(x => x == 1 ? true : false)
	 return result
}
//so much better:
const integerBoolean = n => [...n].map(a => a == 1);

//Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(dt) {
	const spookyDay = new Date(dt)
	const month = spookyDay.getMonth()
	const date = spookyDay.getDate()
	if (month === 9 && date === 31){
		return "Bonfire toffee"
	} else {
		return "toffee"
	}
}
//or
const halloween = d => d.getMonth() === 9 && d.getDate() === 31
? 'Bonfire toffee' : 'toffee';

//Create a function that takes a string and returns the concatenated first and last character.
function firstLast(name) {
	const first = name.charAt(0)
	const last = name.charAt(name.length -1)
	return first.concat('', last) 
}
//or
const firstLast = name => name[0] + name[name.length - 1];
//or
function firstLast(name){
	return name.slice(0,1) + name.slice( name.length -1)
}
//or
function firstLast(name) {
const first = name.charAt(0);
const last = name.charAt(name.length-1);
	return `${first}${last}`
}

//Create a function that takes two numbers as arguments and return their sum.
const addition = (a, b) => a + b

//Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
function nSidedShape(n) {
	switch (n) {
		case n = 1:
		return "circle"
			break;
				case 2:
		return "semi-circle"
			break;
				case 3:
		return "triangle"
			break;
				case 4:
		return "square"
			break;
				case 5:
		return "pentagon"
			break;
				case 6:
		return "hexagon"
			break;
				case 7:
		return "heptagon"
			break;
			case 8:
		return "octagon"
			break;
			case 9:
		return "nonagon"
			break;
		case 10:
		return "decagon"
			break;
	}	
}
//or
function nSidedShape(n) {
	return ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'][n-1];
}
//or
function nSidedShape(n) {
	const shapes = ["filler", "circle", "semi-circle", "triangle", "square", "pentagon",
								 "hexagon", "heptagon", "octagon", "nonagon", "decagon"]
	return shapes[n];
}