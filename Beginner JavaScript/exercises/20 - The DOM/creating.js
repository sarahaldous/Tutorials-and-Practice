/*eslint-disable */
console.log("buttons")

const myParagraph = document.createElement('p')

// can only create the element above. to add or change any attributes, you must do:
myParagraph.textContent = "I am a P"
myParagraph.classList.add('special')
console.log(myParagraph)

const myImage = document.createElement('img')
myImage.src = "https://picsum.photos/500"
myImage.alt = "nice photo"

const myDiv = document.createElement('div')
myDiv.classList.add('wrapper')
console.log(myDiv)


myDiv.appendChild(myParagraph)
myDiv.appendChild(myImage)
//by putting this at the end, the DOM only has to reload once, not three times, which it would if these myDiv.appendChild things were after document.body...
document.body.appendChild(myDiv)
//adding a heading
const heading = document.createElement('h2')
heading.textContent = 'Cool Things!'
//if you use appendChild below, it will add it after the paragarph. insertAdjacentElemetn allows you to tell it where it goes.
myDiv.insertAdjacentElement('beforebegin', heading)

const myList = document.createElement('ul')
const li = document.createElement('li')
li.textContent = "three"

myList.appendChild(li)
document.body.insertAdjacentElement('afterbegin', myList)

const li5 = document.createElement('li')
li5.textContent = "five"
myList.append(li5)

const li1 = li5.cloneNode(true)
li1.textContent = "one"
myList.insertAdjacentElement('afterbegin', li1)

const li2 = li5.cloneNode(true)
li2.textContent = 'two'
li.insertAdjacentElement('beforebegin', li2)

const li4 = document.createElement('li')
li4.textContent = 'four'
li5.insertAdjacentElement('beforebegin', li4)