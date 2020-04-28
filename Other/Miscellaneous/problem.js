function returnEven(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
         newArr.push(arr[i])
        } 
    } return newArr
}
console.log(returnEven([1,2,3,4,5,6,7,8,9,10])) // returns [2,4,6,8,10]