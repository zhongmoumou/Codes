/* 
任务七：变量可见吗？

下面这段代码的结果会是什么？

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();

P.S. 这个任务有一个陷阱。解决方案并不明显。 
*/

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
/* 
结果报错 error
引擎从函数开始就知道局部变量 x，
但是变量 x 一直处于“未初始化”（无法使用）的状态，直到结束 let（“死区”）
因此答案是 error（通俗来讲就是有两个let定义变量，产生了冲突）
*/