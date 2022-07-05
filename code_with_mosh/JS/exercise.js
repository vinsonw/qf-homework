// console.log('hello world');


// Exercise 1
// function max_of_two(a, b) {
//     return a > b? a: b;
// }

// console.log(max_of_two(10,4))

//Exercise 2
// function isLandscape(width, height) {
//     // return width > height ? true : false;
//     // better version:
//     return width > height;
// }

//Exercise 3
// FizzBuzz

// function fizzbuzz(n) {
//     if (typeof n !== 'number') 
//         {console.log("not a number"); return;}
//     if (n % 3 === 0) {
//         if (n % 5 === 0)
//             console.log('FizzBuzz!');
//         else 
//             console.log('Fizz');
//     }
//     else if (n % 5 === 0)
//         console.log('Buzz');
//     else 
//         console.log(n);
// }

// fizzbuzz(6);
// fizzbuzz(15);
// fizzbuzz(20);
// fizzbuzz('hello');
// fizzbuzz(7);

// Exercise 4 : Demerit Point

// function demerit_point(speed) {
//     // Unexpectedly, this also works for speed below 70
//     // let point = Math.floor((speed-70) / 5);
//     // a better way:
//     const point = Math.floor((speed-70) / 5);
//     if (point >= 12)  {
//         console.log('License Suspended');
//     }
//     else if (point < 1)
//         console.log('You are good');
//     else
//         console.log('Point ' + point);
// }

// demerit_point(70);
// demerit_point(74);
// demerit_point(75);
// demerit_point(120);
// demerit_point(160);
// demerit_point(30);


// Exercise 5 : Odd and even number

// function showNumbers(limit) {
//     for (let i=0; i<=limit; i++) {
//     //     if (i % 2 === 0)
//     //         console.log(i, "EVEN");
//     //     else
//     //         console.log(i, "ODD");

//    // A better version
//    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//    console.log(i, message);
//     }
// }

// showNumbers(10);


// Exercise 6 : Count truthy

// function countTruthy(array) {
//     let cnt = 0;
//     for (let i in array) {
//         if (array[i]) cnt++;
//     }
//     return cnt;
// }

// console.log(countTruthy([2, 0, '', false, 1, 3]));


// Exercise 7: String Properties
// const movie = {
//     title: 'How to get rich without work',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'Spikes'

// }

// function showProperties(obj) {
//     console.log('title', obj['title']); // 'title' as index has to be wrapped in quotes
//     console.log('director', obj['director']);
// }


// showProperties(movie);


// Exercise 8 : Sum of multiples of 3 and 5

// function sum(limit) {
//     let sum = 0;
//     for (let i=1; i<=limit; i++) {
//         if (i % 3 === 0) sum += i;
//         else if (i % 5 === 0) sum += i;
//     }

//     return sum;
// }

// console.log(sum(10));


// Exercise 9 grade
// function calculateGrade(marks) {
//     let sum = 0;
//     let cnt = 0
//     for (let i in marks) {
//         sum += marks[i];
//         cnt++;
//     }
//     let avg = sum / cnt;  

//     if (avg < 60) return 'F';
//     else if (avg < 70) return 'D';
//     else if (avg < 80) return 'C';
//     else if (avg < 90) return 'B';
//     else return 'A';
// }

// console.log(calculateGrade([80,80,50]));


//Exercise 10 Stars
// function showStarts(rows) {
//     for (let i=1; i<=rows; i++) {
//         let pattern = ''
//         for (let j=1; j<=i; j++)
//             pattern += '*'
//         console.log(pattern);
//     }
// }

// showStarts(10);

// Exercise showPrimes
// ...