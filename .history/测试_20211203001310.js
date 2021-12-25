let arr1 = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
	if (arr2.indexOf(arr1[i]) === -1) {  // 把数组 arr1 的元素依次带进数组 arr2 中对比是否存在，如果不存在则返回 -1
		// 方法一：arr2[arr2.length] = arr1[i]

		// 方法二：
		arr2.push(arr1[i]);
	}
}

console.log(arr2);  // 输出：['c', 'a', 'z', 'x', 'b']