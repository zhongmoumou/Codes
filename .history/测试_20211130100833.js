let obj = {
  name: '张三',
  age: 18,
  hobby: function() {
    console.log('打篮球');
  }
}

alert(obj['age']);  // 输出：18
obj.hobby();