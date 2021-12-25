/* 
任务二：二次 bind
重要程度: 5
我们可以通过额外的绑定改变 this 吗？

输出将会是什么？

function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f(); 
*/

function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f(); 
// 输出：John。一个函数不能被重绑定（re-bound），f.bind(...) 返回的外来（exotic）绑定函数 对象仅在创建的时候记忆上下文（以及参数，如果提供了的话）。