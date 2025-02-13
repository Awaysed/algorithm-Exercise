globalThis.name = "Hello, world!";
global.name = "Hello, world!";
const obj = new Promise((resolve) => {
  resolve(222222);
});
obj.name = "hanle";
obj.then((res) => {
  console.log(1111, res);
  console.log(this);
});

class MyPromise {
  constructor(executor) {
    this.state = "pending"; // 状态
    this.value = undefined; // 成功值
    this.onFulfilledCallBacks = []; // 成功的回调
    this.onRejectedCallBacks = []; // 失败回调
    const resolve = (value) => {
      if (this.state === "pending") {
        setTimeout(() => {
          // 这里模拟异步
          // 在手写 Promise 时，我们无法直接操作微任务队列，所以为了模拟 Promise 异步特性，会用 setTimeout(fn, 0)：
          this.state = "fulfilled";
          this.value = value;
          this.onFulfilledCallBacks.forEach((foo) => {
            foo(value);
          });
        });
      }
    };
    const reject = (value) => {
      if (this.state === "pending") {
        setTimeout(() => {
          this.state = "rejected";
          this.value = value;
          this.onRejectedCallBacks.forEach((foo) => {
            foo(value);
          });
        });
      }
    };
    // 执行回调
    try {
      executor(resolve, reject);
    } catch (error) {}
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 这里是递归
      const fulfilledHandler = () => {
        try {
          const result = onFulfilled ? onFulfilled(this.value) : this.value;
          result instanceof MyPromise
            ? result.then(resolve, reject) // 这里其实是递归
            : resolve(result);
        } catch (error) {
          reject(error);
        }
      };
      const rejectedHandler = () => {
        try {
          const result = onRejected ? onRejected(this.reason) : this.reason;
          result instanceof MyPromise
            ? result.then(resolve, reject)
            : reject(result);
        } catch (error) {
          reject(error);
        }
      };
      // 状态
      if (this.state === "fulfilled") {
        setTimeout(fulfilledHandler);
      } else if (this.state === "rejected") {
        setTimeout(rejectedHandler);
      } else {
        this.onFulfilledCallBacks.push(fulfilledHandler);
        this.onRejectedCallBacks.push(onRejected);
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(callback) {
    return this.then(
      () => {
        callback();
        return this.value;
      },
      () => {
        callback();
        return his.value;
      }
    );
  }
}
