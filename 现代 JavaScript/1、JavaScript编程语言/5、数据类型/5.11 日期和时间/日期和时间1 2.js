/* 
任务一： 创建日期

创建一个 Date 对象，日期是：Feb 20, 2012, 3:12am。时区是当地时区。

使用 alert 显示结果。
*/

// 方法一：用组件创建日期
let date1 = new Date(2012, 1, 20, 3, 12);

alert(date1);


// 方法二：用字符串创建日期
let date2 = new Date('February 20, 2012 03:12:00');

alert(date2);


// 方法二：用字符串（时间戳）创建日期
let date3 = new Date( Date.parse('2012-02-20T03:12') );

alert(date3);