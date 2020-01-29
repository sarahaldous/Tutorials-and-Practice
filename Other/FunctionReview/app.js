// function doctorize(firstName) {
//     return `Dr. ${forstName}`;
// }
// //Anon function
// function (firstName) {
//     return `Dr. ${forstName}`;
// }
//Function Expression - putting a function in a variable
const doctorize = function(firstName) {
    return `Dr. ${firstName}`;
}

//Arrow Functions
//They are anonymous functions. You always have to stick them in a variable.
const inchToCM = inches => inches * 2.54;

const add = (a, b = 3) => a + b;
    
//Returning an Object

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }
//Fat Arrow Returning Object
const makeABaby = (first, last) =>  ({
        name: `${first} ${last}`,
        age: 0
    });

//IIFE: Immediately-invoked function expression

(function(age) {
    return "You are cool and age`${age}"
})(10)

//Methods!!!!! A function that lives inside of an object.
const wes = {
    name: "Weston Bos",
    
    sayHi: function() {
        console.log(this);
        console.log(`Hey, ${this.name}`);
        return "Hey Wes"
    },
    //Shorthand Method:
    yellHi() {
        console.log("HEY WESSSS")
    },
    //Arrow Function (takes parent scope of "this" - can't console log as above)
    whisperHi: () => {
        console.log("hi, Wes, I'm a mouse")
    }
}
