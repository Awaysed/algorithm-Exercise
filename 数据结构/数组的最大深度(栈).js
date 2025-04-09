
function maxDepth(arr) {
    if(!Array.isArray(arr)) return 0 
    const stack = [{array:arr,depth:1}] // 入栈
    let maxDeptNum = 0
    while (stack.length  > 0) {
        const {array,depth} = stack.pop() // 出栈
        maxDeptNum = Math.max(depth,maxDeptNum) 
        for (const item of array) {
            if(Array.isArray(item)){
                stack.push({
                    array:item,
                    depth:depth + 1
                })
            }
        }
    }
    return maxDeptNum
}
console.log(maxDepth([1, [2], [3, [4, [5]]]]))
