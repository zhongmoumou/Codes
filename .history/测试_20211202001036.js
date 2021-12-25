function getTime() {
	let time = new Date();

	let hour = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

  if (hour < 10) {
    hour = '0' + hour;  // 当时小于10的时候，前面加个0
  };
	// 可以用三元表达式：hour = hour < 10 ? '0' + hour : hour;

  if (minutes < 10) {
    minutes = '0' + minutes;  // 当分小于10的时候，前面加个0
  };
	// 可以用三元表达式：minutes = minutes < 10 ? '0' + minutes : minutes;


  if (seconds < 10) {
    seconds = '0' + seconds;  // 当秒小于10的时候，前面加个0
  };
	// 可以用三元表达式：seconds = seconds < 10 ? '0' + seconds : seconds;

	return '现在的时间是：' + hour + ':' + minutes + ':' + seconds
}



console.log(getTime()); 
// 输出：现在的时间是：00:05:52