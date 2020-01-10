/*eslint-disable*/

const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

/* Victor Mono */
// New Font!
people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`); 
//   console.log(person.country);
//   console.log(person.cool)
//   console.log('DONE!')
//   console.groupEnd(`${person.name}`)

console.log(person.name)
});
// console.table(people)
// console.table(people);

// Console Methods

// Callstack, Stack Trace
//functions that call subsequent functions in a row. When this happens and there's a problem, the call stack will show each spot where there was a problem. 

// Grabbing Elements
//Putting $0 in Console tab will bring up what you've selected in the elements tab with your inspect arrow. $1 is the second-to-last element you selected. On pages without jQuery, $ and $$ allow you to select things with query selectors. $ selects one paragraph or whatever; $$ selects all the paragraphs

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey I\'m one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  // console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch - Network Requests
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
