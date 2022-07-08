
function showRightTriangle() {
    for (let i=1; i<5; i++) {
        let pattern = '';
        for (let j=1; j<i+1; j++)
            pattern += '*'
        document.write(pattern+'<br/>');
    }
}

document.write('// 1 <br>');
showRightTriangle();

// 2
function factOf(num) {
    let fact = 1;
    for (let i=num; i>1; i--)
        fact *= i;
    return fact;
}

document.write('// 2 <br>');
document.write(factOf(10)+'<br/>');

function factFromTo(from, to) {
    let sum = 0;
    for (let i=from; i<to+1; i++) 
        sum += factOf(i);
    return sum;
}

document.write('// 3 <br>');
document.write(factFromTo(1, 10)+'<br/>');

// 4
document.write('// 4 略 <br>');

// 5/ 6/ 7
function sumSet(from, to) {
    let sum = 0;
    let oddSum = 0;
    let evenSum = 0;
    for (let i=from; i<to+1; i++) {
        sum += i;
        if (i%2 == 0)
            evenSum += i;
        else
            oddSum += i;
        // console.log(i);
    }
    return [sum, oddSum, evenSum];
}

let sum = sumSet(1, 100);
document.write('// 5 1-100的和' +  sum[0] + '<br>');
document.write('// 6 1-100的奇数和' +  sum[1] + '<br>');
document.write('// 7 1-100的偶数和' +  sum[2] + '<br>');


// 8
function printInt(from, to) {
    let cnt = 0;
    for (let i=from; i<to+1; i++) {
        if (i % 3== 0) {
            document.write(i+' ');
            cnt++;
            if (cnt % 5 == 0)
                document.write('<br>');
        }
    }
}

document.write('// 8 20-80间能被3整除的整数' + '<br>');
printInt(20, 80);


// 9
function sumOfFraction(from, to) {
    let sum = 0;
    for (let i=from; i<to+1; i++) {
        sum += (-1) ** (i+1) * (1/i);
    }
    return sum;
}
document.write('9,. 求出1/1-1/2+1/3-1/4…..1/100的和' + '<br>');
document.write(sumOfFraction(1,100));


// 10. 99乘法表
function printMultiplicationTable() {
    document.write('<br/>');
    for (let i=1; i<10; i++) {
        for (let j=i; j<10; j++)
            document.write('<button>'+i+' x '+j+' = '+i*j+'</button>');
        document.write('<br/>');
    }
}

document.write('<br>');
document.write('// 10. 99乘法表')
// 打印乘法表
printMultiplicationTable();
// 给乘法表添加必要样式
let bts = document.getElementsByTagName('button');
for (let bt of bts) {


    // 搭配for in循环使用时，
    // 以下会遍历到length/nameItem/item等key，导致出错，见：
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
    // bts[bt].style.width = "6em";
    // bts[bt].style.margin = ".1em";
    // console.log('bt=='+bt);

    bt.style.width = "6em";
    bt.style.margin = ".1em";
}


// 11
function printLeapYear(from, to) {
    let cnt = 0;
    for (let i=from; i<to+1; i++) {
        if (i % 4 == 0 && i % 100 != 0 ||
            i % 400 == 0) {
            document.write(i+' ');
            cnt++;
            if (cnt % 4 == 0)
                document.write('<br/>');
        }
    }
}


document.write('<br>');
document.write('<br>');
document.write('// 11 打印出1000-2000中所有的闰年，并以每行四个数的形式输出');
document.write('<br>');
printLeapYear(1000, 2000);

// 11 -> 17 gap
// 17
function printPrimes(from, to) {
    for (let i=from; i<to+1; i++) {
        let isPrime = true;
        for (let j=2; j<i; j++)
            if (i % j ==0) {
                isPrime = false;
                break;
            }
        if (isPrime)
            document.write(i+' ')
    }
}

document.write('<br>');
document.write('<br>');
document.write('// 17 打印出100-200之间的素数');
document.write('<br>');
printPrimes(100, 200);

// 18
function sumOfSymetry(num, maxNumLength) {
    let sum = 0;
    // 求出前一半
    for (let i=1; i<maxNumLength; i++) {
        for (let j=i; j>0; j--)
            sum += 10**(j-1)*num;
    }
    // 对称性求出整体(除了中间那项)
    sum *= 2;
    // 求出在中间长度最大的那项
    let maxNum = 0;
    for (let i=1; i<=maxNumLength; i++) {
        maxNum += 10**(i-1)*num; // 逐渐添加高位数字
    }
    sum += maxNum;
    return sum;
}

document.write('<br>');
document.write('<br>');
document.write('// 18 ')
document.write('<br>');
// 2+22+222+22+2 -> 传参(2, 3)
document.write(sumOfSymetry(2,3));

// 19 
function findRightNumber(from, to) {
    for (let i=from; i<to+1; i++) {
        if (i % 3 == 1 &&
            i % 4 == 2 &&
            i % 5 == 3)
            document.write(i+'<br>');
    }
}
document.write('<br>');
document.write('<br>');
document.write('// 19 ')
document.write('<br>');
findRightNumber(100, 200);

// 20

document.write('<br>');
document.write('<br>');
document.write('// 20 (手工解方程) ')
document.write('被除数==115，除数==35')
document.write('<br>');

// 21

function theMonkeyProblem(bananaNum, givenDistance) {
    let eatenBanana = 0;
    let currentBanana = bananaNum;

    let cntDirction = 0;
    let distance = 0;
    while (currentBanana > 0) {

        // 如果在一根香蕉还没吃完的时候到达
        // home，会出现负距离，即另一个方向
        // 的行程，需要从下次行程中减去
        // 这部分已经走的距离
        distance += givenDistance;
        while (distance > 0) {
            eatenBanana++;
            distance -= 6;
        }
        if (cntDirction % 2 == 0) {
            currentBanana -= 50;
            // 以下语句开始放错了，
            // 导致猴子永远都是返程，currentBana的数量维持
            // 50不变，导致死循环
            // cntDirction++;
        }
        // 正确的位置
        cntDirction++;
        // console.log('banana=',currentBanana);
    }
    document.write(`还剩下${bananaNum-eatenBanana}根香蕉`);
    document.write('<br>');
    document.write(`单程跑了${cntDirction}次`);
}

document.write('<br>');
document.write('<br>');
document.write('// 21')
document.write('<br>');
theMonkeyProblem(100, 50);
 
// 22
function countPassTimes(money) {
    let cnt = 0
    while (money > 50000) {
        money *= (1-0.05);
        cnt++;
    }
    while (money > 0) {
        money -= 5000;
        if (money > 0)
            cnt++;
    }
    console.log('money==', money);
    return cnt;
}
document.write('<br>');
document.write('<br>');
document.write('// 22')
document.write('<br>');
document.write(countPassTimes(100000));

// 23
function findNarcissisticNumberBetween(from, to) {
    for (let i=from; i<to+1; i++) {
        a = parseInt(i/100);
        b = parseInt((i-a*100)/10)
        c = i - a*100 - b*10;
        if (i == a**3 + b**3 + c**3)
            document.write(i+'<br/>');
    }
}

document.write('<br>');
document.write('<br>');
document.write('// 23')
document.write('<br>');
findNarcissisticNumberBetween(100,999);