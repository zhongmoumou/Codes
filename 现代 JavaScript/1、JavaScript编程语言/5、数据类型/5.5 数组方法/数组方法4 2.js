/* 降序排列。

用你的代码以降序对其进行排序
 
*/

let arr = [5, 2, 1, -10, 8, 12];

// 方法一：
arr.sort( function(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
});


// 方法二：
arr.sort( function(a, b) {
    return b-a;
});

// 方法三：
arr.sort( (a, b) => b-a );


alert( arr ); // 显示 12, 8, 5, 2, 1, -10 

