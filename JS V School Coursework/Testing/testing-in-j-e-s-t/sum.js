function sum(a, b) {
    return a + b
}
module.exports = sum
// this can be equal to the function OR to an object that contains more functions. example: 
//module.exports = {sum: sum, otherFunction: otherFunction}