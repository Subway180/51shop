<template>
  <el-row class="indexMeun">
      <home-Meun></home-Meun>
      <home-Carousel></home-Carousel>
      <home-Message></home-Message>
  </el-row>
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