// 手写call

const obj = {
  name: "阿乐",
};
const person = {
  getName(val) {
    console.log(this.name + `坚持${val}`);
  },
};
Function.prototype.myCall = function (context) {
  //1.执行getName
  // 2.改变this指向
  if (typeof this !== "function") {
    throw new Error("this不是函数");
  }
  context = context || globalThis; // globalThis 比window好，有可能是node环境
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(args);
  delete context.fn;
  return result; // 返回结果
};
// person.getName.call(obj)

person.getName.myCall(obj, "BODYCOMBAT");

Function.prototype.myApply = function (thisArg, argsArray) {
  // 1. 确保 this 是一个函数
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }
  // 2. 处理 thisArg，当为 null 或 undefined 时，将 thisArg 指向全局对象（window 或 global）
  thisArg = thisArg || globalThis;
  // 3. 创建一个唯一的属性来保存函数
  const fnKey = Symbol("fn"); // 避免属性冲突
  thisArg[fnKey] = this; // 将当前函数作为 thisArg 的方法
  // 4. 执行函数并传递参数
  let result;
  if (Array.isArray(argsArray)) {
    result = thisArg[fnKey](...argsArray); // 解构数组作为参数
  } else if (argsArray == null) {
    result = thisArg[fnKey](); // 如果没有参数，直接调用
  } else {
    throw new TypeError(
      "The second argument must be an array or null/undefined"
    );
  }
  // 5. 删除临时属性
  delete thisArg[fnKey];

  // 6. 返回结果
  return result;
};
Function.prototype.myBind = function (thisArg, ...args) {
  // 1. 确保 `this` 是函数
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }

  // 2. 保存当前函数引用
  const originalFunction = this;

  // 3. 创建绑定函数
  function boundFunction(...newArgs) {
    // 如果作为构造函数调用，`this` 是新实例
    if (this instanceof boundFunction) {
      // 使用原函数的原型作为新实例的原型
      return new originalFunction(...args, ...newArgs);
    }
    // 普通调用，将 `this` 绑定到 `thisArg`
    return originalFunction.apply(thisArg, [...args, ...newArgs]);
  }
  // 4. 维护原型链
  if (originalFunction.prototype) {
    boundFunction.prototype = Object.create(originalFunction.prototype);
  }

  return boundFunction;
};
