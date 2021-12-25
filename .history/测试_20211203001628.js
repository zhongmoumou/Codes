function unique(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1) {  // 把数组 arr1 的元素依次带进数组 arr2 中对比是否存在，如果不存在则返回 -1
			// 方法一：arr2[arr2.length] = arr1[i]

			// 方法二：
			newArr.push(arr[i]);
		}
	}

	return newArr;
}
let arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];

console.log(arr);  // 输出：['c', 'a', 'z', 'x', 'b']