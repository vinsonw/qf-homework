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


/*
 * Objects
*/

// "Objects are collections of key-value pairs."

// 直接创建一个对象
// const circle = {
//     radius: 2,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('DRAW');
//     }
// };

// circle.draw();

// Factory Function 工厂函数创建对象
// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function () {
//             console.log('DRAW');
//         }
//     }
// }

// let circle = createCircle(1);
// circle.draw();

// a simplified version 简化写法
function createCircle(radius) {
    return {
        // 当key==value，可以简写为一个
        radius,
        // 对象方法可以简写如下
        draw () {
            console.log('DRAW from createCircle()');
        }
    }
}

// let circle = createCircle(1);
// circle.draw();

// Constructor Function 构造器函数创建对象
// 注意此时函数名使用Pascal命名法
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('DRAW from Circle() constructor!');
//     }
// }

// 下面语句运行时发生了三件事：
// 1. Circle()创建了一个空对象，类似 let x = {} ;
// 2. this指针指向这个空对象，并初始化对象
// 3. 返回this指针的值给const circle
// const circle = new Circle(1);
// circle.draw();


// 对象是dynamic(动态的)，也就是对象创建以后可以增加和删除属性
// circle.color = 'yellow';
// console.log('circle.color ADDED.');
// console.log('circle.color==', circle.color);
// delete circle.color;
// console.log('circle.color DELETED.');
// console.log('circle.color==', circle.color);


// Constructor Property
// const circle1 = new Circle(1);
// const circle2 = createCircle(1);

// 每一个对象(object)都会有一个construct属性，返回创建该对象的函数
// circle1.constructor 会返回Circle()构造器函数
// circle2.constructor 会返回Object() { [native code] }，即JS默认的对象构造器函数


// Functions are objects 在JS中函数也是对象
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('DRAW from Circle() constructor!');
    }

    return this;
}

// 可以打印Circle这个对象的属性值
console.log(Circle.name); // 函数名
console.log(Circle.length); // 函数参数列表的长度
console.log(Circle.constructor) // 函数对象的构造器函数 Function () { [native code] }

// 当我们使用(构造器)函数创建对象时：
const circle =  new Circle(1);

// 等价于同时传一个空对象和函数参数给构造器
const circle1 = Circle.call({}, 2);
// ↑ 但是此方法创建的对象不会自动返回（不同于new方法），除非函数体结尾加上 "return this", 否则返回undefined

// Circle.apply() 功能与 Circle.call()相同，只是函数的参数要以数组的形式传入
const circle2 = Circle.apply({}, [3]);

// 拓展：不加new操作符(operator)会发生什么
const circle_ =  Circle(8);
// 等价于将window(一个全局对象)和函数参数传给构造器
const circle_1 = Circle.call(window, 2);

// Primitive types(Primitives) / Reference types(Objects) 原始类型和引用类型
// "Primitives are copied by value"
// "Objects are copied by reference"
// 和C语言中通过指针改变结构体的属性值同理
// 严格来说都是按值传递，只是"."操作符可以跨作用域工作，类似C语言中的(ptr->attr)


// Copied by value
function increase(number) {
    // number是的作用域仅限于此函数内部，函数调用结束后number被销毁
    number++;
}

let num = 10;
increase(num);
console.log('num == '  + num); // 依然输出10

// Copied by reference
let obj = { value: 10 };

function increase1(obj) {
    obj.value++;
}

increase1(obj);
console.log('obj.value == '  + obj.value); // 输出11


