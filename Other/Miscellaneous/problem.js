function returnEven(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
         newArr.push(arr[i])
        } 
    } return newArr
}
console.log(returnEven([1,2,3,4,5,6,7,8,9,10])) // returns [2,4,6,8,10]

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)]) 
let mySet = new Set(numbers)
console.log(mySet)
mySet.add(29)
mySet.add(345)
mySet.delete(4)
mySet.has(5)
// console.log(mySet.has(4))
// console.log(mySet.has(Math.sqrt(25)))
// console.log(mySet.size)
console.log(mySet)
console.log([...mySet])