
/* eslint-disable no-console */
// Function Definition


function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
        // this is the function body
        console.log('Running Calculate Bill!!');
        // const total = Math.round(100 * 1.13);
        const total = billAmount + billAmount * taxRate + billAmount * tipRate;
        return total;
        // this is a temporary variable because it's only ever available inside the function.
}

// Function Call. Or **Run**
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// const myTotal = calculateBill();
// const myTotal3 = calculateBill(20 + 20 + 40, 0.15)
// console.log(`Your total is $${myTotal}`)
// console.log(`Your total is $${calculateBill()}`);


// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {

        return `Hello, ${firstName}`;
}
// firstName = "Wanda"
// const greeting = sayHiTo();
// console.log(greeting);

function doctorize(name) {
        return `Dr. ${name}`;
}
//the following line includes a default value so it won't return undefined if they don't input a value
function yell(name = "Silly Goose") {
        return `HEY ${name.toUpperCase()}`;
}
// yell(doctorize('sarah'));

//to make the second argument use the default, input "undefined"

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
