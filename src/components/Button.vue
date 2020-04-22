<template>
  <button class="btn" @click="ClickHandler()" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    type:{
      type: String,
      default: "primary"
    },
    size:{
      type: String,
      default: "medium"
    },

  },
  created(){
    console.log(this.disabled)
  },
  methods:{
    ClickHandler(){
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn{
  color: #42b983;
  .m{
    color: hotpink;
  }
  .primary:disabled{
    background-color: rgb(192, 215, 250);
    color: #3a8ee6;
    border: none;
    cursor: not-allowed;
  }
}
</style>
