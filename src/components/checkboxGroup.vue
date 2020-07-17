<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "checkboxGroup",
    data(){
      return{

      }
    },
    props:{
      value:{}
    },
    created() {
      // this.$on('change', value => {
      //   this.$emit('change', value);
      // });
    },
  }
</script>

<style scoped>

</style>
