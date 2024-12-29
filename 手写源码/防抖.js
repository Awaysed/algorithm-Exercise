function debounce(func, wait = 300, immediate = false) {
    let timeout; // 保存定时器

    return function (...args) {
        const context = this; // 保存当前的上下文

        // 清除上一次的定时器
        if (timeout) clearTimeout(timeout);

        if (immediate) {
            // 如果设置为立即执行
            const callNow = !timeout; // 判断是否是首次触发
            timeout = setTimeout(() => {
                timeout = null; // 定时器清除后，将 timeout 置为 null
            }, wait);
            if (callNow) func.apply(context, args); // 如果是首次调用，立即执行函数
        } else {
            // 延迟执行
            timeout = setTimeout(() => {
                func.apply(context, args); // 在等待时间后执行函数
            }, wait);
        }
    };
}