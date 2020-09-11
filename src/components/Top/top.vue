<template>
  <div class="viewTop">
    <el-row class="header-message">
      <el-link :underline="false" v-show="!isLogin" class="left">亲，请登录</el-link>
      <el-link :underline="false" v-show="!isLogin" class="left">免费注册</el-link>
      <el-link :underline="false" v-show="isLogin"  class="left">欢迎，{{userName}}</el-link>
      <el-link :underline="false" class="right">联系客服</el-link>
      <el-link :underline="false" class="right" icon="el-icon-star-on">加入收藏</el-link>
      <el-link :underline="false" class="right" icon="el-icon-shopping-cart-2">购物车</el-link>
      <el-link :underline="false" class="right">商城首页</el-link>
    </el-row>
    <el-row class="iconImage">
      <el-image class="logo" :src=logo></el-image>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="search">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>
    </el-row>
  </div>
</template>

<script>  
    export default {
        name:"top",
        data() {
          return {
            isLogin:false,
            userName:"孙博伟",
            logo: require("../../assets/image/home/logo.png"),
            search:""
          }
        },
    }
</script>
<style lang ="less">
    @import url('top.less');
</style>