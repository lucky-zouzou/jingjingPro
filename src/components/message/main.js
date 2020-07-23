import Vue from "vue"
import message from './message.vue'


let messageConstructor = Vue.extend(message)
let instance

const Message=function (options={}) {
  instance=new messageConstructor({data:options});
  instance.vm=instance.$mount()
  document.body.appendChild(instance.$el);

}

let typeArr=['success','info','warning','error']
typeArr.forEach((type)=>{
  Message[type]= options =>{
    options.type=type
    return Message(options)
  }
})

export default Message
