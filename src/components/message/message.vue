<template>
  <transition name="message-fade">
    <div class="message"
         :class="[type ? `message-${ type }` : '']"
         :style="positionStyle"
         v-if="show"
    >
      {{text}}
    </div>
  </transition>
</template>

<script>
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };
    export default {
        name: "message",
        data(){
          return{
            text:"",
            duration:2000,
            type:"",
            verticalOffset: 40,
            show:false,
            timer: null,
          }
        },
      computed:{
        positionStyle(){
          return{
            'top': `${ this.verticalOffset }px`
          }
        }
      },
      methods:{

      },
        mounted() {
          this.show=true
          setTimeout(()=>{
            this.show=false
            // this.$destroy(true)
            // this.$el.parentNode.removeChild((this.$el))
          },this.duration)
        }
    }
</script>

<style scoped lang="scss">
  .message-fade-enter-active, .message-fade-leave-active {
    transition: opacity 0.5s;
  }
  .message-fade-enter,.message-fade-leave-to {
    opacity: 0;
  }
  .message-fade-enter-to,.message-fade-leave{
    opacity: 1;
    top:0;
  }
  body{
    position: relative;
  }
  .message{
    color: #666666;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    background: $opacityColor;
    position: absolute;
    left: 50%;
  }
  .message-success{
    background: $successColor;
  }
  .message-info{
    background: $infoColor;
  }
  .message-error{
    background: $errorColor;
  }
  .message-warning{
    background: $warningColor;
  }
</style>
