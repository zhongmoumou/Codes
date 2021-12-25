/* 
任务五：if 内的函数

看看下面这个代码。最后一行代码的执行结果是什么？

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); 
*/

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

/* 
显示：error。
函数 sayHi 是在 if 内声明的，所以它只存在于 if 中。外部是没有 sayHi 的。
*/