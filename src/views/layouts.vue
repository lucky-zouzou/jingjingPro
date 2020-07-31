<template>
  <div>
    <div class="outBox">
      <div class="box1">111</div>
      <div class="box2">222</div>
      <div class="box3">333</div>
      <div class="box4">444</div>
      <div class="box5">555</div>
    </div>
    <div class="outBox">
      <div class="box21">111</div>
      <div class="box22">222</div>
      <div class="box23">333</div>
      <div class="box24">444</div>
      <div class="box25">555</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "layouts"
    }
</script>

<style scoped lang="scss">
.outBox{
  width: 500px;
  height: 400px;
  border: 1px solid #666666;
  display: flex;
  flex-wrap: wrap;
  /*justify-content: center;*/
  /*align-content:center;*/
  /*align-items: flex-end;*/
  /*place-content: center;*/
  /*place-items: center;*/
  .box1{
    width: 120px;
    height: 100px;
    background:$successColor;
    /*margin: auto;*/ //父元素设flex 子元素设此元素可以居中
    /*margin:0 auto;*/
  }
  .box2{
    width: 200px;
    height: 100px;
    background: $warningColor;
  }
  .box3{
    width: 130px;
    height: 130px;
    background:$lightColor;
  }
  .box4{
    width: 120px;
    height: 100px;
    background: $infoColor;
  }
  .box5{
    width: 120px;
    height: 100px;
    background: $primaryColor;
  }
  .box21{
    width: 120px;
    background:$successColor;
  }
  .box22{
    width: 200px;
    background: $warningColor;
  }
  .box23{
    width: 130px;
    background:$lightColor;
  }
  .box24{
    width: 120px;
    background: $infoColor;
  }
  .box25{
    width: 120px;
    background: $primaryColor;
  }
}
</style>
