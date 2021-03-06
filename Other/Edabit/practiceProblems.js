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
	const result = array.map(x => x == 1 ? true : false)
	return result
}
//so much better:
const integerBoolean = n => [...n].map(a => a == 1);

//Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(dt) {
	const spookyDay = new Date(dt)
	const month = spookyDay.getMonth()
	const date = spookyDay.getDate()
	if (month === 9 && date === 31) {
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
	const last = name.charAt(name.length - 1)
	return first.concat('', last)
}
//or
const firstLast = name => name[0] + name[name.length - 1];
//or
function firstLast(name) {
	return name.slice(0, 1) + name.slice(name.length - 1)
}
//or
function firstLast(name) {
	const first = name.charAt(0);
	const last = name.charAt(name.length - 1);
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
	return ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'][n - 1];
}
//or
function nSidedShape(n) {
	const shapes = ["filler", "circle", "semi-circle", "triangle", "square", "pentagon",
		"hexagon", "heptagon", "octagon", "nonagon", "decagon"]
	return shapes[n];
}

//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
const comp = (str1, str2) => str1.length === str2.length

// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
function moodToday(mood = "neutral") {
	return `Today, I am feeling ${mood}`
}
//or
const moodToday = (mood = "neutral") => `Today, I am feeling ${mood}`

//check out this site for further study!!!
//https://www.javascripttutorial.net/javascript-recursive-function/

// Write a function that returns the length of a string. Make your function recursive.
//first solution, not recursive:
function length(str) {
	return str.length
}
//recursive but long:
function length(str) {
	if (str == '') {
		return 0
	} else {
		return length(str.substring(1)) + 1;
	}
}
//shorter and still recursive
const length = str => str == '' ? 0 : length(str.substring(1)) + 1;

//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
const comp = (str1, str2) => str1.length === str2.length

//const arr = ["eyes", "nose", "lips", "ears"]
var [/* Create variable lips here and assign it to arr[2] */] = arr
const arr = ["eyes", "nose", "lips", "ears"]
var [eyes, nose, lips, ears] = arr
//or
var [, , lips] = arr
//or
var [, , lips,] = arr

//Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
function posCom(num) {
	return Math.pow(2, num)
}
//or
const posCom = num => Math.pow(2, num)
//or, without Math.pow:
const posCom = num => 2 ** num

//Write a function that returns the string "something" joined with a space and the given parameter a.
function giveMeSomething(a) {
	let something = "something "
	return something.concat(a)
}
//or
function giveMeSomething(a) {
	return `something ${a}`
}
//or
const giveMeSomething = a => `something ${a}`
//or
function giveMeSomething(a) {
	return "something " + a
}

//A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
function carsNeeded(n) {
	return Math.ceil(n / 5)
}
//or
const carsNeeded = n => Math.ceil(n / 5)

//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
function acceptIntoMovie(age, isSupervised) {
	if (age >= 15) {
		return true
	} else if (isSupervised == true) {
		return true
	} else {
		return false
	}
}
//or
const acceptIntoMovie = (age, isSupervised) => (age >= 15 || isSupervised == true) ? true : false
//or
const acceptIntoMovie = (age, isSupervised) => age >= 15 || isSupervised

//Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube.
const howManyStickers = n => n * n * 6

//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
const areaShape = (base, height, shape) => shape == "triangle" ? (base * height / 2) : (base * height)

// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
function longBurp(num) {
	let r = "r"
	return `Bu${r.repeat(num)}p`
}
//or
const longBurp = num => `Bu${"r".repeat(num)}p`

//Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
const hasSameBread = (arr1, arr2) => arr1[0] === arr2[0] && arr1[2] === arr2[2]

//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
const shouldServeDrinks = (age, onBreak) => age >= 18 && !onBreak

//You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
// Create a function that returns whether the first array is slightly superior to that of the second.
function isFirstSuperior(arr1, arr2) {
	if (arr1[0] > arr2[0]) {
		return true
	} else if (arr1[1] > arr2[1]) {
		return true
	} else if (arr1[2] > arr2[2]) {
		return true
	} else if (arr1[3] > arr2[3]) {
		return true
	} else {
		return false
	}
}
//or
function isFirstSuperior(arr1, arr2) {
	return arr1.join('') > arr2.join('');
}
//or
const isFirstSuperior = (arr1, arr2) => arr1.some((el, i) => el > arr2[i]);
//or
function isFirstSuperior(arr1, arr2) {
	return arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b) ? true : false;
}
//or
const isFirstSuperior = (arr1, arr2) =>
	arr1.filter((x, i) => x > arr2[i]).length > 0
//or
function isFirstSuperior(arr1, arr2) {
	n = arr1.length
	for (i = 0; i < n; i++) {
		if (arr1[i] > arr2[i]) {
			return true
		}
	}
	return false
}
//or, the simplest:
const isFirstSuperior = (arr1, arr2) => arr1 > arr2;

//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
function filterArray(arr) {
	return arr.filter(Number.isInteger)
}
//or
const filterArray = arr => arr.filter(Number.isInteger)
//or
let filterArray = a => a.filter(x => x % 1 == 0);
//or
const filterArray = arr => arr.filter(nums => typeof (nums) === 'number' && Number.isInteger(nums));

//Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube.
const howManyStickers = n => n * n * 6 //or (n **2 * 6)

//Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
function halfQuarterEighth(n) {
	let arr = []
	arr.push(n / 2, n / 4, n / 8)
	return arr
}
//or
const halfQuarterEighth = n => [n / 2, n / 4, n / 8];
//not shorter, but different logic:
const halfQuarterEighth = n => {
	let newArray = [];
	for (let i = 0; i <= 2; i++) {
		n = n / 2;
		newArray.push(n);
	}
	return newArray;
};

//Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
function stutter(word) {
	let start = word.substr(0, 2)
	return `${start}... ${start}... ${word}?`
}
//or
function stutter(word) {
	return word.substr(0, 2) + "... " + word.substr(0, 2) + "... " + word + "?"
}
//or
const stutter = word => `${`${word.slice(0, 2)}... `.repeat(2)}${word}?`;
//or
function stutter(word) {
	return `${word.slice(0, 2)}... ${word.slice(0, 2)}... ${word}?`
}

// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
const countSyllables = str => str.length / 2
//or
const countSyllables = str => str.match(/[aeiou]/gi).length

//Create a function which returns the selected filename from a path. Include the extension in your answer.
function getFilename(path) {
	let arr = path.split("/")
	return arr[arr.length - 1]
}
//or
const getFilename = p => p.split('/').slice(-1)[0]
//or
const getFilename = p => p.split('/').pop()

//Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.
function pHName(pH) {
	if (pH < 0 || pH > 14) {
		return "invalid"
	} else if (pH > 0 && pH < 7) {
		return "acidic"
	} else if (pH === 7) {
		return "neutral"
	} else {
		return "alkaline"
	}
}
//way better:
const pHName = pH => pH < 0 || pH > 14 ? 'invalid' :
	pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';
//written out on more lines:
const pHName = pH => pH < 0 || pH > 14 ? "invalid"
	: pH > 0 && pH < 7 ? "acidic"
		: pH === 7 ? "neutral"
			: "alkaline"

//Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer. Formula is KE = 1/2mv²
function kineticEnergy(m, v) {
	let vel = Math.pow(v, 2)
	return Math.round(vel * m / 2)
}
//or
const kineticEnergy = (m, v) => Math.round((Math.pow(v, 2) * m / 2))
//or
function kineticEnergy(m, v) {
	return +(m * (v ** 2) / 2).toFixed(0);
}

//Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.
const operation = (num1, num2) =>
	num1 - num2 === 24 ? "subtracted" : num1 + num2 === 24 ? "added" : num1 * num2 === 24 ? "multiplied" : num1 / num2 === 24 ? "divided" : null

//Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
//Examples: isInRange(4, { min: 4, max: 5 }) ➞ true
// isInRange(4, { min: 6, max: 10 }) ➞ false
const isInRange = (num, range) => num >= range.min && num <= range.max

//Create a function that takes an array and returns the sum of all numbers in the array.
const getSumOfItems = arr => arr.reduce((a, c) => a + c, 0)
//also works without the 0
const getSumOfItems = arr => arr.reduce((a, c) => a + c)
//or as a for loop
function getSumOfItems(arr) {
	let sum = 0;
	arr.forEach(x => {
		sum += x;
	});
	return sum;
}
//or with map
const getSumOfItems = (arr) => {
	let count = 0
	arr.map(item => count += item)
	return count
}

// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
const relationToLuke = name =>
	(name === "Darth Vader") ? "Luke, I am your father."
		: name === "Leia" ? "Luke, I am your sister."
			: name === "Han" ? "Luke, I am your brother in law."
				: "Luke, I am your droid."
//with if statements and template literals
function relationToLuke(name) {
	let relation = "";

	if (name == 'Darth Vader') {
		relation = "father";
	} else if (name == 'Leia') {
		relation = "sister";
	} else if (name == 'Han') {
		relation = "brother in law";
	} else if (name == 'R2D2') {
		relation = "droid";
	} else {
		throw new Error(`Unknown name [${name}]`);
	}

	return `Luke I am your ${relation}.`;
}

//Create a function that takes a number as an argument and returns the amount of digits it has.
function findDigitAmount(num) {
	const string = num.toString()
	return string.length
}
//or
const findDigitAmount = num => (num.toString()).length

//After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)
function countClaps(str) {
	return str.match(/C/g).length
}
//or
function countClaps(str) {
	return str.split('C').length - 1
}

//Create a function that takes a positive integer and returns the nth "star number".
const starNumber = (n) => (n * (n - 1) * 6) + 1

//Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
function addIndexes(arr) {
	let arr2 = []
	for (let i = 0; i < arr.length; i++) {
		arr2.push(arr[i] + i)
	}
	return arr2
}
//or
const addIndexes = arr => arr.map((number, index) => number + index)

//Create a function that takes 3 numbers as arguments and return the largest of the 3 numbers
// Try to keep your function as compact as possible and try to use an arrow function
const findLargest = (n1, n2, n3) => Math.max(n1, n2, n3)
//or, even shorter:
const findLargest = Math.max;

//Create a function where given the number n, return the sum of all square numbers up to and including n.
const squaresSum = (n) => {
	let sum = 0
	for (let i = 0; i <= n; i++) {
		sum += i * i
	} return sum
}
//or
const squaresSum = n => n++ * n * (2 * n - 1) / 6
//or
const squaresSum = n => n * (n + 1) * (2 * n + 1) / 6;

//There are three methods (exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.

// Notes
// Do not use the same method twice.
// Do not use String methods that accept regular expresssions as arguments.
function twoMethods() {
	// find and equals are not regular expression methods.  Replace them. 
	let methodOne = /hello/.exec("hello")[0] === "hello"
	let methodTwo = /hello/.test("hello") // returns a boolean
	return methodOne && methodTwo
}

The challenge is to try and fix this buggy code, given the inputs true and false.See the examples below for the expected output.
function has_bugs(buggy_code) {
		if (buggy_code) {
			return 'sad days'
		} else {
			return 'it\'s a good day'
		}
	}

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
const getVoteCount = votes => votes.upvotes - votes.downvotes

//Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
function arrBetween(num1, num2, arr) {
	function between(num) {
		return num > num1 && num < num2
	}
	return arr.filter(between)
}
//much shorter version:
const arrBetween = (a, b, c) => c.filter(x => x > a && x < b);

//Create a function which makes the last character of a string repeat n number of times.
function modifyLast(str, n) {
	return str + (str.charAt(str.length - 1)).repeat(n - 1)
}
//or
const modifyLast = (str, n) => str + (str.charAt(str.length - 1)).repeat(n - 1)
//or
const modifyLast = (s, n) => `${s.slice(0, -1)}${s.slice(-1).repeat(n)}`

//Create a function that takes a number as an argument and returns the square root of that number cubed.
const cubeSquareRoot = num => Math.pow((Math.sqrt(num)), 3)

//Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
function monthName(num) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	return months[num - 1]
}
//or, using new Date()
function monthName(num) {
	return new Date(2015, num - 1).toLocaleString("en-gb", { month: 'long' })
}
//or, with template literals:
const monthName = month =>
	new Date(`1970 ${month}`).toLocaleString('en', { month: 'long' });

//Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.

// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.
function limitNumber(num, rangeLow, rangeHigh) {
	if (num > rangeLow && num < rangeHigh) {
		return num
	} else if (num < rangeLow) {
		return rangeLow
	} else {
		return rangeHigh
	}
}
//or
function limitNumber(num, rangeLow, rangeHigh) {
	return [...arguments].sort((a, b) => a - b)[1]
}
//or
let limitNumber = (num, low, high) =>
	num < low ? low : num > high ? high : num;
//or
const limitNumber = (num, rangeLow, rangeHigh) => Math.min(Math.max(num, rangeLow), rangeHigh);

//In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
function kmtomiles(kilometers) {
	return parseFloat((kilometers * 0.621371).toFixed(5))
}
//or
const kmtomiles = kilometers => parseFloat((kilometers * 0.621371).toFixed(5))

//Create a function that takes a string and returns the word count. The string will be a sentence.
function countWords(str) {
	let array = str.split(' ')
	return array.length
}
//or
const countWords = str => str.split(' ').length

//Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
const numberSyllables = word => word.split('-').length

//Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.
function makeCopy(obj) {
	let newObj = { ...obj }
	return newObj
}
//or
const makeCopy = obj => ({ ...obj });
//or
function makeCopy(obj) {
	return JSON.parse(JSON.stringify(obj))
}
//or
const makeCopy = obj => Object.assign({}, obj);

//Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
function findBob(names) {
	const isBob = name => name == "Bob"
	return names.findIndex(isBob)
}
//or
const findBob = names => names.indexOf('Bob');

//Create a function that takes an angle in radians and converts it into degrees.
const toDegree = radian => Math.round((180 / Math.PI) * radian)

//Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.
function endCorona(recovers, newCases, activeCases) {
	return Math.ceil(activeCases / (recovers - newCases))
}
//or
const endCorona = (recovers, newCases, activeCases) => Math.ceil(activeCases / (recovers - newCases))

//Create a function that takes an array of numbers and return the first and last elements as a new array.
function firstLast(arr) {
	return [arr[0], arr[arr.length - 1]]
}
//or
const firstLast = (arr) => [arr[0], arr[arr.length - 1]]
//or
const firstLast = arr => [arr.shift(), arr.pop()]

//Given an array of numbers, negate all elements contained within.
const negate = (arr) => arr.map(x => x * -1)
//or, with a for loop:
function negate(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = -arr[i];
	}
	return arr;
}
//or
const negate = (arr) => arr.map(x => -x);

//Create a function that flips M's to W's (all uppercase).
const wumbo = words => words.replace(/M/g, 'W')
//or
function wumbo(words) {
	return words
		.split("")
		.map(x => (x === "M" ? "W" : x))
		.join("");
}

//The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.

// Create a function that recreates this functionality.
const absolute = n => n > 0 ? n : -n
//or
const absolute = n => (n ** 2) ** 0.5
//or, with Math.sign, which produces a 1 or -1, depending on the number (or string's) sign:
const absolute = n => n * Math.sign(n);
//one more:
const absolute = n => Math.max(n, -n);

//Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
function emotify(str) {
	const array = str.split(" ")
	if (array[2] == "smile") {
		return 'Make me :D'
	} else if (array[2] == 'grin') {
		return 'Make me :)'
	} else if (array[2] == 'sad') {
		return 'Make me :('
	} else {
		return 'Make me :P'
	}
}
//or
function emotify(str) {
	str = str.replace(/smile/g, ':D');
	str = str.replace(/grin/g, ':)');
	str = str.replace(/sad/g, ':(');
	str = str.replace(/mad/g, ':P');

	return str;
}
//or
const emotify = s => 'Make me ' + ({ smile: ':D', grin: ':)', sad: ':(', mad: ':P' })[s.split(' ').pop()];
//or
function emotify(str) {
	return str.replace(/smile|grin|sad|mad/g, x => ({ smile: ':D', grin: ':)', sad: ':(', mad: ':P' }[x]))
}

//Write a function that returns the strings:
// "both" if both given booleans a and b are true.
// "first" if only a is true.
// "second" if only b is true .
// "neither" if both a and b are false.
const areTrue = (a, b) => (a == true) && (b == true) ? "both"
	: (a == true) ? "first"
		: (b == true) ? "second"
			: "neither";

//Given a string, return true if its length is even or false if the length is odd.
const oddOrEven = s => s.length % 2 === 0 ? true : false

//Given two arguments, return an array which contains these two arguments.
function makePair(num1, num2) {
	const array = []
	array.push(num1, num2)
	return array
}
//or
function makePair(num1, num2) {
	return [...arguments]
}
//or
const makePair = (a, b) => [a, b];
//or
const makePair = (...a) => a;

//Create a function that takes voltage and current and returns the calculated power.
const circuitPower = (voltage, current) => voltage * current

//Create a class that takes the following four arguements for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
class Player {
	constructor(name, age, height, weight) {
		this.age = age;
		this.name = name;
		this.height = height;
		this.weight = weight;
	}

	getAge() {
		return `${this.name} is age ${this.age}`
	}

	getHeight() {
		return `${this.name} is ${this.height}cm`
	}

	getWeight() {
		return `${this.name} weighs ${this.weight}kg`
	}
	//or, write the functions in arrow form, as follows:
	// getAge = () => `${this.name} is age ${this.age}`;
	// getHeight = () => `${this.name} is ${this.height}cm`;
	// getWeight = () => `${this.name} weighs ${this.weight}kg`;
}

//Create a function that inverts the rgb values of a given tuple.
const colorInvert = rgb => rgb.map(x => 255 - x)

//Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
const inchesToFeet = inches => Math.floor(inches / 12)

//Write this function, which returns a boolean, as simply as possible:
const parity = n => ((n % 2) === 0) ? "even" : "odd"
//or
const parity = n => ['even', 'odd'][n % 2];

//Create a function that counts how many D's are in a sentence.
const countDs = sentence => sentence.match(/d/gi).length

//Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
const imposterFormula = (i, p) => Math.round((i / p) * 100) + "%"
//or
const imposterFormula = (i, p) => `${Math.round(100 * (i / p))}%`;

// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
function intToString(num) {
	return `${num}`
}


function stringToInt(num) {
	return (num * 7) / 7
}
//or
const intToString = num => `${num}`


const stringToInt = num => (num * 7) / 7
//or
const intToString = n => '' + n;
const stringToInt = n => +n;
//or
const [intToString, stringToInt] = [String, Number];
//or
let intToString = n => String(n);
let stringToInt = n => +n;

//Write five adder functions:
// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.
const add2 = x => x + 2;
const add3 = x => x + 3;
const add5 = x => x + 5;
const add7 = x => x + 7;
const add11 = x => x + 11;
//or
[2, 3, 5, 7, 11].forEach(n => this[`add${n}`] = x => x + n);

//Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.
function createID(firstname, lastname) {
	const first = firstname.split('')
	const last = lastname.split('')
	return first[0].toLowerCase()
		+ last[0].toUpperCase() + last[1].toLowerCase() + last[2].toLowerCase()
}
//or
const createID = (f, l) =>
	f[0].toLowerCase() + l[0].toUpperCase() + l.slice(1, 3).toLowerCase();

//Use the most streamlined version of a function that returns a boolean based on whether the number is even
const isEven = n => n % 2 == 0
//or
const isEven = n => !(n % 2); //if you do it without the bang, it returns a number, not a boolean

//Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.
const circle_or_square = (rad, area) => 6.28 * rad > Math.sqrt(area) * 4

//Use template literals in a template string to create the following phrase with these variables:
const format = (a, b, c) => `Their names were: ${a}, ${b} and ${c}.`

//You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.
const NOT = (n) => n == 1 ? 0 : 1
const AND = (a, b) => a == b ? a : 0
const OR = (a, b) => a == 1 || b == 1 ? 1 : 0
//or
const NOT = n => n ^= 1;
const AND = (a, b) => a & b;
const OR = (a, b) => a | b;
//or
const NOT = n => !n % 2; //or n => +!n
const AND = (a, b) => a && b;
const OR = (a, b) => a || b;

// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
// Create a function that takes a string and returns a string.
const toScottishScreaming = str => str.replace(/a|i|o|u/gi, "e").toUpperCase()

// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are cola and fanta.
const skipTooMuchSugarDrinks = drinks => drinks.filter(drink => drink !== "cola" && drink !== "fanta")

//Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
const addOddToN = n => Math.pow(((n + 1) / 2), 2)

//Beans make Joker Persona 5 fart a lot. You can determine how hard he farts by how many beans he has eaten. The strength of the fart is equal to twice the square of the bean count plus 5 times the bean count, plus 3.
const fart = beans => Math.pow(beans, 2) * 2 + beans * 5 + 3

//Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
function incrementItems(arr) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + 1)
	}
	return newArr
}
//or
function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i]++
	}
	return arr
}
//or
function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i] = arr[i] + 1
	return arr
}

// /Create a function that returns a number, based on the string provided. All numbers are single digits.
function word(s) {
	switch (s) {
		case "one":
			return 1
			break;
		case "two":
			return 2
			break;
		case "three":
			return 3
			break;
		case "four":
			return 4
			break;
		case "five":
			return 5
			break;
		case "six":
			return 6
			break;
		case "seven":
			return 7
			break;
		case "eight":
			return 8
			break;
		case "nine":
			return 9
			break;
		case "zero":
			return 0
			break;
	}
}
//or
word = s => ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].indexOf(s)
//or
const word = n => ({ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 })[n];

//Simple OOP Calculator
class Calculator {
	add(a, b) {
		return a + b
	}
	subtract(a, b) {
		return a - b
	}
	divide(a, b) {
		return a / b
	}
	multiply(a, b) {
		return a * b
	}
}
//or
class Calculator {
	add = (a, b) => a + b;
	subtract = (a, b) => a - b;
	multiply = (a, b) => a * b;
	divide = (a, b) => a / b;
}

//Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
function addOddToN(n) {
	return Math.pow(((n + 1) / 2), 2)
}
//or
const addOddToN = n => Math.pow((n + 1) / 2, 2)

Create a function which returns the length of a string, WITHOUT using String.length property.
const length = s => [...s].reduce(a => a + 1, 0);
//or
function length(s) {
	return s.lastIndexOf('');
}

//Create a function that will put the first argument, a character, between every word in the second argument, a string.
//Examples
function add(char, str) {
	const regex = / /gi
	return str.replace(regex, char)
}
//or, slightly more streamlined:
function add(char, txt) {
	return txt.replace(/ /g, char)
}
//or
function add(char, txt) {
	return txt.split(' ').join(char)
}

//Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in fahrenheit and celsius.
function isBoiling(temp) {
	if (temp.endsWith("F") && parseInt(temp) >= 212){
		return true
	} else if (temp.endsWith("C") && parseInt(temp)>= 100){
		return true
	} else {
		return false
	}
}
//or
const isBoiling = temp => (temp.endsWith("F") && parseInt(temp) >= 212) 
	|| (temp.endsWith("C") && parseInt(temp)>= 100) ? true : false
//or 
const isBoiling = temp => ( temp >= "100C" || temp >= "212F") ? true : false

//Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
	let arr = str.split('')
	return arr.sort().join('') 
}
//or, much more elegant:
const AlphabetSoup = str => str.split('').sort().join('')

