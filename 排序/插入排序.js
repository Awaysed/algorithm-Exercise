const arr = [12, 232, 234, 34, 43, 343, 434, 4, 12, 34, 43, 4, 4];

const bubbleSort = (arr) => {
  let len = arr.length;
  let parindex;
  let current;
  for (let i = 1; i < len; i++) {
    parindex = i - 1;
    current = arr[i]; // 保存当前项
    // 如果当前项小于前面一项 则将前一项赋值给当前项
    while (parindex >= 0 && arr[parindex] > current) {
      arr[parindex + 1] = arr[parindex];
      parindex--;
    }
    // 这个位置放下，有可能是它自己
    arr[parindex + 1] = current;
  }
  return arr;
};
console.log(bubbleSort(arr));
// 相当于拿起一项 ，与前面依次对比，小于就将前一项赋值给当前项 到最后相邻两项相等 把current赋值回去
