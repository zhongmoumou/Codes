/* 
任务三：bind 后的函数属性
重要程度: 5
函数的属性中有一个值。bind 之后它会改变吗？为什么，阐述一下？

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); 
*/

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); 
// 输出：underfined。bind 的结果是另一个对象（bound）。它并没有 test 属性。