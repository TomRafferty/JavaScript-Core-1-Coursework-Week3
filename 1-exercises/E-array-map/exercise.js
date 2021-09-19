// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//version 1 (my preference)
const numbersMultipliedBy100V1 = numbers.map(x => x * 100);

//version 2
const numbersMultipliedBy100V2 = numbers.map(function multiply(number){
    return number * 100
});

//version 3
function numbersMultipliedBy100V3Function(number){
    return number * 100;
}
const numbersMultipliedBy100V3 = numbers.map(numbersMultipliedBy100V3Function);

console.log(`Version 1 = ${numbersMultipliedBy100V1}
Version 2 = ${numbersMultipliedBy100V2}
Version 3 = ${numbersMultipliedBy100V3}`);