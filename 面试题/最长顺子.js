
const myCard = '3,4,4,6,J,Q,K,A'
const oppCard = '2,3,4,4,6,J,Q,K,A'
function foo(myCard,oppCard) {
    // 字母隐射
    const letterMap = Map([
        [J,11],
        [Q,12],
        [K,13],
        [A,14],
    ])
    const upLetterMap = Map([
        [11,J],
        [12,Q],
        [13,K],
        [14,A],
    ])
    let remainCard = new Map() 
    for (let i = 3; i <=14; i++) {
        remainCard.set(i,4)
    } // 初始化牌
    // 去除自己手中的牌和对手手中的牌
    function trank(card) {
        if(!card) return
        const cardArr = card.split('-')
        cardArr.forEach(val => {
            const num = letterMap.get(val) || parseInt(val)
            if(num>=3 || num <= 14){
                remainCard.set(num,Math.max(0,remainCard.get(num) - 1))
            }
        });
    }
    trank(myCard)
    trank(oppCard)
    // 将剩余的牌保存起来
    const avaible = []
    for (let i = 3; i < 15; i++) {
        if(remainCard.get(i)>0){
            avaible.push(i)
        }
    }
    avaible.sort((a,b)=>a-b) // 升序

    let maxL = 0 
    let maxEnd=-1
    let curL= 0
    avaible.forEach((val,index)=>{
        // 升序更新最大长度
        if(val === avaible[index-1] +1){
            curL++
        }else{
            // 重置
            curL = 1
        }
        // 最大长度大 或者顺子大更新
        if(curL > maxL || (curL == maxL && val > maxEndIndex)){
            maxL = curL
            maxEndIndex = avaible[val]
        }
    })
    // 求出返回值
    const straight = []
    if(maxL >=5){
        const start = maxEnd - maxL +1
        for (let i = start; i <= maxEnd ; i++) {
            straight.push(upLetterMap.get(i) || i)
        }
        return straight.join('-') // 返回字符串
    }else{
        return 'no'
    }
}

// 123456789
