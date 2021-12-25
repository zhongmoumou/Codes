document.querySelector('h1').textContent = 'Hello World!';
/* 
用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中，然后把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!”

上面代码全写是：
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; 
*/

document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}
/*
用 querySelector() 函数获取标题的引用，实现点击标题跳出弹框“别戳我，我怕疼。”

上面代码全写是：
let a = document.querySelector('h1');
a.onclick = function() {
    alert('别戳我，我怕疼。');
}
*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/盒模型.png') {
      myImage.setAttribute('src', 'images/盒模型2.png');
    } else {
      myImage.setAttribute('src', 'images/盒模型.png');
    }
}
// 使用 DOM API 为网页添加另一张图片，并用 JavaScript 使图片在点击时进行切换


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
// 用户初次进入站点时将网页的标题改成一段个性化欢迎信息(点击“切换用户”按钮跳出弹框输入)