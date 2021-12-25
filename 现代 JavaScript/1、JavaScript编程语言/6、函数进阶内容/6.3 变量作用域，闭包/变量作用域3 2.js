/* 
任务三：Counter 是独立的吗？

在这儿我们用相同的 makeCounter 函数创建了两个计数器（counters）：counter 和 counter2。

它们是独立的吗？第二个 counter 会显示什么？0,1 或 2,3 还是其他？

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ? 
*/

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
let counter = makeCounter();
let counter2 = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
alert( counter2() ); // ? 
alert( counter2() ); // ? 
/* 0，1。
函数 counter 和 counter2 是通过 makeCounter 的不同调用创建的。
因此，它们具有独立的外部词法环境，每一个都有自己的 count。 
*/