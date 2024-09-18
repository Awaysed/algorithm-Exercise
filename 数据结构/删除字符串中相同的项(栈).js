// 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在 s 上反复执行重复项删除操作，直到无法继续删除。
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
// 输入："abbaca"
// 输出："ca"
var removeDuplicates = function (s) {
  let stack = [];
  for (const v of s) {
    const prev = stack.pop();
    if (prev != v) {
      stack.push(prev);
      stack.push(v);
    }
  }
  return stack.join('')
};
