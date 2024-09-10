globalThis.name = 'Hello, world!';
global.name = 'Hello, world!';
const obj  = new Promise((resolve)=>{
    resolve(222222)
})
obj.name = 'hanle'
obj.then((res)=>{
    console.log(1111,res);
    console.log(this);
})
