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
    props: {
      href: "",
      type: {
        type: String,
        default: ""
      },
      underLine: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    created() {
      // console.log(this.type)
    }
  }
</script>

<style scoped lang="scss">
  $name: jing-link;
  .#{$name} {
    font-size: 16px;
    color: #666666;
    text-decoration: underline;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  .#{$name}-noLine {
    text-decoration: none;
  }

  .#{$name}-primary {
    color: $primaryColor;
  }

  .#{$name}-danger {
    color: $dangerColor;
  }

  .#{$name}-disabled{
    opacity: 0.7;
    &:hover{
      cursor: not-allowed;
    }
  }
</style>
