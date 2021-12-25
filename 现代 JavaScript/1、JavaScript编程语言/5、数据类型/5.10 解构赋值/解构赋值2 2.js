/* 
任务二：最高薪资

这儿有一个 salaries 对象：

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
新建一个函数 topSalary(salaries)，返回收入最高的人的姓名。

如果 salaries 是空的，函数应该返回 null。
如果有多个收入最高的人，返回其中任意一个即可。
P.S. 使用 Object.entries 和解构语法来遍历键/值对。
*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let max = 0; // 设置薪资初始值为 0，方便后面进行比较和复赋值
  let maxName = null; // 设置薪资人的初始值为 null，方便后面 salaries 为空的时候返回 null

  for(let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

alert( topSalary(salaries) );