/* 
任务五：反向输出单链表

反向输出前一个任务 输出一个单链表 中的单链表。

使用两种解法：循环和递归。 
*/

// 方法一：循环
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
  
function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
}
  
printReverseList(list);


// 方法二：递归
function printReverseList2(list) {
  
    if (list.next) {
      printReverseList2(list.next);
    }
  
    alert(list.value);
}
  
printReverseList2(list);