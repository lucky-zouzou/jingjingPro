<template>
  <label class="jing-checkBox" :class="[isDisabled ? 'jing-checkBox-disabled': '',isChecked ? 'jing-checkBox-isChecked' : '']">
    <input type="checkbox" :checked="isChecked" @click="handleClick" v-model="model"  :disabled="isDisabled">
    <span class="jing-checkBox-input" :class="[isChecked ? 'jing-checkBox-checked' :'']"></span>
    <span class="jing-checkBox-text">
     <slot></slot>
   </span>
  </label>
</template>

<script>
  import emitter from '../mixins/emitter'

  export default {
    name: "checkBox",
    mixins: [emitter],
    data(){
      return{
        selfModel:false,
      }
    },
    props:{
      value:{},
      label:{},
      checked: Boolean,
      disabled:{
        type:Boolean,
      }
    },
    created() {
      this.checked && this.model && this.addToStore()
      // console.log(this.model)
    },
    computed:{
      isGroup(){
        let parent = this.$parent;
        while (parent) {
          if (parent.$options._componentTag !== 'checkbox-group') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },
      model:{
        get(){
          return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('checkbox-group', 'input', [val]);
          } else {
            this.$emit('input', val);
            this.selfModel = val;
          }
        }
      },
      isDisabled(){
        return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
      },
      isChecked() {

        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model;
        }
      },
      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },
    },

    methods:{
      handleClick(val){
        if(!this.isDisabled){
          this.$emit('input',!this.value)
          this.$nextTick(() => {
            console.log(this.model)

            if (this.isGroup) {
              this.dispatch('checkboxGroup', 'change', [this._checkboxGroup.value]);
            }
          });
        }
      },
      addToStore(){
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model =  true;
        }
      }
    },
    watch: {
      value(value) {

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
