// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 输入：s = "()"
// 输出：true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const strItem = s[i];
    if (strItem === "(" || strItem === "{" || strItem === "[") {
      // 入栈
      stack.push(strItem);
    } else {
      const end = stack[stack.length - 1];
      if (
        (end === "(" && strItem === ")") ||
        (end === "{" && strItem === "}") ||
        (end === "[" && strItem === "]")
      ) {
        // 出栈
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
};
