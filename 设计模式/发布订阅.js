
class EventBus{
    constructor(){
        this.eventList = {}
    }
    // 订阅事件
    subscriber(type,callBack){
        if(!this.eventList[type]){
            this.eventList[type] = []
        }
        this.eventList[type].push(callBack)
    }
    // 取消订阅
    unsubscriber(type,callBack){
        if(!this.eventList[type]) return
        this.eventList[type] = this.eventList[type].filter((foo,i)=>{
            return foo !== callBack
        })
    }
    publish(type,data){
        if(!this.eventList[type]){
            console.log(`无${type}订阅事件`);
        }
        this.eventList[type].forEach((foo,index) => {
            foo(data)
        });
    }
}
const eventObj = new EventBus()
const subscriber1 = (params)=>{
    console.log(params+'事件1');
}

eventObj.add('tip',subscriber1)
eventObj.add('tip',(params)=>{
    console.log(params+'事件2');
})
eventObj.publish('tip','触发')
// 对象与对象之间没有关系 只存在事件的关系 发布事件一旦触发 就发布所右订阅事件
