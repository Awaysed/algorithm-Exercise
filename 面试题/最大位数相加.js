// 两个超过最大位数的值相加 js中的精度丢失
// a b 为字符串
function sum(a, b) {
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, "0");
  b = b.padStart(len, "0"); // 填充到特定长度
  let result = "";
  let carray = 0; // 进位的数
  for (let i = len-1; i >= 0; i--) {
    const total = a[i] + b[i] + carray; // 单个总值
    const num = total % 10; // 取余数
    carray = Math.floor(total / 10); //向下取整
    result = num + result // 这里要把num 放到前面
  }
  return result
}
