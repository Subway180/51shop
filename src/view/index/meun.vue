<template>
  <el-row id="meun" class="meun">
    <div class="ulShop">
      <ul>
        <li  class="ulShopLi" type="primary" v-for="(item,index) in commodityList" :key="index">
          {{item.name}}
          <i class="el-icon-arrow-right" style="margin:18px 5px 0px 0px ; float:right"></i>
        </li>
      </ul>
    </div>
    <div class="">
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      commodityList: [
        {
          id: 1,
          name: "家用/电器",
        },
        {
          id: 2,
          name: "手机/数码",
        },
        {
          id: 3,
          name: "素食/卤味",
        },
        {
          id: 4,
          name: "坚果/炒货",
        },
        {
          id: 5,
          name: "糖果/蜜饯",
        },
        {
          id: 6,
          name: "巧克力",
        },
        {
          id: 7,
          name: "海鲜/鱼类",
        },
        {
          id: 8,
          name: "花茶/名酒",
        },
        {
          id: 9,
          name: "箱包",
        },
      ],
    };
  },
};
</script>

<style lang ="less">
@import url("meun.less");
</style>>