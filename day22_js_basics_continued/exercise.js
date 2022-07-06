
// 1
let age = 29;

if (age > 18 && age < 30) 
    console.log('You could be a star.');
else 
    console.log('You could not be a star.');

// 2
let num = 14;
if (num % 2 === 0)
    console.log('EVEN');
else
    console.log('ODD');

// 3
let num1 = 60;
if (num1 % 3 === 0 && num1 % 5 === 0)
    console.log('FizzBuzz');
else
    console.log('Not FizzBuzz');

// 4
let year = 2021;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    console.log("Leap year");
else
    console.log('Not a leap year');