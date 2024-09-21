https://leetcode.cn/problems/simplify-path/description/
//  力扣↑
//
var simplifyPath = function(path) {
    const stack = []
    let str = ''
    const arr = path.split('/')
    arr.forEach(val => {
        if(val && val === '..'){
            stack.pop()
        }else if(val && val !== '.'){
            stack.push(val)
        }
    });
    str = stack.length > 0 ? '/' + stack.join('/'):'/'
    return str
};