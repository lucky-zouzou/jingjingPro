<template>
    <a :href="disabled ? null : href"
        class="jing-link"
        :class="[underLine ? '' : 'jing-link-noLine' , `jing-link-${type}` ,disabled ? 'jing-link-disabled' : '']"
    >
      <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "jingLink",
      props:{
         href:"",
        type:{
           type: String,
           default:""
        },
        underLine:{
          type: Boolean,
          default:true
        },
        disabled:{
          type: Boolean,
          default:false
        }
      },
      created() {
          // console.log(this.type)
      }
    }
</script>

<style scoped lang="scss">
  $name: jing-link;
.#{$name}{
  font-size: 16px;
  color: #666666;
  text-decoration: underline;
  &:hover{
    color: deeppink;
    cursor: pointer;
  }
}
  .#{$name}-noLine{
    text-decoration: none;
  }
  .#{$name}-primary {
    color: deeppink;
    &:hover{
      color: hotpink;
    }
  }
  .#{$name}-danger {
    color: red;
    &:hover{
      color: #dd4455;
    }
  }
  .#{$name}-disabled:hover{
   cursor: not-allowed;
  }
</style>
