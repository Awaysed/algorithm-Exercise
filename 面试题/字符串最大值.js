/**
 * 对每个数字字符串的字符进行重新排列，使其形成最大的数字
 * @param {string} input - 输入的字符串，由空格分隔的数字字符串
 * @return {string} - 重新排列后的字符串，每个数字之间以空格分隔
 */
function rearrangeNumbers(input) {
    // 将输入字符串按照空格分隔成数组
    const numbers = input.split(' ');

    // 对每个数字字符串进行重新排列
    const rearrangedNumbers = numbers.map(num => {
        // 将数字字符串拆分成字符数组，并按降序排序
        const sortedDigits = num.split('').sort((a, b) => b - a);
        // 将排序后的字符数组重新组合成字符串
        return sortedDigits.join('');
    });

    // 将重新排列后的数字字符串数组用空格连接成最终结果
    return rearrangedNumbers.join(' ');
}

// 示例用法
const input = '56 123 9 321';
const result = rearrangeNumbers(input);
console.log(`重新排列后的字符串是: ${result}`); // 输出: 65 321 9 321

function name(str) {
    const strArr = str.split(' ')
    const numArr = strArr.map((item)=>{
        const num = item.split('').sort((a,b)=> b-a)
        return num.join('')
    })
    return numArr.sort((a,b)=>b-a)
}

