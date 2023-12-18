const arr = [12, 232, 234, 34, 43, 343, 434, 4, 12, 34, 43, 4, 4];
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minNumIndex = i;
    // 找到数组里最小值的下标index
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (arr[minNumIndex] > arr[j]) {
        minNumIndex = j;
      }
    }
     // 如果最小值不是i项，将位置互换，把最小值放到前面
    if (minNumIndex !== i) {
      const temp = arr[minNumIndex];
      arr[minNumIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr
};
console.log(bubbleSort(arr));

/* 算法思路：每次循环取到最小的值，然后将该值比较如果是当前最小则将该值提取到最前面 */

