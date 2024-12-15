// https://leetcode.cn/problems/merge-sorted-array/solutions/666608/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/?envType=study-plan-v2&envId=top-interview-150
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // 第一个指针
  let p2 = n - 1; //第一个指针
  let tail = nums1.length - 1; // 数组1的总长度
  while (p1 >= 0 || p2 >= 0) { // 有真实值就进
    let cur;
    if (p1 === -1) {
      cur = nums2[p2--]; // p1没了直接p2的值
    } else if (p2 === -1) {
      cur = nums1[p1--];
    }else if(nums1[p1] > nums2[p2]){
        cur = nums1[p1--]; // 比大小 谁大进谁的
    }else{
        cur = nums2[p2--];
    }
    nums1[tail--] = cur // nums1的尾部值赋值
  }
  return nums1
};
console.log();