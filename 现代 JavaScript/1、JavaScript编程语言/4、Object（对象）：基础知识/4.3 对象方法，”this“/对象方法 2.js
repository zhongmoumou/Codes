// 方法一：在对象字面量中使用 "this"，这里 makeUser 函数返回了一个对象。访问 ref 的结果是什么？为什么？
/* function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // 结果是什么？ */

// 答案是一个错误，这是因为设置 this 的规则不考虑对象定义。只有调用那一刻才重要。这里 makeUser() 中的 this 的值是 undefined，因为它是被作为函数调用的，而不是通过点符号被作为方法调用。


// 方法二：创建一个计算器，创建一个有三个方法的 calculator 对象：read() 提示输入两个值，并将其保存为对象属性。sum() 返回保存的值的和。mul() 将保存的值相乘并返回计算结果。
// 教程答案
let calculator1 = {
    read1() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      },
    sum1() {
      alert( this.a + this.b );
    },
  
    mul1() {
      alert( this.a * this.b );
    },
  };
  
calculator1.read1();
calculator1.sum1();
calculator1.mul1();

// 我的答案
let calculator2 = {
    read2() {
        c = +prompt('c?', '');
        d = +prompt('d?', '');
    },

    sum2() {
        alert(c + d);
    },

    mul2() {
        alert(c * d);
    }
}

calculator2.read2();
calculator2.sum2();
calculator2.mul2();


// 方法三：链式（调用）,有一个可以上下移动的 ladder 对象：
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 显示当前的 step
    alert( this.step );
  }
};

// 现在，如果我们要按顺序执行几次调用，可以这样做：
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 结果显示 1

/* 修改 up，down 和 showStep 的代码，让调用可以链接，就像这样：
ladder.up().up().down().showStep(); // 结果显示 1 

修改后的代码如下：
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this; // 解决方案就是在每次调用后返回这个对象本身。
    },
    down() {
      this.step--;
      return this; // 解决方案就是在每次调用后返回这个对象本身。
    },
    showStep: function() { // 显示当前的 step
      alert( this.step );
      return this; // 解决方案就是在每次调用后返回这个对象本身。
    }
  }; 

ladder.up().up().down().showStep(); // 结果显示 1
*/