<template>
  <button class="jing--button" :class="classes" @click="ClickHandler()" :disabled="disabled">
<!--    <Icon></Icon>-->
    <slot></slot>
  </button>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'Button',
    components:{
      Icon
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      loading:{
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: "primary",
        validator(val) {
          if (["default", "primary", "danger","info"].indexOf(val) != -1) {
            return true
          } else {
            return false
          }
        }
      },
      size: {
        type: String,
        default: "medium"
      },

    },
    computed: {
      classes: function () {
        return ["jing--button-" + this.type, "jing--button-" + this.size,]
      }
    },
    created() {
      // if(this.type){
      //
      // }
    },
    methods: {
      ClickHandler() {
        this.$emit('click')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $name: jing--button;
  .#{$name} {
    /*width: 100px;*/
    padding: 7px 20px;
    /*height: 40px;*/
    outline: none;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
    /*动画设置*/
    transition: border 0.8s;
    -webkit-transition: border 0.8s;
    transition: background-color 0.1s;
    -webkit-transition: background-color 0.1s;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }

    @extend .disabled;
  }

  .disabled {
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .#{$name}-primary {
    background: $themColor;
    color: white;
  }

  .#{$name}-danger {
    background: $dangerColor;
    color: white;
  }
  .#{$name}-info {
    background: #ffffff;
    border: 1px solid $themColor;
    color: $themColor;
  }


  @each $size, $paddingLR, $paddingTB,$fontSize in (small, 16px, 6px, 14px),(mini, 12px, 4px, 12px) {
    .#{$name}-#{$size} {
      padding: $paddingTB $paddingLR;
      font-size: $fontSize;
    }
  }
</style>
