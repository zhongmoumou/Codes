// // 任务一：if 值为 0 的字符串，alert 弹窗会出来吗？
// if ("0") {
//     alert( 'Hello' );
//   }
//   // 输出结果：会显示 Hello，因为任何非空字符串（"0" 不是空字符串）的逻辑值都是 true，所以会执行大括号中的内容

// // 任务二：JavaScript 的名字，使用 if..else 结构，实现提问 “What is the “official” name of JavaScript?” 的代码，如果访问者输入了 “ECMAScript”，输出就提示 “Right!”，否则 — 输出：“Didn’t know? ECMAScript!”
// let name = prompt('What is the "official" name of javascript','');
// if (name == 'ECMAScript') {
// alert("Right!");
// } else {
// alert("Didn't know?ECMAScript!");
// }

// // 任务三：显示符号，使用 if..else 语句，编写代码实现通过 prompt 获取一个数字并用 alert 显示结果：如果这个数字大于 0，就显示 1；如果这个数字小于 0，就显示 -1；如果这个数字等于 0，就显示 0。
// let num = prompt('Please enter a number', '');
// if (num > 0) {
//   alert(1);
// }else if (num < 0) {
//   alert(-1);
// }else {
//   alert(0);
// }

// // 任务四：使用条件运算符 '?' 重写下面的 if 语句：
// /* 
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// } 
// */
// let result = (a + b < 4) ? 'Below' : 'Over';

/* 或：
let result = prompt('请输入 a + b 的结果？', '');
(result < 4) ? alert('Below') : alert('Over') 
*/

// 任务五：使用多个三元运算符 '?' 重写下面的 if..else 语句。
/* 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
let login = prompt('请输入你的角色？', '');
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings':
              (login == 'No login') ? 'No login':
              '';
alert(message)

/* 或：
let login = prompt('请输入你的角色？', '');
let message = (login == 'Employee') ? alert('Hello') :
              (login == 'Director') ? alert('Greetings'):
              (login == 'No login') ? alert('No login'):
              alert(''); 
*/