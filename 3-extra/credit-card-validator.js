//credit card validator
/*
Number must be 16 digits, 
all of them must be numbers.

You must have at least two 
different digits represented 
(all of the digits cannot be the same).

The final digit must be even.

The sum of all the digits must be 
greater than 16.
*/
function cardValidator(cardNumber){
    
    //get number as array:
    //this behaves weird if all digits === 9
    const numberArray = Array.from(cardNumber.toString()).map(Number);

    //check amount of numbers is correct:
    const isLongEnough = (numberArray.length === 16);

    //check has different digits:
    const allEqual = numberArray.every(x => x == numberArray[0]);

    //check last digit is even:
    const isLastEven = (numberArray[numberArray.length - 1] %2 === 0);

    //check the sum:
    //my first time using reduce :)
    const sumOfAll = numberArray.reduce((a,b) => a + b, 0);

    return isLongEnough && allEqual !== true && isLastEven && sumOfAll >= 16 ? true: false;
};

console.log(cardValidator(9999777788880000));
console.log(cardValidator("99997777888h000"));

//"Use node from the command line to test if your code works as expected."
//I don't know how to how to run the tests, when I get node to run tests on this
//directory it says test suite failed. I assume due to the absence of any tests here.