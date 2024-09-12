const arr = [12, 232, 234, 34, 43, 343, 434, 4, 12, 34, 43, 4, 4];

const bubbleSort = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          let temp = arr[j + 1];  // j + 1(写错j)
          if (arr[j] > arr[j + 1]) {
            arr[j + 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr
}
console.log(bubbleSort(arr));

