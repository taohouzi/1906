<template>
  <div>
    <!-- 顶部 -->
    <div class="head">
      <van-nav-bar title="营养食谱" left-text="返回" left-arrow @click-left="onClickLeft" fixed/>
    </div>
    <!-- 侧边导航栏 -->
    <div class="leftNav">
      <van-sidebar v-model="activeKey">
      <van-sidebar-item title="阶段" />
      <van-sidebar-item title="功效" />
      <van-sidebar-item title="五谷" />
      <van-sidebar-item title="肉蛋类" />
      <van-sidebar-item title="海鲜类" />
      <van-sidebar-item title="菌类" />
      <van-sidebar-item title="水果类" />
      <van-sidebar-item title="豆制类" />
      <van-sidebar-item title="坚果类" />
    </van-sidebar>
    </div>
    <!-- 阶段分类 -->
  <div class="course">
    <h3>孕期</h3>
    <van-grid :column-num="3" :gutter="4" >
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=299095289,809512005&fm=27&gp=0.jpg"
    text="孕中期"
    to="/nutritionRecipes"
  />
</van-grid>
  </div>
  <div class="course">
    <h3>产后</h3>
    <van-grid :column-num="3" :gutter="4">
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=299095289,809512005&fm=27&gp=0.jpg"
    text="月子期"
  />
</van-grid>
  </div>
  <div class="course">
    <h3>婴儿期</h3>
    <van-grid :column-num="3" :gutter="4">
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=299095289,809512005&fm=27&gp=0.jpg"
    text="8-10个月"
  />
</van-grid>
  </div>
<div class="course">
    <h3>幼儿期</h3>
    <van-grid :column-num="3" :gutter="4">
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=299095289,809512005&fm=27&gp=0.jpg"
    text="2-3岁"
  />
</van-grid>
  </div>

  </div>
</template>

<script>
export default {
  name: "CanEat",
  path: "/canEat",
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};

</script>

<style scoped>
.head{
  margin-top: 46px;
}
.leftNav{
  float: left;
  width: 30%;
}
.course{
width: 70%;
height: 140px;
float: right;
font-size: 14px;
color: #999999;
font-weight: normal;
}
.course img{
  height: 70px;
  width: 70px;
  border-radius: 8px;
}
.course .yunqi{
  width: 25%;

margin-left:30%;
text-align: center;

}
.yunqi li{
  height: 100px;
}
</style>
