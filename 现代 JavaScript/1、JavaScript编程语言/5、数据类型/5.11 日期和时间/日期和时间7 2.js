/* 
任务七：距离明天还有多少秒？

写一个函数 getSecondsToTomorrow()，返回距离明天的秒数。

例如，现在是 23:00，那么：

getSecondsToTomorrow() == 3600
P.S. 该函数应该在任意一天都能正确运行。那意味着，它不应具有“今天”的硬编码值。 
*/

function getSecondsToTomorrow() {
    let now = new Date();
    // 创建现在的时间

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
    // 创建明天的时间 0：00：00

    let seconds = Math.trunc( (tomorrow - now) / 1000 );
    // 用明天的时间减去今天的时间就等于 今天离明天还剩多少秒了（要除以1000并取整，不然得到的是毫秒）

    return seconds;
}

/* 第二种方法：
function getSecondsToTomorrow() {
    let now = new Date();
    // 创建现在的时间
  
    let seconds =  ( now.getHours() * 3600 ) + ( now.getMinutes() * 60 ) + ( now.getSeconds() );
    // 创建今天此时的秒数

    let todaySeconds = 86400 - seconds;
    // 用一天24小时总秒数 86400 减去今天此时的秒数，即可得到当前时间离明天剩余秒数

    return todaySeconds
} 
*/

alert( getSecondsToTomorrow() );