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

function handleBuyButtonClick(event) {
  const button = event.target;
  console.log("you clicked a button!")
  console.log(button.textContent)
  console.log('You are buying it!')
  console.log(parseFloat(event.target.dataset.price))
  console.log(event.target)
  console.log(button)
  // console.log(currentTarget)
  // console.log(event.target === event.currentTarget)
  // event.stopPropagation()
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
})

window.addEventListener('click', function(event) {
  console.log('YOU CLICKED THE WINDOW!!!')
  console.log(event.target)
  console.log(event.type)
  console.log(event.bubbles)
  // event.stopPropagation()
},
{capture: true}
)

const photoEl = document.querySelector('.photo')

photoEl.addEventListener('mousemove', function(e) {
  console.count(e.currentTarget)
  console.log(this)
})