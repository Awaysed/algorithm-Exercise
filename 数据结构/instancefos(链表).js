// instanceof 是 JavaScript 中的一个运算符，用于检查一个对象是否是某个类或其子类的实例。
const instanceofs = (target,ConstructorFoo )=>{
    let p  = target
    // ConstructorFoo构造函数
    while (p) {
        if(p == ConstructorFoo.prototype){
            return true
        }
        p = p.__proto__ // 沿着原型链向上寻找
    }
    return false
}

console.log(instanceofs([123],Object));
console.log(instanceofs([123],Array));