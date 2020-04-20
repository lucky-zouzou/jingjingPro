<template>
  <div>
    <canvas id="draw1" width="600px" height="800px" ref="myCanvas"></canvas>
  </div>
</template>

<script>
  export default {
    name: "canvas",
    data() {
      return {
        context: {}, // canvas对象,
        imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585893196855&di=aaaf4b8adec6ec6ae62dd47d2ec069a4&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F569881282a3fa.jpg",
      }
    },
    created() {
    },
    mounted(){
      this.initDraw()
    },
    methods: {
      initDraw() {
        // 初始化画布
        const canvas = this.$refs.myCanvas
        this.context = canvas.getContext('2d')
        this.context.lineWidth=10
        this.context.lineColor="#666666"
        this.drawSome()
      },
      drawSome(){
        this.context.beginPath();
        this.context.arc(75, 75, 50, 0, Math.PI * 2, true);
        this.context.stroke();

        this.context.fillStyle="#FF0000";
        this.context.fillRect(200,200,150,75);
        this.context.beginPath();
        this.context.arc(500, 75, 50, 0, Math.PI * 2, true);
        this.context.stroke();
      }
    }
  }
</script>

<style scoped>
#draw1{
  border: 1px solid #42b983;
}
</style>
