// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};


//Fat Arrow Functions
/* eslint-disable */
// const inchToCM = inches => inches * 2.54;
//this function, the longest way:
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }


// const add = (a, b = 3) => a + b;

// returning an object - even these can be arrow functions, but it's less readable for stuff like this. Arrow functions aren't always best.

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }
const makeABaby = (first, last) => ({ name: `${first}${last}`, age: 0  });

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// IIFE
// Immediately Invoked Function Expression

(function(age) {
  console.log('You are cool');
  return `You are cool and age ${age}`;

})(10);

(function() {
 console.log('you are so very cool')
  return 'You are so cool'
})();

// Methods!!!
const wes = {
  name: 'Westopher Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method - most common way
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function - mostly if you don't want to access "this"
  whisperHi: (Luke) => {
    console.log('hii wesss i\'m a mouse');
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');
console.log(button)

function handleClick() {
  console.log('Great Clicking!!');
}
// pass it an anonymous function - the browser will know to run this one upon click.
button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});
//pass a function by reference (in this case, handleClick):
// button.addEventListener('click', handleClick);


// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
