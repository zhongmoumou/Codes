/* 
过滤范围。

写一个函数 filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大于或等于 a，且小于或等于 b 的元素，并将结果以数组的形式返回。

该函数不应该修改原数组。它应该返回新的数组。

例如：

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1（匹配值）

alert( arr ); // 5,3,8,1（未修改） 
*/

let arr = [1, 3, 4, 2, 5]; // 创建一个数组

function filterRange(arr, a, b) { // 创建一个函数（作用是根据条件过滤数组得到新数组）
    return arr.filter(item => (item >= a && item <= b) );
    // 上面的意思是使用 filter 方法，根据条件（item，即数组中的元素，大于等于a小于等于b）过滤 arr 数组，然后返回得到符合要求的新的数组
    /* 
    上面这段代码还可以写为：
    return arr.filter(function(item) {
        return item >= a && item <= b;
    });
    */
}

let filtered = filterRange(arr, 1, 3); // 调用函数 filterRange 得到符合条件的新数组，并赋值给新函数 filtered

alert(arr); // 显示过滤之前的数组，显示 1，2，3，4，5

alert(filtered); // 显示使用函数过滤之后的数组，显示 1，2，3
