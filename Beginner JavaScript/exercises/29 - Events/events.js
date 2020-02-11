/*eslint-disable*/

const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
  console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

console.log(buyButtons)

function handleBuyButtonClick(event) {
  console.log('You clicked a button!');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}
// The buyButton argument refers to each individual item as it's looped over.
buyButtons.forEach(function(buyButton) {
  console.log('binding the buy button')
  buyButton.addEventListener('click', handleBuyButtonClick);
});

//To do this with an arrow function:
// buyButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('YOU CLICKED IT')
//   })
// })

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(this);
});
