<template>
    <div>
      <Button
      @click="test"
      disabled
      >
         按钮
      </Button>
      <div class="flexColStartRowStart">
        hahaha
      </div>
    </div>
</template>

<script>
    import Button from "../components/Button";

    export default {
        name: "home",
        components:{Button},
        data(){
          return{

          }
        },
      methods:{
          test(){
            alert("点击按钮")
          }
      }
    }
</script>

<style scoped lang="scss">

</style>
