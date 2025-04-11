function heapSort(arr) {
  const n = arr.length;

  // 1. 构建最大堆
  // 从最后一个非叶子节点开始，依次向上调整堆结构
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 2. 一个个从堆中取出元素
  // 每次取出堆顶元素，放到数组末尾，然后重新调整堆结构
  for (let i = n - 1; i > 0; i--) {
    // 把堆顶元素放到数组末尾
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 重新调整堆结构
    heapify(arr, i, 0);
  }

  return arr;
}

// 堆化函数：让以 i 为根的子树变成最大堆
// 函数heapify用于将数组arr中的元素按照堆排序的规则进行调整
function heapify(arr, heapSize, i) {
  // largest用于记录当前最大元素的索引
  let largest = i;
  // left用于记录当前元素的左子节点的索引
  let left = 2 * i + 1;
  // right用于记录当前元素的右子节点的索引
  let right = 2 * i + 2;

  // 如果左子节点的索引小于堆的大小，并且左子节点的值大于当前最大元素的值，则更新最大元素的索引
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点的索引小于堆的大小，并且右子节点的值大于当前最大元素的值，则更新最大元素的索引
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大元素的索引不是当前元素的索引，则交换当前元素和最大元素的值，并递归调用heapify函数
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, heapSize, largest);
  }
}
