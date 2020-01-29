
/*eslint-disable*/
// Make a div

const myDiv = document.createElement("div")
// add a class of wrapper to it
myDiv.classList.add('wrapper')
// put it into the body
document.body.appendChild(myDiv)
console.log(myDiv)
// make an unordered list
const uList = document.createElement("ul")
// add three list items with the words "one, two three" in them
const li = document.createElement("li")
li.textContent = "two"
document.body.insertAdjacentElement("afterbegin", uList)
uList.appendChild(li)

const li1 = document.createElement('li')
li1.textContent = "one"
uList.insertAdjacentElement('afterbegin', li1)

const li3 = document.createElement('li')
li3.textContent = "three"
uList.insertAdjacentElement('beforeend', li3)

// put that list into the above wrapper
myDiv.appendChild(uList)
// create an image
const myImg = document.createElement('img')
// set the source to an image
myImg.src = "https://picsum.photos/200"
// set the width to 250
myImg.width = 250
// add a class of cute
myImg.classList = "cute"
// add an alt of Cute Puppy
myImg.alt = "Cute Puppy"
// Append that image to the wrapper
document.body.appendChild(myImg)

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="snitch">
        <p>tacos</p>
        <p>enchiladas</p>
    </div>
`
// const myNewDiv = document.createRange.createContextualFragment(myHTML)
// put this div before the unordered list from above
uList.insertAdjacentElement("beforebegin", myHTML)
document.body.appendChild()

// Make a div

// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above


// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
