// 任务二：过滤字谜（anagrams）
/* 
Anagrams 是具有相同数量相同字母但是顺序不同的单词。

例如：

nap - pan
ear - are - era
cheaters - hectares - teachers
写一个函数 aclean(arr)，它返回被清除了字谜（anagrams）的数组。
对于所有的字谜（anagram）组，都应该保留其中一个词，但保留的具体是哪一个并不重要。
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // 将单词 split 成字母，对字母进行排序，之后再 join 回来
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
}

/* 
第二种方法：
function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
} 
*/

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

