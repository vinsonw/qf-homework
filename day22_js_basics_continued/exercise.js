
// // 1
// let age = 29;

// if (age > 18 && age < 30) 
//     console.log('You could be a star.');
// else 
//     console.log('You could not be a star.');

// // 2
// let num = 14;
// if (num % 2 === 0)
//     console.log('EVEN');
// else
//     console.log('ODD');

// // 3
// let num1 = 60;
// if (num1 % 3 === 0 && num1 % 5 === 0)
//     console.log('FizzBuzz');
// else
//     console.log('Not FizzBuzz');

// // 4
// // document.querySelector('button').onclick = ifLeapYear();
// function ifLeapYear() {
//     let year = prompt('请输入要判断的年份：');
//     // console.log('year=', typeof year);
//     if (year === '') {
//         alert('No input');
//         exit;
//     }
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
//         // console.log("Leap year");
//         alert(year + ' is Leap year');
//     else
//         // console.log('Not a leap year');
//         alert(year + ' is Not leap year');
// }


function showAgeStage() {
    let age = prompt("Please input your age:");

    if (typeof age === 'number') {
        alert('Invalid input');
        exit;
    }
    if (age < 7)
        alert('You are 儿童');
    else if (age < 18)
        alert('You are 少年');
    else if (age < 31)
        alert('You are 青年');
    else if (age < 61)
        alert('You are 中年');
    else 
        alert('You are 老年');
    
}


function max(a, b, c) {
    if (a > b) {
        if (a > c)
             return a;
        else 
            return c;
    }
    else {
        if (b > c)
            return b;
        else 
            return c;
    }
}