// 闭包
function test1() {
  function foo() {
    var i = 0;
    return function () {
      console.log(i++);
    };
  }
  var f1 = foo(),
    f2 = foo();
  f1();
  f1();
  f2();
}

//对象是个引用值
function test2() {
  var obj = {},
    arr = [];
  for (var i = 0; i < 3; i++) {
    obj.a = i;
    arr.push(obj);
  }
  console.log(arr);
}
// [{a:2},{a:2},{a:2}]
// test2()

//
function test3(s) {
    
}

