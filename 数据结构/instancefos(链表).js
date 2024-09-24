// instanceof 是 JavaScript 中的一个运算符，用于检查一个对象是否是某个类或其子类的实例。
const instanceofs = (target,obj)=>{
    let p  = target
    while (p) {
        if(p == obj.prototype){
            return true
        }
        p = p.__proto__
    }
    return false

}

console.log(instanceofs([123],Object));