function deepClone(target, map = new Map()) {
  const type = getType(target); // 获取对象类型
  if(type !== "Array"  && type !== "Object") return target //说明是基本类型，返回
  const cloneTarget = map.get(target) 
  if(cloneTarget) return cloneTarget // 之前存过，所以返回之前的，防止重复递归死循环
  let clone = type === "Array" ? [] : {};
  map.set(target,clone)// 储存已经克隆的值
  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
        clone[key] = deepClone(target[key],map) 
    }
  }
  return clone
}
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
const obj = {
    name:'hanle',
}
obj.identity = obj
console.log(deepClone(obj));