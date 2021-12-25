let obj = {
  PI: 3.1415926,
  Max: function() {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (max > arguments[i]) {
        max = arguments[i];
      }
    }
  }

}