/* 
复制和排序数组。

我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。

创建一个函数 copySorted(arr) 返回这样一个副本。
*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let arrs = arr.slice(); // 将arr 数组的项全部复制给新数组 arrs
    return arrs.sort(); // 将新数组 arrs 进行原位置排序

    /* 
    上面两行代码简写：
    return arr.slice().sort()
    */
}

let sorted = copySorted(arr); // 运行函数并将得到的新数组赋值给 sorted

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes) 


