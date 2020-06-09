<template>
    <span class="jing--icon">&#xe6e8;</span>
</template>

<script>
    export default {
        name: "Icon"
    }
</script>

<style scoped lang="scss">
  @font-face {
    font-family: 'iconfont';  /* project id 1788232 */
    src: url('//at.alicdn.com/t/font_1788232_yaiytd3t3ek.eot');
    src: url('//at.alicdn.com/t/font_1788232_yaiytd3t3ek.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1788232_yaiytd3t3ek.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1788232_yaiytd3t3ek.woff') format('woff'),
    url('//at.alicdn.com/t/font_1788232_yaiytd3t3ek.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1788232_yaiytd3t3ek.svg#iconfont') format('svg');
  }
.jing--icon{
  width: 16px;
  height: 16px;
  display: inline-block;
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  animation: turn 1s linear infinite;

}
  @keyframes turn{
    0%{transform:rotateZ(0deg);}
    100%{transform:rotateZ(360deg);}
  }

</style>
