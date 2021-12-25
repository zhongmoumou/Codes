/* 
任务六：今天过去了多少秒？

写一个函数 getSecondsToday()，返回今天已经过去了多少秒？

例如：如果现在是 10:00 am，并且没有夏令时转换，那么：

getSecondsToday() == 36000 // (3600 * 10)
该函数应该在任意一天都能正确运行。那意味着，它不应具有“今天”的硬编码值。
*/

function getSecondToday() {
    let now = new Date();
    // 创建现在的时间 now
    
    let seconds = ( now.getHours() * 3600 ) + ( now.getMinutes() * 60 ) + ( now.getSeconds() );
    // 获取今天开始现在时间的秒数：今天开始到现在的小时 * 3600 加上 目前小时所在的分 * 60 加上 目前分所在的秒，其中括号可以去掉

    return seconds;

}

alert( getSecondToday() );

/* 第二种方法：
function getSecondsToday() {
    let now = new Date();
    // 设置现在的时间 now

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 设置今天的初始时间 0：00：00

    let milliseconds = now - today; 
    // 用现在时间减去今天的初始时间，即可得到今天开始到现在时间的所有毫秒数

    let seconds = Math.trunc(milliseconds/1000);
    // 用所有毫秒数除以1000便得到了今天开始现在的秒数，使用 Math.trunc()是进行数字取整，去除数字的小数部分，保留整数部分

    return seconds;
  }
  
  alert( getSecondsToday() ); 
  */