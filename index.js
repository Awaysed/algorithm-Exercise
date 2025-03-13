for (var i = 0; i < 3; i++) {
    setTimeout((function (i) {
        console.log(999,i);
        return function () {
            console.log(i);
        };
    })(i), 1000);
}

// 1.数组峰值 1231  1231548
// 

// 2.str k 1 23字符串最大值

// 3.无重复最长字符串

// 4.扑克牌 输出顺子

//5.