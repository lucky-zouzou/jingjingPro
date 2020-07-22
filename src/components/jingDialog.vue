<template>
  <transition
    name="dialog-fade"
  >
    <div v-if="visible" id="jing-dialog" @click.self="clickOutArea">
      <div class="dialogBox" :style="style">
        <div class="dialogTitle flexRowBetweenColCenter">
          <span>{{title}}</span>
          <span class="dialogTitle-icon" @click="closeDialog">X</span>
        </div>
        <div class="dialogContent"><slot></slot></div>
        <div class="dialogFooter" v-if="$slots.footer1">
          <slot name="footer1"></slot>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "jingDialog",
    data() {
      return {}
    },
    props: {
      visible:false,
      title:String,
      width:String,
      top:{
        type:String,
        default:"15vh"
      },
      canCloseOut:Boolean
    },
    computed:{
      style(){
        let style={}
        style.marginTop=this.top
        if(this.width){
          style.width=this.width
          // style.background="yellow"
        }
        return style
      }
    },
    created(){
    },
    methods:{
      closeDialog(){
        this.$emit('close',false)
      },
      clickOutArea(){
        if(this.canCloseOut){
          this.closeDialog()
        }
      }
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
  .dialog-fade-enter-active, .dialog-fade-leave-active {
    transition: opacity 0.4s;
  }
  .dialog-fade-enter,.dialog-fade-leave-to {
    opacity: 0;
  }
  .dialog-fade-enter-to,.dialog-fade-leave{
    opacity: 1;
  }
#jing-dialog{
  width:100%;
  height: 100%;
  background-color: rgba(244,201,212,0.2);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  .dialogBox{
    /*height: 350px;*/
    background: white;
    position: relative;
    margin: 0 auto 20px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    .dialogTitle{
      width: 100%;
      height: 45px;
      line-height: 45px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding: 0 10px;
      color: #333333;
      background: $themColor;
      .dialogTitle-icon{
        color: white;
        font-size: 18px;
        &:hover{
          cursor: pointer;
        }
      }
    }
    .dialogContent{
      padding:30px 20px;
    }
    .dialogFooter{
      text-align: right;
      padding: 20px;
    }
  }
}
</style>
