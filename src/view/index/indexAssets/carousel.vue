<template>
  <div class="indexCarousel">
    <el-carousel
      class="carousel"
      style="heigh: 403px"
      :interval="5000"
      arrow="always"
    >
      <el-carousel-item
        class="carousel"
        v-for="(v, i) in carouselImage"
        :key="i"
      >
        <img class="carouselImage" :src="v.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselImage: [
        {
          id: 1,
          url: require("../../../assets/image/carousel/carousel1.jpg"),
        },
        {
          id: 2,
          url: require("../../../assets/image/carousel/carousel2.jpg"),
        },
        {
          id: 3,
          url: require("../../../assets/image/carousel/carousel3.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang = "less">
@import url("carousel.vue.less");
</style>
    