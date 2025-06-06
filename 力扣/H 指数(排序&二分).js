// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。
// 计算并返回该研究者的 h 指数。
// 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，
// 一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。

// 排序法
const hIndex = (citations) => {
  citations.sort((a, b) => a - b);
  let h = 0;
  let i = citations.length - 1;
  while (i >= 0 && citations[i] > h) {
    h++;
    i--;
  }
  return h;
};
const arr = [3, 0, 6, 1, 5];

// 二分法
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex2 = function (citations) {
  let h = 0;
  let left = 0;
  let right = citations.length;
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2) ;
    let cont = 0;
    for (const v of citations) {
      if (v >= mid) {
        cont++;
      }
    }
    if (cont >= mid) {
      left = mid;
      h = mid;
    } else {
      right = mid -1;
    }
  }
  return h;
};
console.log(hIndex2(arr));