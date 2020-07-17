<template>
  <div v-if="visible" id="jing-dialog">
    <div class="dialogBox">
      <div class="dialogTitle">{{title}}</div>
      <div class="dialogContent">对话框</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jingDialog",
    data() {
      return {}
    },
    props: {
      visible:false,
      title:"",
      width:""
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
#jing-dialog{
  width:100%;
  height: 100%;
  background-color: rgba(244,201,212,0.4);
  position: fixed;
  top: 0;

  .dialogBox{
    width: 40%;
    height: 350px;
    background: white;
    position: fixed;
    top:30%;
    left: 30%;
    z-index: 100;
    border-radius: 5px;
    .dialogTitle{
      width: 100%;
      height: 45px;
      line-height: 45px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding-left: 10px;
      color: #333333;
      background: #999999;
    }
  }
}
</style>
