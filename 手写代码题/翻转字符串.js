
const str = '123456'

function foo(str) {
    // 数组
    // const strArray  = str.split('').reverse().join('')
    // const strArray  = [...str].reverse().join('')
    // console.log(strArray);


    // 循环
    const strArray = []
    for(i= str.length -1;i > 0; i--){
        strArray.push(str[i])
    }
    console.log(strArray.join(''));
}
foo(str)