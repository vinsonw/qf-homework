
function validateNumber(input) {
    let raw = input;
    input = Number(input);
    // console.log('validate: input = ', String(input));
    if (isNaN(input)) {
        alert(raw + ' 是无效输入');
        exit;
    }
}

// 1
function showRange() {
    let input = prompt('请输入要判断的数字');
    validateNumber(input);
    if (input > 0)
        alert(input + ' >0');
    else if (input == 0)
        alert(input + ' =0');
    else
        alert(input + ' <0');
}

// 2
function isOddOrEven() {
    let input = prompt('请输入要判断奇偶的数字');
    validateNumber(input);
    if (input % 2 === 0)
        alert(input + '是偶数') ;
    else
        alert(input + '是奇数') ;
}

// 3
function ifHealthy() {
    let height = prompt('请输入你的身高(cm)：');
    let weight = prompt('请输入你的体重(市斤)：');
    validateNumber(height);
    validateNumber(weight);
    let calculatedWeight = 2*(height - 108);
    if (Math.abs(weight - calculatedWeight) > 10)
        alert('你的体重不是很健康');
    else
        alert('你的体重ok');
}

// 4
function showDataType() {
    let data = prompt('请输入任意数据');
    if (isNaN(Number(data))) { // 注意NaN == NaN返回false
        alert('输入的' + data + ' 是字符串');
        if (data === 'NaN')
            alert('但我猜你想输入的是做为值的NaN，NaN的类型是number');
        else if (data == 'undefined')
            alert('但我猜你想输入的是做为值的undefined，undefined的类型依然是undefined');
        else if (data == 'null')
            alert('但我猜你想输入的是做为值的null，null的类型是object');
    }
    else
        alert(data + ' 是数字');
}

// 5
function ifLeapYear() {
    let year = prompt('请输入要判断的年份：');
    validateNumber(year);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
        alert(year + ' 是闰年');
    else
        alert(year + ' 不是闰年');
}

// 6
function showWeekday() {
    let day = prompt('请输入数字（假设本月1号为周一）');
    validateNumber(day);
    if (day > 31) {
        alert('无效输入');
        exit;
    }
    let weekday = day % 7;
    if (weekday == 0)
        alert(day + ' 号是星期日');
    else
        alert(day + ' 号是星期' + weekday);
}

// 7
function showGrade() {
    let score = prompt('请输入成绩');
    validateNumber(score);
    if (score < 60)
        alert('不及格');
    else if (score < 80)
        alert('及格');
    else if (score < 90)
        alert('良');
    else
        alert('优');
}
function showGradeS() {
    let score = prompt('请输入成绩');
    validateNumber(score);

    // google到的思路
    let stage = parseInt(Number(score) / 10);
    switch (stage) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            alert('不及格');
            break;
        case 6:
        case 7:
            alert('及格');
            break;
        case 8:
            alert('良');
            break;
        case 9:
            alert('优');
            break;
        default:
            alert('无效成绩');
            break;
    }
}

// 8
function showNumOfDays()  {
    let month = prompt('输入代表月份的数字');
    validateNumber(month);
    switch (Number(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert(month + ' 月有31天');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert(month + ' 月有30天');
            break;
        case 2:
            alert(month + ' 月有28或者29天');
            break;
        default:
            alert('没有' + month + '月');
            break;
    }
}

// 供第9题调用
function showNumOfDays_silent(month, isLeapYear)  {
    switch (Number(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30; 
        case 2:
            if (isLeapYear)
                return 29;
            return 28;
        default:
            alert('没有' + month + '月');
            break;
    }
}

// 9
function showDayOfYear() {
    let date = prompt('请输入数字日期');
    validateNumber(date);
    let year = Number(date.substring(0, 4));
    let month = Number(date.substring(4, 6));
    let day = Number(date.substring(6, 8));

    let isLeapYear = false;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        isLeapYear = true;
    }

    // 剔除日期不存在的情况
    // 包含校验平年输入2/29的情况
    if (month > 12 || day > showNumOfDays_silent(month, isLeapYear)) {
        alert('日期不存在');
        exit;
    }


    let yearToDate=0;
    for (let m=1; m<month; m++) {
        yearToDate += showNumOfDays_silent(m, isLeapYear);
        // console.log(yearToDate);
    }

    yearToDate += Number(day);

    // 校验平年输入2/29的情况
    // if (!isLeapYear && month == '02' && day == '29') {
    //     alert(year+' 是平年，没有2月29号' );
    //     exit;
    // }

    if (isLeapYear)
        alert(year+' 是闰年，' + month + '月' + day + '天' + '是第' + yearToDate + '天' );
    else
        alert(year+' 是平年，' + month + '月' + day + '天' + '是第' + yearToDate + '天' );

}

// 10 
function showDetailedTime() {
    let totalSec = 7896709887;
    let daySec = 24 * 60 * 60;
    let day = parseInt(totalSec / daySec);
    let hour = parseInt((totalSec - day * daySec) / 3600);
    let minute = parseInt((totalSec - day * daySec - hour * 3600) / 60);
    let sec =  totalSec - day * daySec - hour * 3600 - minute * 60;

    alert(totalSec + '秒是' + day + '天' + hour + '小时' + minute + '分钟' + sec + '秒');
}

// 11
function showSalaryAfter50Years() {
    let currentSalary = 10000;
    for (let i=1; i<=50; i++)
        currentSalary = currentSalary * (1+0.05);
    alert('50年后工资为：' + currentSalary.toFixed(0));
}