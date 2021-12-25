let arr = [1500, 1200, 2000, 2100, 1800];
let newArray = new Array();

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 2000) {
    newArray[newArray.length] = arr[i];
  }

}

console.log(newArray);
