const quickSort = (arr) => {
  const len = arr.length;
  if (len <= 0) return arr;
  const mid = Math.floor(len / 2); //找中间的值
  let pivot = arr.splice(mid, 1);
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]); // 大于将放到右边
    } else {
      leftArr.push(arr[i]); //小于放到左边
    }
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr)); //递归它
};
console.log(quickSort([34, 4, 45, 545, 5, 5, 63, 45, 5, 5]));
