var {sum} = require('./sum')
console.log(sum)
// the curly braces around var {sum} are so that it will look inside the object in ./sum for a key called "sum" and name it as a variable. See minutes 29 for more info.

//describes what all the tests are for. First argument is name of function; second argument wraps all the tests that are included in that describe.
describe("The Sum Function", function(){

    test('adds 1 + 2 to equal 3', function() {
        expect(sum(1, 2)).toBe(3)
    })
    //for arrays, must use .toEqual, .toContain, etc, not .toBe
    
    test("negative numbers give correct output", function() {
        expect(sum(-1, -2)).toBe(-3)
        expect(sum(-5, -6)).toBe(-11)
        expect(sum(-100, -67)).toBe(-167)
        
    })
    
    test("if no arguments, sends error string", function(){
        expect(sum()).toBe("Please provide 2 numerical values")
    })

    instanceof("returns an error if non-numerical values are given", function(){
        expect(sum(true, "hello")).toBe("Please provide 2 numerical values")
        expect(sum([], {})).toBe("Please provide 2 numerical values")
    })
})


//Other things you might need to test for: tooo large of numbers; wrong type(boolean, string, array)

//"it" can be used in place of "test" at the beginning of a test. Example:
// it("if no arguments, sends error string", function(){
//     expect(sum()).toBe("Please provide 2 numbers")
// })