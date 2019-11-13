var { sum } = require('./sum')
// the curly braces around var {sum} are so that it will look inside the object in ./sum for a key called "sum" and name it as a variable. See minutes 29 for more info.

test('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 2)).toBe(3)
})