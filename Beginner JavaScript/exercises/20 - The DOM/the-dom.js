// /*eslint-disable*/
// const p = document.querySelector('.items')
// const imgs = document.querySelectorAll('.item img')
// const item2 = document.querySelector('.item2')
// //You can use querySelector on an item, not just on the whole document:
// const item2Image = item2.querySelector('img')
// const heading = document.querySelector('h2')
// console.dir(heading.textContent)
// // Set the textContent property on that element
// // heading.textContent = 'Wes is cool'
// //this console log will give a different result than the one above:
// console.dir(heading.textContent)
// console.dir(heading.innerText)
// //The above two are basically the same, but innerText is only human-readable things and textContent has more properties. Inner text won't return hidden elements that you've hidden with CSS - it's aware of CSS styling.

// //shows the HTML, including text and in-text tags (like spans)
// console.log(heading.innerHTML)
// //Includes the above, plus the outer element tags (<h2>)
// console.log(heading.outerHTML)

// const pizzaList = document.querySelector('.pizza')
// console.log(pizzaList.textContent)
// //to update the pizza list, but a slow way, because the browser will re-render the entire list:
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`
// //faster way:
// pizzaList.insertAdjacentText('afterbegin', '🍕')
/*eslint-disable*/


// //The following is only necessary if you have the script tag in the head of your HTML. If you put it at the end of the body tag, you don't need this:
// // function init() {
// //     const p = document.querySelector('p');
// //     console.log(p)
// // }
// // document.addEventListener('DOMContentLoaded', init);


//Classes!!!!!

// const pic = document.querySelector('.nice')
// pic.classList.add('open')
// pic.classList.remove('cool')
// pic.classList.toggle('round')
// console.log(pic.classList)

// function toggleRound() {
//     pic.classList.toggle('round')
// }

// pic.addEventListener('click', toggleRound)

const pic = document.querySelector('.nice')
pic.classList.add('open')
pic.classList.remove('cool')

pic.alt = 'Cute Pup'
pic.alt = "So much cuter than a puppy"
console.log(pic.alt)

//this will wait for all images, CSS, etc. on page to be downloaded before running this:
window.addEventListener('load', function() {
    console.log(pic.naturalWidth)
})
//this will do the same, but just for that picture, not the whole page
pic.addEventListener('load', function() {
    console.log(pic.naturalWidth)
})
pic.setAttribute('alt', 'REALLY CUTE PUP')
console.log(pic.getAttribute('alt'))

//setAttribute will work for attributes that don't automatically come with JavaScript, like 'wes-is-cool'. Use 'data-something' instead of just 'something'.

// to acces those data- attributes that you created, console.log(custom.dataset):

const custom = document.querySelector('.custom')
// console.log(custom.dataset)


custom.addEventListener('click', function() {
    alert(`Welcome, ${custom.dataset.name} ${custom.dataset.last}`)
})
console.log(custom.dataset)