<template>
  <label class="jing-checkBox" :class="[disabled ? 'jing-checkBox-disabled': '',value ? 'jing-checkBox-isChecked' : '']">
    <input type="checkbox" :checked="value" @click="handleClick">
    <span class="jing-checkBox-input" :class="[value ? 'jing-checkBox-checked' :'']"></span>
    <span class="jing-checkBox-text">
     <slot></slot>
   </span>
  </label>
</template>

<script>
  export default {
    name: "checkBox",
    props:{
      value:{},
      disabled:{
        type:Boolean,
      }
    },
    created() {
      console.log(this.value)
    },
    computed:{
      isGroup(){

      }
    },
    methods:{
      handleClick(){
        if(!this.disabled){
          this.$emit('input',!this.value)

        }
      }
    }
  }
</script>

<style scoped lang="scss">
$name:jing-checkBox;
  .#{$name}{
    margin-right: 5px;
    input{
      display: none;
    }
    .#{$name}-input{
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid #666666;
      border-radius: 2px;
      position: relative;
    }
    .#{$name}-checked{
      border: 1px solid $themColor;
      &:before{
        content:"";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 1px;
        background: $themColor;
        position: absolute;
        top: 2px;
        left: 2px;
      }
    }
    .#{name}-text{
      font-size: 16px;
    }

  }
.#{$name}-disabled {
  opacity: 0.7;
  &:hover{
    cursor: not-allowed;
  }
}
.#{$name}-isChecked{
  color: $themColor;
}
</style>
