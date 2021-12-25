/* 
任务一：每秒输出一次
重要程度: 5
编写一个函数 printNumbers(from, to)，使其每秒输出一个数字，数字从 from 开始，到 to 结束。

使用以下两种方法来实现。

使用 setInterval。
使用嵌套的 setTimeout。
*/

// 使用 setInterval:
function printNumbers(form, to) {
    let numEnd = setInterval(function add() {
        alert(form);
        if (form == to) {
            clearInterval(numEnd);
        }
        form++;
    }, 1000);
}

printNumbers(5, 10);


// 使用setTimeout:
function printNumbers(form, to) {
    let numEnd = setTimeout(function add() {
        alert(form);
        if (form < to) {
            setTimeout(add, 1000);
        }
        form++;
    }, 1000)
}

printNumbers(5, 10);