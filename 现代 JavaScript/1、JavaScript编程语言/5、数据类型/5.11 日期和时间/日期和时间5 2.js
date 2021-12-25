/* 
任务五：某月的最后一天？

写一个函数 getLastDayOfMonth(year, month) 返回 month 月的最后一天。有时候是 30，有时是 31，甚至在二月的时候会是 28/29。

参数：

year —— 四位数的年份，比如 2012。
month —— 月份，从 0 到 11。
举个例子，getLastDayOfMonth(2012, 1) = 29（闰年，二月） 
*/

function getLastDayOfMonth(year,month) {
    let date = new Date(year, month + 1, 0);
    // 使用的是 new Date(年，月，日)格式，在日这里写 0，意思是显示上个月的最后一天，所以要显示这个月的最后一天则需要把 month + 1

    return date.getDate();
}

alert( getLastDayOfMonth(2021,1) ); // 2月的最后一天：28
alert( getLastDayOfMonth(2021,7) ); // 8月的最后一天：31
alert( getLastDayOfMonth(2021,8) ); // 9月的最后一天：30
