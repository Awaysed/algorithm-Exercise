// 实现一个有sum功能，无限调用的add函数
// 例： add(1, 2, 3).sum(); 和 add(1)(2, 3).sum(); 和 add(1, 2)(3).sum(); 输出一样的结果

function add(...args) {
    let params = [...args] // 闭包保存
    function inerr(...args2) {
        params.push(...args2) // 函数柯里化 保存参数
        return inerr
    }
    inerr.add = function(){
        // 将所有传入参数相加
        return params.reduce((old, cur) => {
             return old + cur
        } , 0)
    }
    return inerr // 返回该函数
}

console.log(add(1,2)(3).add());
