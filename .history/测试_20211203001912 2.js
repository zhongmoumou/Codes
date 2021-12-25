function delete(arr) {
	let newArr = new Array();

	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] < 2000) {
	    // newArray[newArray.length] = arr[i];
	    newArr.push(arr[i]);
	  }
	}
	return newArr;
}

let arr = [1500, 1200, 2000, 2100, 1800];

console.log( delete(arr) );