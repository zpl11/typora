import myRow from './elRow'
myRow.obj.setName('哈哈')
console.log(myRow.obj.getName());
(()=>{
    console.log("立即执行")
})()