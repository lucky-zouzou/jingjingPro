<template>
  <label class="jing-radio"
         :class="[
         label===model ? 'jing-radio-isChecked' : '',
         {'jing-radio-disabled':disabled}
         ]"
  >

    <input type="radio" :value="label" :checked="label===model" @click="handelClick" v-model="model" :disabled="disabled"/>

    <span class="jing-radio-input"
          :class="[label===model ? 'jing-radio-inputChecked' : '']"
    ></span>
    <span class="jing-radio-text">
      <slot></slot>
    </span>

    <!--    <label >-->
    <!--      <input  type="radio" name="sex" value="1" checked>男-->
    <!--      <span>性别噢</span>-->
    <!--    </label>    -->

  </label>
</template>

<script>
  import emitter from '../mixins/emitter'

  export default {
    name: "jing-radio",
    data() {
      return {
      }
    },
    mixins: [emitter],
    props: {
      label: "",
      value: "",//父组件v-model的值
      // color:""
      disabled:{
        type:Boolean,
        default:false
      }
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options._componentTag !== 'radio-group') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('radio-group', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        }
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      handelClick() {
        // this.$emit('input', this.model)
        if(this.disabled){
          return
        }
        this.$nextTick(()=>{
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('radio-group', 'handleChange', this.model);
        })
      }
    },

  }
</script>

<style scoped lang="scss">
  $name: jing-radio;
  .#{$name} {
    margin-right: 10px;

    input {
      display: none;
    }

    .#{$name}-input {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #999999;
      background: white;
      position: relative;
      vertical-align: middle;
    }

    .#{$name}-inputChecked {
      border: 1px solid $themColor;

      &:before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $themColor;
        position: absolute;
        top: 2px;
        left: 2px;
      }
    }

    .#{$name}-text {
      vertical-align: middle;
      font-size: 16px;
    }
  }

  .#{$name}-isChecked {
    color: $themColor;
  }
  .#{$name}-disabled {
    opacity: 0.7;
    &:hover{
      cursor: not-allowed;
    }
  }

</style>
