
function fn(a,c) {
    console.log(a)  // function a(){}
    var a =  123
    console.log(a); //123
    console.log(c); /// function c(){}
    function a(){}
    // console.log(d); // undefind
    console.log(b); // function(){}
    var b =  function(){}
    console.log(b); // function(){}
    function c() { }
    console.log(c); // functionc(){}
}
fn()

// 预编译的时候做了那些事
// 1.创建oa对象 2.找形参和变量声明 作为oa对象的属性名 3.实参和形参相统一 4.找出函数的声明会覆盖变量的声明
// AO{
    // a:undefined function a(params) {}
    // c:undefined function c(params) {}
    // d:undefined
    // d:undefined
// }
