// 第一天工作k，第二天工作k+1，达到2k后每天工作2k，输入k和工作天数，输出工作总量
function calculateTotalWork(k, day) {
  let totalWord = 0;
  let dailyWork = k;
  for (let i = 0; i < day; i++) {
    if (totalWord < 2 * k) {
      totalWord += ++dailyWork;
    } else {
      totalWord += 2 * k;
    }
  }
  console.log(totalWord);
}

// 比较简单 就是循环 判断累加就行了
