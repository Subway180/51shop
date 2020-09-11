<template>
  <div class="footer">
    <p class="footerDetil">Copyright @ 2008 长春理工大学 | 地址：中国吉林省长春市卫星路7186号(南)</p>
    <p class="footerAnd">
      <el-link :underline="false">使用条款</el-link>
      <el-link :underline="false">隐私条款</el-link>
      <el-link :underline="false">广告刊例</el-link>
      <el-link :underline="false">技术支持：赢科</el-link>
      <el-link :underline="false">蒙ICP备06004630号</el-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>
<style lang ="less">
@import url("footer.less");
</style>