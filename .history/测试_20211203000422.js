let arr1 = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
	if (arr1.indexOf(arr1[i]) != -1) {
		arr2[arr2.length] = arr1[i]
	}
}

console.log(arr2);