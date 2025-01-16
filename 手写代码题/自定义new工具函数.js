function creatNew(foo, ...args) {
  const obj =  Object.create(foo.prototype)//创造一个对象 并继承foo的原型
  const result = foo.apply(obj, args); // 调用函数 并将this指向新的对象
  return result instanceof Object ? result :obj
  // 返回的是对象直接返回 反则返回obj
}
