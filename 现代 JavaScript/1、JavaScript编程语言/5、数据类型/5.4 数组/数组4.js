/* 
任务四：输入数字求和

写出函数 sumInput()，要求如下：

使用 prompt 向用户索要值，并存在数组中。
当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
计算并返回数组所有项之和。
P.S. 0 是有效的数字，不要因为是 0 就停止问询。
*/

function sumInput() {
    let number = []; // 创建空数组 number

    while(true) { // 创建一个让用户输入数字的循环
        let num = prompt('请输入数字？', ''); // 提示用户输入数字
        if (num === '' || num === null) break; // 当用户输入空字符或者按esc的时候停止循环

        number.push(+num); // + 号的作用是把用户输入的数字以数字形式保存到数组末尾，否则添加的是字符串了
    }
    
    let sum = 0; // 创建所有数字和 sum，初始值为 0
    for (let numbers of number) { // 遍历数组 number
        sum += numbers; // 这段代码的意思是把 numbers 中所有的数字想加然后赋值给 sum
    }
    alert(sum); // 输出所有数字和 sum
}

sumInput(); // 调用函数 sumInput()