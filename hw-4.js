// 1. Initialization of numeric variables:
// - Create a variable integerNumber and assign it the value of any integer.
// - Create a floatingPointNumber variable and assign it the value of any floating point number.
// - Output both variables to the console.

let integerNumber = 23
console.log(integerNumber);
let floatingPointNumber = 23.5
console.log(floatingPointNumber);

// 2. Working with large numbers:
// - Declare and initialize the largeNumber constant to one million (using _ separators for better readability).
// - Output this value to the console.

const largeNumber = 1_000_000.00
console.log(largeNumber);

// 3. Exponential notation of numbers:
// - Create a scientificNotation variable and set it to 1.23e5.
// - Output the result to the console, in the comment explain what the exponential format record means.

let scientificNotation = 1.23e5 
console.log(scientificNotation);
// 1.23 * 10^5 (10 to the 5th power) - exponential format entry means, 
// that the value 1.23 must be multiplied by 10 five times. This is a large value within Number.

// 4. Using the Math object to generate random numbers:
// - Create a variable randomNumber and assign it a random number between 0 and 1 using Math.random().
// - Output this number to the console.

const randomNumber = Math.random()
console.log(randomNumber);

// 5. Features of numbers in JavaScript:
// - Create two variables: firstDecimal and secondDecimal and assign them values ​​0.11 and 0.12 respectively.
// - Create a third variable sum and assign it the sum of firstDecimal and secondDecimal.
// - Output the sum value to the console.

// option 1 - Rounding a number to the decimal places and convert to number data type.
let firstDecimal = 0.11
let secondDecimal = 0.12
const sum1 = +(firstDecimal + secondDecimal).toFixed(2);
console.log(sum1);
console.log(typeof sum1);

// // option 2
let thirdDecimal = 0.11
let fourthDecimal = 0.12
const sum2 = (thirdDecimal + fourthDecimal)*100/100;
console.log(sum2);
console.log(typeof sum2);

// option 3
let fifthDecimal = 0.11
let sixthDecimal = 0.12
function addNumbers(fifthDecimal, sixthDecimal) {
    return fifthDecimal + sixthDecimal;
  }
  const sum = addNumbers(fifthDecimal, sixthDecimal);
  console.log(sum); 
  console.log(typeof sum);

  




    
    
 

