<template>
  <transition name="loading-fade">
    <div v-show="visible"
         class="loading flexRowCenterColCenter"
    >
      <p v-if="text">{{text}}</p>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "loading",
    data(){
      return{
        // text:"小红",
        visible:false,
        text: ""
      }
    },
    created() {
    }
    //局部指令
    // directives:{
    //   loading:{
    //     bind:function (el,binding,vnode) {
    //       console.log(el,binding,vnode)
    //       this.visible=true
    //       el.innerHTML=binding.value
    //     },
    //     update:function (el,binding,vnode,oldValue) {
    //       console.log(el,binding,vnode,oldValue)
    //       this.visible=true
    //       el.innerHTML=binding.value
    //     }
    //   }
    // },
    // directives:{
    //   test(el,binding){
    //     el.innerHTML=binding.value
    //   }
    // }
  }
</script>

<style scoped lang="scss">
.loading{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $lightColor;
  text-align: center;
  p{
    color: #666666;
  }
}
</style>
