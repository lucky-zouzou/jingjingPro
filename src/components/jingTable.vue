<template>
  <div class="jing-table">
    <div class="jing-table-title">
      <input type="checkbox" @change="selectAll(data)" :checked="isAllSelect">
      <span v-for="(cell,index) in titleArr"
            :style="{width:cell.width,textAlign: align ? align: ''}">
        {{cell.text}}</span>
    </div>

    <div v-for="(item,index) in data" :key="index"
         class="jing-table-row"
         :class="[{'jing-table-row-stripe':stripe}]"
    >
      <label class="checkbox flexRowStartColCenter">
        <input type="checkbox" :value="item.checked" @change="selectCheckBox(item,index)" :checked="item.checked">
        <span v-for="(cell,index) in titleArr"
              class="jing-table-row-cell"
              :style="{width:cell.width,textAlign: align ? align: ''}"
              >
          {{item[cell.key]}}</span>
      </label>

    </div>
  </div>

</template>

<script>
  export default {
    name: "jingTable",
    data() {
      return {
        isAllSelect:false
      }
    },
    props: {
      data:Array,
      titleArr:Array,
      align:String,
      checkBox:Boolean,
      stripe:Boolean
    },
    created(){

    },
    methods:{
      selectCheckBox(item,index){
        item.checked=!item.checked
        var chooseArr=[]
        chooseArr=this.data.filter((item)=>{
          return item.checked
        })
        if(chooseArr.length!=this.data.length){
          this.isAllSelect=false
        }else {
          this.isAllSelect=true
        }
        this.$emit('selection-change',chooseArr)
      },
      selectAll(){
       this.isAllSelect= this.data.every((item)=>{
          return item.checked
        })
        if(!this.isAllSelect){
          this.isAllSelect=true
          this.data.forEach((item,index)=>{
            item.checked=true
            var atr={...item,checked:true}
            this.$set(this.data,index,atr)
          })

          this.$emit('selection-change',this.data)
        }else {
          this.isAllSelect=false
          this.data.forEach((item)=>{
            item.checked=false
          })
          this.$emit('selection-change',[])
        }

      }
    }
  }
</script>

<style scoped lang="scss">
.jing-table{
  border: 1px solid $opacityColor;
  border-bottom: none;
  .jing-table-title{
    padding: 5px 0;
    background: #f6f6f6;
    border-bottom: 1px solid $opacityColor;
    input{
      width: 40px;
    }
    span{
      display: inline-block;
      font-weight: bold;
      color: #666666;
    }
  }
  .jing-table-row{
    color: #363636;
    padding: 5px 0;
    border-bottom: 1px solid $opacityColor;
    input{
      width: 40px;
    }
    .jing-table-row-cell{

    }
  }
  .jing-table-row-stripe:nth-child(odd) {
    background:  $lightColor;
  }
}
</style>
