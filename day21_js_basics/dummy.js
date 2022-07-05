// console.log("hello world");

// isNaN()在遇到数字时，返回false
// 在遇到非数字时，会试图将非数字转为数字
// '', ' ', null, '1'都会被转为数字，返回false
// console.log('','=',isNaN('')); // false
// console.log(' ','=',isNaN(' ')); // false
// console.log('null','=',isNaN(null)); // false
// console.log('1','=',isNaN('1'));  // false

// 返回true的情况
// console.log('NaN','=', isNaN(NaN));       // true
// console.log('undefined','=',isNaN(undefined)); // true
// console.log('{}', '=', isNaN({}));        // true

// MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN


// 加法会优先做拼接
// console.log('1' + 1);

// 其他算数运算符会优先做运算
// console.log('1' - 1);
// console.log('1' * 1);
// console.log('1' / 1);
// console.log('1' % 1);


