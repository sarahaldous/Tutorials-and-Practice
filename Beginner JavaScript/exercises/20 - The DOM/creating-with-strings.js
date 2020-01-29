/*eslint-disable*/
console.log('it works!')

const item = document.querySelector('.item')

const width = 500
const src = `https://picsum.photos/${width}`
const desc = `Cute Pup`

const myHTML = `
<div class="wrapper">
    <h2> Cute Pup</h2>
    <img src = "${src}" alt="${desc}" />
    </div>
`

// item.innerHTML = myHTML
// `
//     <div>
//         <h1>Hey how are you?</h1>
//     </div>
// `;
// console.log(item.innerHTML)

// //Disadvantages of the above approach: 

// //this myHTML element is just a string:
// console.log(typeof myHTML)

// //Also, you can't modify stuff with methods - gives you undefined. Because it's not an element, just a string. It's very complicated to modify elements. To do that, you'd have to do something like this:

// const itemImage = document.querySelector('.wrapper img')

// itemImage.classList.add('round')

//Better way: turn a string into a dom element
const myFragment = document.createRange().createContextualFragment(myHTML)
//the elements still aren't on the page, but we can do stuff with them:

console.log(myFragment.querySelector('img'))

//Now we can append, etc normally. or insert adjacent (see last video), addEventListener = use createContextualFragment()
document.body.appendChild(myFragment)

console.log(myFragment)

//Security problems to be aware of: people can modify your consts to do stuff you didn't intend or plan:

// const desc = `Cute Pup <h1> LOVE THIS GUY</h1><style * {display:none}</style> <script>//code that drains bank account, destroys page, etc </script>`

// const desc = `Cute Pup <img onload="alert('HACKED')" SRC="https://picsum.photo/50" />`

//XSS: cross-site scripting - inserting script tags into consts to do stuff they didnt' intend.

//In the security video, it shows how to scrub this kind of stuff that you don't want.