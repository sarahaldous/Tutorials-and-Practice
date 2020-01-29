/*eslint-disable*/
const wes = document.querySelector('.wes')

console.log(wes)
console.log(wes.children)
console.log(wes.firstElementChild)
console.log(wes.lastElementChild)
console.log(wes.previousElementSibling)
console.log(wes.nextElementSibling)
console.log(wes.parentElement)

// these properties are available for elements. Really, the bset thing is to use querySelector or .closest

//Nodes:
// el.childNode
// el.firstChild
// el.lastChild
// el.previousSibling
// el.nextSibling
// el.parentNode

//All elements and nodes can use this method to remove things: .remove()
//in the browser console:
// $0.remove()

//If you do this, is it forever removed:

const p = document.createElement('p')
p.textContent = 'I will be removed'
document.body.appendChild(p)

p.remove()
//you do still have acccess to it, because it will console.log. You can always add it back in:
console.log(p)
document.body.appendChild(p)