<template>
  <div>
    <Button @click="test" type="primary" size="small">按钮</Button>
    <Button @click="test" size="mini" disabled="">mini</Button>
    <div class="line"></div>

    <!--      <div class=" text1">从不觉得你讨厌</div>-->
    <!--      <div class=" text2">你的一切都喜欢</div>-->

    <!--      <div class="miss1">想你时你在天边</div>-->
    <!--      <div class="miss2">想你时你在眼前</div>-->
    <switch-box
      active-color="#9575CD"
      inactive-color="#999"
      v-model="switchValue"
      @change="switchChange"
      size="medium"
    >
    </switch-box>
    <div class="line"></div>

    <!--      <sync :show.sync="syncValue"></sync>-->
    <!--      <button @click="changeSync">点我</button>-->

    <jing-link href="https://www.baidu.com" target="_blank">默认链接</jing-link>
    <jing-link :underLine="false" type="primary">普通链接</jing-link>
    <jing-link :underLine="false" type="danger">危险链接</jing-link>
    <jing-link :disabled="true" type="danger">禁用链接</jing-link>

    <div class="line"></div>

    <jing-radio v-model="radio1" label="banana" >香蕉 <span>是黄的</span></jing-radio>
    <jing-radio v-model="radio1" label="orange">橙子 <span>酸溜溜</span></jing-radio>
    <jing-radio v-model="radio1" label="apple" disabled>苹果 <span>脆脆的</span></jing-radio>
    <div class="mgt-15">选择项为: {{radio1}}</div>

    <div class="line"></div>
    <div class="title">radio-group:</div>
    <radio-group v-model="radio2">
      <jing-radio label="banana">香蕉</jing-radio>
      <jing-radio label="orange">橙子</jing-radio>
      <jing-radio label="xigua">大西瓜</jing-radio>
      <jing-radio label="putao" disabled>葡萄柚子</jing-radio>
    </radio-group>
    <div class="mgt-15">选择项为: {{radio2}}</div>

    <div class="line"></div>

    <check-box v-model="checked1">中国</check-box>
    <check-box v-model="checked2" disabled>巴基斯坦</check-box>
    <check-box v-model="checked3">印度尼西亚</check-box>

    <div class="line"></div>
    <checkbox-group v-model="checkList">
      <check-box label="aaa" disabled>A</check-box>
      <check-box label="bbb" checked>B</check-box>
      <check-box label="ccc">C</check-box>
    </checkbox-group>

<!--    <vue-qr :logoSrc="src2" :text="qrText" :size="200" ></vue-qr>-->
<!--    <vue-qr text="Hello world1111111111" :callback="test1" qid="testid" ></vue-qr>-->
    <div class="line"></div>
    <Button @click="openDialog" size="small">打开弹窗</Button>
    <jing-dialog
      :visible="dialogShow"
      title="提示1"
      width="35%"
      top="25vh"
      @close="dialogShow=false"
    >
      <div>一段信息</div>
      <span slot="footer1" class="dialog-footer">
        <Button  type="info" size="small" @click="dialogShow=false">取消</Button>
        <Button  size="small" @click="dialogShow=false">确认</Button>
      </span>
    </jing-dialog>

  </div>
</template>

<script>
  import Button from "../components/Button";
  import SwitchBox from "../components/SwitchBox";
  import sync from "../components/sync";
  import jingLink from "../components/jingLink";
  import jingRadio from "../components/jingRadio";
  import checkBox from "../components/checkBox";
  import radioGroup from "../components/radioGroup";
  import jingDialog from "../components/jingDialog";
  import checkboxGroup from "../components/checkboxGroup";
  import VueQr from 'vue-qr'

  export default {
    name: "home",
    components: {Button, SwitchBox, sync, jingLink, jingRadio, checkBox, radioGroup,checkboxGroup,VueQr,jingDialog},
    data() {
      return {
        switchValue: true,
        syncValue: true,
        radio1: 'orange',
        radio2: 'orange',
        checked1: true,
        checked2: false,
        checked3: false,
        checkList:['aaa'],
        src2:"http://image.huahuibk.com/uploads/20190228/22/1551362450-DJqKpiaRAz.jpg",
        qrText:"https://mp.weixin.qq.com/cgi-bin/wx",
        dialogShow:false,
      }
    },
    methods: {
      test1(dataUrl,id){
        console.log(dataUrl)
        // this.$router.push(
        //   {
        //     path: '/canvas',
        //     query: {
        //       type: "qr",
        //     }
        //   }
        // )
      },
      test() {

      },
      switchChange(v) {
        // console.log(v)
      },
      changeSync() {
        this.syncValue = !this.syncValue
      },
      openDialog(){
        this.dialogShow=true
      }
    },
    watch: {}
  }
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 10px;
    font-weight: bold;
    color: $themColor;
  }
.mgt-15{
  margin-top: 15px;
}
  .line {
    border-bottom: 1px dashed $opacityColor;
    margin: 20px 0 15px;
  }

  .text {
    margin-top: 10px;
    font-size: 14px;
  }

  .text1 {
    @extend .text;
    color: hotpink;
  }

  .text2 {
    @extend .text;
    color: #42b983;
    cursor: copy;
  }

  @each $num, $color, $cursor in (1, red, default), (2, blue, pointer) {
    .miss#{$num} {
      color: $color;
      cursor: $cursor;
      padding-top: 10px;
    }
  }


</style>
