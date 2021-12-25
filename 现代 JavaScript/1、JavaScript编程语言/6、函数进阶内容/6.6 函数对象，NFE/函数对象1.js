/* 
任务一：为 counter 添加 set 和 decrease 方法
重要程度: 5
修改 makeCounter() 代码，使得 counter 可以进行减一和设置值的操作：

counter() 应该返回下一个数字（与之前的逻辑相同）。
counter.set(value) 应该将 count 设置为 value。
counter.decrease(value) 应该把 count 减 1。
查看沙箱中的代码获取完整使用示例。

P.S. 你可以使用闭包或者函数属性来保持当前的计数，或者两种都写。 
*/


function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
}
/* 
该解决方案在局部变量中使用 count，而进行加法操作的方法是直接写在 counter 中的。它们共享同一个外部词法环境，并且可以访问当前的 count。 
*/



/* 
let counter = makeCounter();

alert( counter() );
alert( counter() );
alert( counter() ); 
*/
