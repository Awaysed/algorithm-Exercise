
// 观察者模式

//被观察者
class Subject {
  constructor(){
    this.observerList = []
  }
  addObserver(observer){
    this.observerList.push(observer)
  }
  removeObserver(observer){
    const index = this.observerList.findIndex((item)=>item.name === observer.name)
    this.observerList.splice(index,1)
  }
  notifyObservers(message){
    const observers = this.observerList
    observers.forEach(item => {
      item.notified(message)
    });
  }
}

//观察者
class Observer{
  constructor(name,Subject){
    this.name = name
    if(Subject){
      Subject.addObserver(this)
    }
  }
  notified(message){
    console.log(this.name,message )
  }
}
const subject = new Subject()
const observer = new Observer('观察者1号',subject)
const observer2 = new Observer('观察者2号')
subject.addObserver(observer2)
subject.notifyObservers('起飞了')