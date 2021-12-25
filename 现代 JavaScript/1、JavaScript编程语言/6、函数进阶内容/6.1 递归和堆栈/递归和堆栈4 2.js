/* 
任务四：输出一个单链表
重要程度: 5
假设我们有一个单链表（在 递归和堆栈 那章有讲过）：

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
编写一个可以逐个输出链表元素的函数 printList(list)。

使用两种方式实现：循环和递归。

哪个更好：用递归还是不用递归的？ 
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
  
function printList(list) {
    while(list) {
      alert(list.value);
      list = list.next;
    }
}
  
printList(list);

// 方法二：递归
function printList2(list) {
  
    alert(list.value); // 输出当前元素
  
    if (list.next) {
      printList(list.next); // 链表中其余部分同理
    }
  
}
  
printList2(list);