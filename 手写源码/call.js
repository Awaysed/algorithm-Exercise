
// 手写call

const obj = {
    name:'阿乐'
}
const person = {
    getName(val){
        console.log(this.name + `坚持${val}`);
    }
}
Function.prototype.myCall = function(context){
    //1.执行getName
    // 2.改变this指向
    if(typeof this !== 'function') {
        throw new Error('this不是函数')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    context.fn(args)
    delete context.fn
}
// person.getName.call(obj)
person.getName.myCall(obj,'BODYCOMBAT')

