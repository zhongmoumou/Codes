let arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];

for (let i = 0; i < arr.length; i++) {
	if (arr.indexOf(arr[i]) != -1) {
		arr[arr.length] = arr[i]
	}
}

console.log(arr);