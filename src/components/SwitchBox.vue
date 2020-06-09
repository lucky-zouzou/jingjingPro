<template>
  <div class="jing-switch" @click="clickSwitch" ref="switchBox" :class="switchBoxClasses">
    <div class="jing-switch-btn" :class="[value ? 'jing-switch-right' :'jing-switch-left']"></div>
  </div>
</template>

<script>
  import emitter from '../mixins/emitter';

  export default {
    name: "SwitchBox",
    mixins:[emitter],
    data() {
      return {
        switchBoxClasses:[],
        isOn:"",
      }
    },

    props: {
      'active-color': {
        type: String,
        default: "blue"
      },
      'inactive-color': {
        type: String,
        default: "#999999"
      },
      value: {},//内置属性 接收v-model的值
      size:{
        type: String,
        default: "medium"
      }
    },
    created() {
      this.switchBoxClasses=[]
      if(this.size=='small'){
        this.switchBoxClasses.push('jing-switch-small')
      }else if(this.size=='big'){
        this.switchBoxClasses.push('jing-switch-big')
      }
    },
    mounted() {
      this.setBgColor()
    },
    methods: {
      clickSwitch() {
        this.isOn=!this.value //用于设置组件内部的样式
        this.$emit('input',!this.value) //抛出此方法即可改变v-model的值
        this.$emit('change',!this.value)
        this.setBgColor()
      },
      setBgColor() {
        let bgColor = this.isOn ? this.activeColor : this.inactiveColor
        this.$refs.switchBox.style.background = bgColor
      }
    }
  }
</script>

<style scoped lang="scss">
  $name: jing-switch;
  .#{$name} {
    width: 40px;
    height: 20px;
    background: #999999;
    border-radius: 10px;
    position: relative;
    &:hover {
      cursor: pointer;
    }
    .#{$name}-btn {
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #ffffff;
      position: absolute;
      top: 1px;
    }

    .#{$name}-left {
      left: 1px;
      transition: all linear 0.3s ;
    }

    .#{$name}-right {
      left: 21px;
      transition: all linear 0.3s ;
    }

    .#{$name}-off {
      background: #999999;
    }

  }

  .#{$name}-big{
    width: 50px;
    height: 25px;
    border-radius: 25px;
    .#{$name}-btn {
      width: 23px;
      height: 23px;
    }
    .#{$name}-right {
      left: 26px;
    }
  }
  .#{$name}-small{
    width: 30px;
    height: 16px;
    border-radius: 15px;
    .#{$name}-btn {
      width: 14px;
      height: 14px;
    }
    .#{$name}-right {
      left: 15px;
    }
  }

</style>
