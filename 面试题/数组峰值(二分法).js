const arr = [4,5,4,4,5,8,7,8,3]
function foo(nums) {
    let left = 0
    let right = nums.length - 1
    while (right > left) {
        const mid = Math.floor((right + left)/2) // 取中间值
        if(nums[mid] < nums[mid+1]){ //大于就往右边走
            left = mid +1
        }else{
            right = mid // 小于就往左边走
        }
    }
    return left
}
console.log(foo([2,4,1,2,7,8,4]));
// 就用二分法判断 向上总能找到最好的
