/* 
将 border-left-width 转换成 borderLeftWidth。

编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。

即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。

示例：

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
提示：使用 split 将字符串拆分成数组，对其进行转换之后再 join 回来。 
*/

// 官方答案，暂时看不太懂
/* function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
} */

function camelize(str) {
  return str
    .split('-') 
    // 通过 str.split('-') 方法，去掉字符串中的符号并分割成数组
    
    .map( (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1) )
    // 通过 str.map() 语句实现第二个单词后的每个单词首字母大写
    /* 
    上面代码还可以写为：
    .map( function(item, index){
      if (index == 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice( 1);
      }
    })
    */
    
    .join(''); 
    // 通过 str.join('')方法，把执行过上面语句后变成的数组整合一个新的字符串
}

alert( camelize('hello-world') );