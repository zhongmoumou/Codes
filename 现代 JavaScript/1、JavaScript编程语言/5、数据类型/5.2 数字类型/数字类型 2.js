// 任务一：来自访问者的数字的总和，创建一个脚本，提示访问者输入两个数字，然后显示它们的总和。
// 方法一：使用 + 将输入的值转换为数字（输入的值必须是数字才生效，否则变成NaN）
let num1 = +prompt('请输入第一个数字？', '');
let num2 = +prompt('请输入第二个数字？', '');

alert( sum = num1 + num2 );

// 方法二：使用 parseInt 或 parseFloat 转换数字（可以在100px、88em这种类型的值中提取数字）
let num3 = prompt('请输入第一个数字？', '');
let num4 = prompt('请输入第二个数字？', '');

alert( sum = parseInt(num3) + parseInt(num4) );

// 任务二：重复，直到输入的是一个数字，创建一个函数 readNumber，它提示输入一个数字，直到访问者输入一个有效的数字为止。结果值必须以数字形式返回。访问者也可以通过输入空行或点击“取消”来停止该过程。在这种情况下，函数应该返回 null。
function readNumber() {
    let num;
  
    do {
      num = prompt("请输入一个数字?", '');
    } while ( !isFinite(num) );
  
    if (num === null || num === '') {
        return null;
    }
  
    alert(num);
  }
  
  readNumber();



