const arr = [2,3,4,5,6,7,,8,9]
const targt = 6
const search  = (arr,targt)=>{
    let start  = 0
    let end = arr.length -1
    while (start <= end) {
        const midIndex = Math.floor((start+end)/2)
        const mid = arr[midIndex]
        if(targt === mid) return midIndex
        if(targt < mid){
            end = mid
        }
        if(targt > mid){
            start = mid
        }
    }
}
console.log(search(arr,targt));
// 首先数组必须是有序的 查找中间值 然后改变数组长度 取左或者取右