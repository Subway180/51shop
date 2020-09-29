<template>
  <div class="personInformation">
    <div class="welcomeMessage">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="welcomeImage"
      />
      <div class="welcome">欢迎，{{ userName }}</div>
      <el-divider></el-divider>
    </div>
    <div class="newsMeun">
      <div class="news" v-for="(v, i) in newData" :key="i">
        <el-link type="primary">{{ v.title }}</el-link>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      userName: "孙博伟",
      newData: [
        {
          newsId: 1,
          title: "美国新冠肺炎超714万例 国防部系统逾6.5万人感染",
        },
        {
          newsId: 2,
          title: "四大海域执行军事任务",
        },
        {
          newId: 3,
          title: "小伙回应网贷去可可西里捡垃圾",
        },
        {
          newId: 4,
          title: "纳卡冲突致约30名军人丧生",
        },
        {
          newId: 5,
          title: "学生上课玩手机被退学",
        },
        {
          newId: 6,
          title: "杀妻灭子案再审宣判",
        },
        {
          newId: 7,
          title: "傅园慧获第一无缘决赛",
        },

      ],
    };
  },
};
</script>

<style lang="less">
@import url("personInformation.vue.less");
</style>
