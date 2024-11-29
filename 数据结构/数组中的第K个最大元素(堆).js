// https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const arr = new minHeap() // 用了之前最小堆的知识
    // 
    nums.forEach((v)=>{
        arr.insert(v)
        if(arr.size() > k){
            arr.pop()
        }
        // 长度大于k就把顶部最小的删除  最后取顶部
    })
    return arr.peak()
};

class minHeap {
  constructor() {
    this.heap = [];
  }
  // 上移
  insert(value) {
    this.heap.push(value);
    this.up(this.heap.length - 1);
  }
  // 删除(第一项 树顶)
  pop() {
    this.heap[0] = this.heap.pop();
    this.down(0);
  }
  //返回最顶部
  peak() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  // 下后移
  down(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.down(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.down(rightIndex);
    }
  }
  //获取左侧
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  //获取右侧
  getRightIndex(index) {
    return index * 2 + 2;
  }
  // 找父节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  //
  up(len) {
    let parentIndex = this.getParentIndex(len);
    if (this.heap[parentIndex] > this.heap[len]) {
      this.swap(parentIndex, len);
      this.up(parentIndex);
    }
  }
  // 子夫节点互换位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
}
