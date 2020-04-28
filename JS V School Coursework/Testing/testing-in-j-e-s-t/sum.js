function sum(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "Please provide 2 numerical values"
    }

    if(!a || !b){
        return "Please provide 2 numbers"
    }
    return a + b
}
module.exports = {
    sum: sum
}
// this can be equal to the function OR to an object that contains more functions. example: 
//module.exports = {sum: sum, otherFunction: otherFunction}