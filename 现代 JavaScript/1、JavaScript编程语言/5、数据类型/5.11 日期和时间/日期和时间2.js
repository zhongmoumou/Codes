/* 
任务二： 显示星期数

编写一个函数 getWeekDay(date) 以短格式来显示一个日期的星期数：‘MO’，‘TU’，‘WE’，‘TH’，‘FR’，‘SA’，‘SU’。
*/

let date = new Date(2012, 0, 3);  // 3 Jan 2012

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    // 这里的作用是设置编号来转换日期
    return days[date.getDay()];
}

alert( getWeekDay(date) );        // 应该输出 "TU"