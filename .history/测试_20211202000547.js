function getTime() {
	let time = new Date();

	let hour = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

  if (hour < 10) {
    hour = '0' + hour;
  };
  if (minutes < 10) {
    minutes = '0' + minutes;
  };
  if (seconds < 10) {
    seconds = '0' + seconds;
  };

	return '现在的时间是：' + hour + ':' + minutes + ':' + seconds
}



console.log(getTime()); 
// 输出：现在的时间是：