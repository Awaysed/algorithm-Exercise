const arr = [12, 232, 234, 34, 43, 343, 434, 4, 12, 34, 43, 4, 4];

const bubbleSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const merge = (leftArr, rightArr) => {
    // 将两个数组合并
    const resultArr = [];
    // 循环是关键  一直循环到有个一数组无数据  
    while (leftArr.length && rightArr.length) {
        // 每次push 进去两个数组第一项最小的
      resultArr.push(
        leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift()
      );
    }
    return resultArr.concat(leftArr).concat(rightArr);
  };
  return merge(bubbleSort(arr.slice(0, mid)), bubbleSort(arr.slice(mid)));
};
console.log(bubbleSort(arr));
 // 就是把数组无限的从中间拆分 ，比大小 合并  合并时会比大小 while里面