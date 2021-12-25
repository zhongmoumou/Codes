// 任务一：或运算的结果是什么？
alert( null || 2 || undefined ); // 输出：2

// 任务二：或运算和 alerts 的结果是什么？
alert( alert(1) || 2 || alert(3) ); // 输出：1 和 2

// 任务三：与操作的结果是什么？
alert( 1 && null && 2 ); // 输出：null

// 任务四：与运算连接的 alerts 的结果是什么？
alert( alert(1) && alert(2) ); // 输出：1 和 underfined

// 任务五：或运算、与运算、或运算串联的结果
alert( null || 2 && 3 || 4 ); // 输出：3

// 任务六：检查值是否位于范围区间内，写一个 if 条件句来检查 age 是否位于 14 到 90 的闭区间。
let num;
if (num >= 14 && num <= 90) {
    alert(num);
}

// 任务七：检查值是否位于范围之外，写一个 if 条件句，检查 age 是否不位于 14 到 90 的闭区间。创建两个表达式：第一个用非运算 !，第二个不用。
let number;
// 方法一：用 !
if (!(number >= 14 && number <=90)) {
    alert(number);
}
// 方法二：用 ||
if (number < 14 || number > 90) {
    alert(number);
}

// 任务八：一个关于 "if" 的问题，下面哪一个 alert 将会被执行？if(...) 语句内表达式的结果是什么？
if (-1 || 0) alert( 'first' ); // 执行，输出 first
if (-1 && 0) alert( 'second' ); // 不执行，则不输出
if (null || -1 && 1) alert( 'third' ); // 执行，输出 third（&& 运算的优先级比 || 高，所以先执行 -1 && 1（第一个数-1和第二个数1都是真值，所以返回最后一个数1），得到 null || 1（1是真值所以返回数字1），1是真值，所以最终该alert执行）

// 任务九：实现使用 prompt 进行登陆校验的代码
/* 
如果访问者输入 "Admin"，那么使用 prompt 引导获取密码，如果输入的用户名为空或者按下了 Esc 键 —— 显示 “Canceled”，如果是其他字符串 —— 显示 “I don’t know you”。

密码的校验规则如下：
（1）如果输入的是 “TheMaster”，显示 “Welcome!”，
（2）其他字符串 —— 显示 “Wrong password”，
（3）空字符串或取消了输入，显示 “Canceled.”。 

请使用嵌套的 if 块。注意代码整体的可读性。

提示：将空字符串输入，prompt 会获取到一个空字符串 ''。Prompt 运行过程中，按下 ESC 键会得到 null。
*/
let userName = prompt("Who's there?",'');

if (userName === 'Admin') {

    let password = prompt('Password?','')
    
    if (password === 'TheMaster') {
        alert('Welcome');
    } else if (password === '' || password === null) {
        alert('Canceled')
    } else {
        alert('Wrong password');
    }

} else if (userName === '' || userName === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}