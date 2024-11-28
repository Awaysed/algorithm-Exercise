class minHeap {
  constructor() {
    this.heap = [];
  }
  // 上移
  insert(value) {
    this.heap.push(value);
    this.up(this.heap.length - 1);
  }
  // 删除
  pop() {
    this.heap[0] = this.heap.pop();
    this.down(0);
  }
  peak(){
    return this.heap[0]
  }
  size(){
    return this.heap.length
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
const arr = new minHeap();

arr.insert(5);
arr.insert(3);
arr.insert(4);
arr.insert(1);
console.log(arr);
arr.pop()
console.log(arr);
