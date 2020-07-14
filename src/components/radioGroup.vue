<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "radioGroup",
    props: {
      value: {}
    },
    created() {
      this.$on('handleChange', value => {
        // console.log(value)
        this.$emit('change', value);
      });
    }
  }
</script>

<style scoped>

</style>
