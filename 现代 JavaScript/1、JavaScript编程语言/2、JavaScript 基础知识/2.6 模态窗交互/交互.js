// 任务一：在浏览器中弹出带文本消息的模态窗，问 What‘s your name?，点击确定后显示 My name is 山山而川
let name = prompt('What‘s your name?', '山山而川');
alert(`My name is ${name}`);

// 任务二：在浏览器中弹出模态窗 Are you 25 years old?，点击确定返回 true，点击取消返回 false；
let age = confirm('Are you 25 years old?');
alert(age);