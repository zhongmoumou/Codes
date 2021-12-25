/* 
原位（in place）过滤范围。

写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

该函数应该只修改数组。它不应该返回任何东西。

例如：

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

alert( arr ); // [3, 1] 
*/

let arr = [3, 5, 1, 8, 9];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) { // 使用 for 循环和 if 条件，依次排查数组的元素（ arr[i] ）是否符合范围（删除a和b之外的元素）要求
      if (arr[i] < a || arr[i] > b) { // 使用 if 条件，如果数组的元素（ arr[i] ）超出筛选范围（在 a 跟 b 之外），则删除这个元素
        arr.splice(i, 1); // 使用 arr.splice 删除 a b 范围之外的元素。从索引 i = 0 开始删除
        i--; // 如果在 i 的位置删除了当前元素（ arr[i] ），那么此时后面的元素会依次往前移，于是后面 i+1 的位置移动到了 i（依次类推），这个时候按顺序应该检查移动到 i 位置的 i+1，如果不使用 i-- 按照上面的for循环 i 就变成了 i+1，相当于检查后面元素了，使用 i--则可以继续检查当前元素（删除时才会有次影响）
      }
    }
}

filterRangeInPlace(arr, 2, 6);

alert(arr); // 使用函数之后的数组显示 3，5，8，9
