

const arr = [1,2,3,4]
Array.prototype._map = function(fn){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(fn(this[i],i))
    }
    return newArray
}
console.log(arr._map((item)=> item + 1));