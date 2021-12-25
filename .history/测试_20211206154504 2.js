/* 
要求：
查找字符串 'abcoefoxyozzopp' 中出现最多的字符，并统计其次数；

核心算法：
利用 charAt(index) 遍历字符串 'abcoefoxyozzopp’ ；
把遍历出来的每个字符串赋值给一个对象（strs）；
把每个字符都存储给对象，如果对象没有该属性，就为 1，如果存在了就 +1；
遍历对象，得到最大值和该字符； */

let str = 'abcoefoxyozzopp';