<template>
    <div>
      <Button @click="test" type="danger" size="small">按钮</Button>
      <Button @click="test" size="mini" disabled="">mini</Button>
      <div class="mg-top"></div>
<!--      <div class=" text1">从不觉得你讨厌</div>-->
<!--      <div class=" text2">你的一切都喜欢</div>-->

<!--      <div class="miss1">想你时你在天边</div>-->
<!--      <div class="miss2">想你时你在眼前</div>-->
      <switch-box
      active-color="deeppink"
      inactive-color="#999"
      v-model="switchValue"
      @change="switchChange"
      size="medium"
      >
      </switch-box>

      <div class="mg-top"></div>

<!--      <sync :show.sync="syncValue"></sync>-->
<!--      <button @click="changeSync">点我</button>-->

      <jing-link href="https://www.baidu.com" target="_blank">默认链接</jing-link>
      <jing-link  :underLine="false" type="primary">普通链接</jing-link>
      <jing-link  :underLine="false" type="danger">危险链接</jing-link>
      <jing-link  :disabled="true" type="danger">禁用链接</jing-link>

      <div class="mg-top"></div>

    </div>
</template>

<script>
    import Button from "../components/Button";
    import SwitchBox from "../components/SwitchBox";
    import sync from "../components/sync";
    import jingLink from "../components/jingLink";

    export default {
        name: "home",
        components:{Button,SwitchBox,sync,jingLink},
        data(){
          return{
            switchValue:false,
            syncValue:true
          }
        },
      methods:{
          test(){

          },
        switchChange(v){
          console.log(v)
        },
        changeSync(){
          this.syncValue=!this.syncValue
        }
      },
      watch:{
          switchValue(n,o){

          }
      }
    }
</script>

<style scoped lang="scss">
  .mg-top{
    margin-top: 20px;
  }
.text{
  margin-top: 10px;
  font-size: 14px;
}
  .text1{
    @extend .text;
    color: hotpink;
  }
  .text2{
    @extend .text;
    color: #42b983;
    cursor: copy;
  }
  @each $num,$color,$cursor in (1,red,default),(2,blue,pointer){
    .miss#{$num}{
      color: $color;
      cursor: $cursor;
      padding-top: 10px;
    }
  }

</style>
