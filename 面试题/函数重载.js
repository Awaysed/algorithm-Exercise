
class OverLoad {
    addImpl(...arges){
        console.log(arges);
        const fn = arges.pop()
        if(typeof fn !== 'function'){
            throw new TypeError('最后一个参数必须是函数')
        }
        const key  = arges.join(',')
        this[key] = fn  //保存在对象上
    }
    execute(...arges){
        const argStr = arges.map((val)=> typeof val).join(',') // 取出参数类型
        if(this[argStr]){
            const fn  = this[argStr]
            return fn.apply(this,arges)
        }else{
            throw new TypeError('没有找到对应的实现')
        }
    }
}
// 等于预设一种参数放到对象上面  当传的的参数符合便调用对应的函数
const temp = new OverLoad()
temp.addImpl('string',(params)=>{
    console.log('只有一个字符串');
})
temp.addImpl('number',(params)=>{
    console.log('只有一个数字');
})
temp.addImpl((params)=>{
    console.log('没有参数');
})
temp.addImpl('string','number',(params1,params2)=>{
    console.log('数字，字符串');
})
temp.execute(1)
temp.execute('12')
temp.execute()
