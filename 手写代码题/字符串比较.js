// 23-234-43243-23432
// 23-234-4435-4545-45
function compare(str1, str2) {
  const iterator1 = walk(str1);
  const iterator2 = walk(str2);
  while (1) {
    const n1 = iterator1.next()
    const n2 = iterator2.next()
    console.log(n1,n2);
    if (n1.done && n2.done) {
      return 0;
    } else if (n1.done) {
      return 1;
    } else if (n2.done) {
      return -1;
    } else if (n1.value > n2.value) {
      return -1;
    } else if (n1.value < n2.value) {
      return 1;
    }
  }
}

function* walk(str) {
  let stack = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "-") {
      if (stack) {
        yield Number(stack);
        stack = "";
      }
    } else {
      stack += element;
    }
  }
  if (stack) {
    yield Number(stack);
  }
}
// const iterator = walk("23-234-4435-4545-45");
console.log(compare('12-23','12-23'));
console.log(compare('12-23','12-24'));