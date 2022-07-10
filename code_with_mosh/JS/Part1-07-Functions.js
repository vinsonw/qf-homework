// console.log('Hello World');

// Function Declaration vs Function Expression 声明型函数和复制型函数

// Functon Declaration
// function walk() {
//     console.log('walk');
// }
// // ↑↑ BY CONVENTION, 声明函数的末尾不加分号，尽管加上也可以

// // Anonymous Function Expression
// let run = function () {
//     console.log('run');
// }; // 赋值语句需要加分号

// // Named Function Expression
// let run2 = function run2_fun() {
//     console.log('run2');
// };

// walk();
// run();
// run2();
// // 以下Named Function Expression无法调用（出错）
// // run2_fun();

// // Hoisting (声明)提升
// // Hoisting就是将函数声明提升到文件顶部的过程，
// // 运行时由JS引擎自动完成
// // bark()在定义前即可调用
// bark();
// function bark() {
//     console.log('bark');
// }

// // 对于Function Expression无此hoisting
// // 以下语句报错
// // Uncaught ReferenceError: Cannot access 'speak' before initialization
// speak();
// const speak = function () {
//     console.log('speak');
// };

// Arguments arguments对象

// function sum(a, b) {
//     return a + b;
// }

// // 只有头两个参数会被分别赋值给a，b
// console.log(sum(1, 2, 3, 4, 5));

// function sum() {
//     // JS的每个函数都有一个特别的arguments对象
//     console.log(arguments);
//     let sum = 0;
//     for (let arg of arguments) 
//         sum += arg;
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5));

// The rest operator Rest操作符
// '...args'让args为参数列表
// function sum(...args) {
//     console.log(args);
//     return args.reduce((a,c ) => a+c);
// }
// console.log(sum(1, 2, 3, 4, 5, 10));


// ...prices只能放在最后面，这也是rest(剩余的)叫法的来源
// function sum(discount, ...prices) {
//     const total = prices.reduce((a, c) => a + c);
//     return total * ( 1 - discount);
// }
// console.log(sum(0.1, 10,10));

// Defalut parameters 给函数参数设定默认值
// 传统方法
// function interest(principal, rate, years) {
//     rate = rate || 3.5;
//     years = years || 5;

//     return principal * rate / 100 * years;
// }

// ES6之后
// function interest(principal, rate=3.5, years=5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));

// 注意，设置一个默认发参数值以后，如果该参数之后
// 还有参数，其他参数也建议设置默认值，否则会发生下面的情况：
function interest(principal, rate=3.5, years) {
    return principal * rate / 100 * years;
}

// 返回NaN，因为此时years==undefined
console.log(interest(10000));
// 返回NaN, 此时第二个参数5被赋予rate(覆盖默认值3.5),
// year依然是undefined
console.log(interest(10000, 5));
// hack的方法，可以这样，但不建议：
console.log(interest(10000, undefined, 5))