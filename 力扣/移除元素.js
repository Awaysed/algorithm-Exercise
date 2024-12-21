var removeElement = function(nums, val) {
    let flat = 0 //记录有效指针的位置
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] !== val){
        nums[flat] = nums[i]
        flat++
      }
    }
    return flat
    
};
// 使用双指针