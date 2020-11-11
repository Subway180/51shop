<template>
  <div class="indexMeun">
    <div class="classify"><span class="classifyName">全部分类</span></div>
    <div class="classify"><span class="classifyName">首页</span></div>
    <div class="classify"><span class="classifyName">首页</span></div>
    <div class="classify"><span class="classifyName">首页</span></div>
    <div class="classify"><span class="classifyName">首页</span></div>
    <div class="classify"><span class="classifyName">首页</span></div>
    <div class="classify"><span class="classifyName">首页</span></div>        
    <el-row>
      <home-Meun></home-Meun>
      <home-Carousel></home-Carousel>
      <home-Message></home-Message>
    </el-row>
  </div>
</template>
<script>
import meun from "./meun";
import personInformation from "./personInformation";
import carousel from "./carousel";
export default {
  components: {
    "home-Meun": meun,
    "home-Message": personInformation,
    "home-Carousel": carousel,
  },
};
</script>
<style lang="less">
@import url("indexMeun.vue.less");
</style>>