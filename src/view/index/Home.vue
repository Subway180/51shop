<template>
  <div>
    <div>
      <home-Top></home-Top>
    </div>
    <div>
      <index-Meun></index-Meun>
    </div>
    <div>
      <home-Footer></home-Footer>
    </div>
  </div>
</template>
<script>
import top from "../../components/Top/top";
import indexMeun from "./indexAssets/indexMeun";
import footer from "../../components/footer/footer";
export default {
  name: "Home",
  components: {
    "home-Top": top,
    "index-Meun": indexMeun,
    "home-Footer": footer,
  },
};
</script>
<style lang = "less">
@import url("Home.vue.less");
</style>