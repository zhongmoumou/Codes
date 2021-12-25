/* 
任务一：作为方法的绑定函数
重要程度: 5
输出将会是什么？

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); 
*/

function f() {
  alert( this ); 
  // 输出：null。绑定函数的上下文是硬绑定（hard-fixed）的。没有办法再修改它。所以即使我们执行 user.g()，源方法调用时还是 this=null。
}

let user = {
  g: f.bind(null)
};

user.g(); 
