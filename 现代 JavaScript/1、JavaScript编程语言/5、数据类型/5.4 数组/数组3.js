/* 
任务三：在数组上下文调用

结果是什么？为什么？
*/

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})
/* 
在末尾加上函数 function() { alert(this); }，此时数组 
arr = [
    "a", 
    "b", 
    function() { 
        alert(this); 
    }
];
 */

arr[2](); // 答案：输出整个数组（因为arr[2]()相当于调用了函数，函数内容是this，显示当前数组的内容）
