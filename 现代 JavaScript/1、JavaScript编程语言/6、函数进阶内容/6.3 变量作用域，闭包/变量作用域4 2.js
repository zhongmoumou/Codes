/* 
任务四：Counter 对象

这里通过构造函数创建了一个 counter 对象。

它能正常工作吗？它会显示什么呢？

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ? 
*/

function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}
  
let counter = new Counter();
  
alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ? 
/* 
分别显示：1，2，1
这两个嵌套函数都是在同一个词法环境中创建的，所以它们可以共享对同一个 count 变量的访问
*/