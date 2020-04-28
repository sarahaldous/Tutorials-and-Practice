let arr = [2, 5, 100]

//1) Make an array of numbers that are doubles of the first array

const result = arr.map(function(num){ 
	return num * 2
})

console.log(result)

//2) Take an array of numbers and make them strings

const stringItUp = arr.map(function(num){
    return num.toString()
})

console.log(stringItUp)

// 3) Capitalize each of an array of names

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"].map(capitalize)

function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
    // return name[0]
};
console.log((names))

//4) Make an array of strings of the names

namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const nameArr = namesOnly.map(function(justName){
    return justName.name
})
console.log(nameArr)

//5) Make an array of strings of the names saying whether or not they can go to The Matrix

const matrix = namesOnly.map(function(eligible){
    if (eligible.age > 17){
        return `${eligible.name} can go to The Matrix`
    } else {
        return `${eligible.name} is underage`
    }
})
console.log(matrix)

//6) Make an array of the names in h1s, and the ages in h2s
//STILL NOT DONE:

const readyForDOM = namesOnly.map(function(h1h2){
    let h1 = document.createElement("H1")
    // let h2 = document.createElement("H2")
    let h1text = document.createTextNode(`${h1h2.name}`)
    // let h2text = document.createTextNode(`${h1h2.age}`)
    h1.appendChild(h1text)
    // document.body.appendChild(h1)
    return (
        document.body.appendChild(h1)  
        )
})
console.log(readyForDOM)