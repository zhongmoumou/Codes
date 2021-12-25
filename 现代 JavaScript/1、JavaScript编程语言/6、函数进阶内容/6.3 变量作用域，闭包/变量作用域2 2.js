/* 
任务二：哪些变量可用呢？

下面的 makeWorker 函数创建了另一个函数并返回该函数。可以在其他地方调用这个新函数。

它是否可以从它被创建的位置或调用位置（或两者）访问外部变量？

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // 会显示什么？
会显示哪个值？“Pete” 还是 “John”？
*/

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
let name = "John";
  
let work = makeWorker();
  
work();
/* 
显示 Pete
函数 work() 在其被创建的位置通过外部词法环境引用获取 name:"Pete"，所以这里的结果是 "Pete"
但如果在 makeWorker() 中没有 let name，那么将继续向外搜索并最终找到全局变量，结果将是 "John"
*/