/* 
随机排列数组。

编写函数 shuffle(array) 来随机排列数组的元素。

多次运行 shuffle 可能导致元素顺序的不同。例如：
所有元素顺序应该具有相等的概率。例如，可以将 [1,2,3] 重新排序为 [1,2,3] 或 [1,3,2] 或 [3,1,2] 等，每种情况的概率相等。
 */

let arr = [1, 2, 3];

function shuffle(arr) {
    return arr.sort( () => Math.random() - 0.5 );
}
// Math.random() - 0.5 的意思就是50%的随机顺序排列

/* 完整写法：
function shuffle(arr) {
    return arr.sort( function() {
        return Math.random() - 0.5;
    } )
} 
*/

shuffle(arr);

alert(arr);

