function myPromiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return  reject(new TypeError("必须为一个数组"));
    }
    if (promiseArray.length === 0) {
      resolve(promiseArray);
    }
    let result = [];
    let count = 0;
    promiseArray.forEach((itemPromise, index) => {
      Promise.resolve(itemPromise)
        .then((val) => {
          result[index] = val;
          count++;
          if (count === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
// 测试
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 100));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error"), 50)
);

// 所有 Promise 都成功的情况
myPromiseAll([promise1, promise2])
  .then((result) => console.log("All resolved:", result)) // [10, 20]
  .catch((error) => console.error("Rejected:", error));
