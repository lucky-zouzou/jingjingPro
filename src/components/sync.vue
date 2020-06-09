<template>
  <div v-if="show" class="sync">
    <p>显示{{show}}</p>
    <button @click="close">子组件的隐藏</button>
  </div>
</template>

<script>
  export default {
    name: "sync",
    props: {
      show: "",
    },
    methods: {
      close() {
        this.$emit('update:show',false) //update:myPropName 此方法也可以由子组件更改父组件的值
      }
    }
  }
</script>

<style scoped lang="scss">
  .sync {
    font-size: 18px;
    color: deeppink;
  }
</style>
