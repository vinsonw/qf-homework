
// let num = 1;
// while (num <= 100) {
//     document.write('<p>'+num+'</p>');
//     num++;
// }

// // 1
// let i = 1;
// while (i <= 100) {
//     if (i % 2 == 0)
//         document.write(i+' ');
//     i++;
// }


// 1 'for' version
for (let i=1; i<=100; i++) {
    if (i % 2 === 0)
        document.write(i+' ');
}

document.write('<br/>');
// // 2
// let j = 1;
// while (j <= 100) {
//     if (j % 2 != 0)
//         document.write(j+' ');
//     j++;
// }
for (let j=1; j<=100; j++) {
    if (j % 2 != 0)
        document.write(j+' ');
}

document.write('<br/>');

// // 3
// let k = 1;
// while (k <= 100) {
//     if (k % 7 == 0)
//         document.write(k+' ');
//     k++;
// }

for (let k=1; k<=100; k++) {
    if (k % 7 == 0)
        document.write(k+' ');
}

document.write('<br/>');

// // 4
// let m = 1;
// while (m <= 100) {
//     if ( m % 3 == 0 || m % 7 == 0)
//         document.write(m + ' ');
//     m++;
// }

for (let k=1; k<=100; k++) {
    if ( k % 3 == 0 || k % 7 == 0)
        document.write(k + ' ');
}


// Do while循环练习
// do {
//     // 注意这里不能使用let关键字
//     // let声明的变量作用域仅在{}内部
//     var res = prompt(
//         'I love you. Will you marry me?',
//         'Please type in "yes", or I will die.'
//     );
// } while (res != 'yes');

// alert('Great');

// // 任意语句外面包裹{} 不影响其执行
// { alert(res); }
