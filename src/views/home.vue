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

<!--    <div class="line"></div>-->
<!--    <checkbox-group v-model="checkList">-->
<!--      <check-box label="aaa" disabled>A</check-box>-->
<!--      <check-box label="bbb" checked>B</check-box>-->
<!--      <check-box label="ccc">C</check-box>-->
<!--    </checkbox-group>-->

<!--    <vue-qr :logoSrc="src2" :text="qrText" :size="200" ></vue-qr>-->
<!--    <vue-qr text="Hello world1111111111" :callback="test1" qid="testid" ></vue-qr>-->
    <div class="line"></div>
    <Button @click="openDialog" size="small">打开dialog</Button>
    <jing-dialog
      :visible="dialogShow"
      title="提示1"
      width="35%"
      top="25vh"
      @close="dialogShow=false"
      canCloseOut
    >
      <div>一段信息</div>
      <span slot="footer1" class="dialog-footer">
        <Button  type="info" size="small" @click="dialogShow=false">取消</Button>
        <Button  size="small" @click="dialogShow=false">确认</Button>
      </span>
    </jing-dialog>
    <div class="line"></div>
    <span>table</span>
    <jing-table
      :data="tableData" checkBox
      :titleArr="titleArr"
      align="center"
      @selection-change="handleSelectionChange"
      stripe
    >
    </jing-table>
    <div class="line"></div>

    <div>message</div>
    <Button @click="open('success')" type="info">成功</Button>
    <Button @click="open('error')" type="info">错误</Button>
    <Button @click="open('warning')" type="info">警告</Button>
    <div class="line"></div>

    <div  :loading-text="loadingText" v-loading="isLoading" class="loadingBox">something</div>
    <Button @click="loadingSwitch" type="info">点我loading</Button>
    <Button @click="loadingSwitch2" type="info"  v-loading.isFullscreen="screenLoading" :loading-text="loadingText">点我全局loading</Button>
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
  import jingTable from "../components/jingTable";
  import checkboxGroup from "../components/checkboxGroup";
  import VueQr from 'vue-qr'

  export default {
    name: "home",
    components: {Button, SwitchBox, sync, jingLink, jingRadio, checkBox, radioGroup,checkboxGroup,VueQr,jingDialog,jingTable},
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
        tableData:[
          {id:1,name:"qingqing",sex:"女",like:"吃饭",address:"北京市海淀区"},
          {id:2,name:"kong",sex:"男",like:"睡觉",address:"北京市海淀区"},
          {id:3,name:"mimi",sex:"女",like:"打豆豆",address:"成都市高新南区"},
          {id:4,name:"sanmy",sex:"女",like:"跳舞",address:"北京市海淀区"},
          {id:5,name:"静静",sex:"女",like:"吃火锅",address:"北京市中关村"},
        ],
        titleArr:[
          {text:"姓名",key:"name",width:"200px"},
          {text:"性别",key:"sex",width:"100px"},
          {text:"爱好",key:"like",width:"240px"},
          {text:"工作地址",key:"address",width:"240px"},
        ],
        loadingText:"loading...",
        isLoading:false,
        screenLoading:false
      }
    },
    created(){

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
        let color=["red","yellow","blue","pink","dark","red"]
        let result=color.reduce((pre,cur,index)=>{
          // console.log(pre,cur,index)
          if(cur in pre){
            pre[cur]++
          }else {
            pre[cur]=1
          }
          return pre
        },{})
        console.log(color,result)
      },
      switchChange(v) {
        // console.log(v)
      },
      changeSync() {
        this.syncValue = !this.syncValue
      },
      openDialog(){
        this.dialogShow=true
      },
      handleSelectionChange(val){
        // console.log(val)
      },
      open(type){
        this.$message({
          type:type,
          text:type+"消息",
          duration:"2000"
        })
        // this.$message.error({text:type+"消息",})
      },
      loadingSwitch(){
        this.isLoading=!this.isLoading
        if(this.isLoading){
          this.loadingText='loading...'
        }else {
          this.loadingText=''
        }
      },
      loadingSwitch2(){
        this.screenLoading=!this.screenLoading
        setTimeout(()=>{
          this.screenLoading=false
        },1500)
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
  .loadingBox{
    width: 400px;
    height: 200px;
    border:1px solid #999999;
    margin-bottom: 10px;
  }


</style>
