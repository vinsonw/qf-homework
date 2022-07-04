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

function demerit_point(speed) {
    // Unexpectedly, this also works for speed below 70
    // let point = Math.floor((speed-70) / 5);
    // a better way:
    const point = Math.floor((speed-70) / 5);
    if (point >= 12)  {
        console.log('License Suspended');
    }
    else if (point < 1)
        console.log('You are good');
    else
        console.log('Point ' + point);
}

demerit_point(70);
demerit_point(74);
demerit_point(75);
demerit_point(120);
demerit_point(160);
demerit_point(30);