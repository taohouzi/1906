<template>
  <div>
  <!-- 顶部 -->
    <div class="head">
      <van-nav-bar title="能不能吃" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <van-search v-model="value" placeholder="输入食物名称搜索" show-action shape="round" class="tex"></van-search>
    </div>
    <!-- 种类 -->
<van-grid :column-num="3">
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567003235097&di=9a744eb8e87a64491fe49737eedff359&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fi2%2F1843314005%2FTB2p71ImTcCL1FjSZFPXXXZgpXa_%2521%25211843314005.jpg"
    text="早餐馍馍"
    to="/babyeat"
  />
</van-grid>
<!-- 222 -->
<van-grid :column-num="3">
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567003522928&di=221586a5c2c90fbb441b8ffbfd1285ed&imgtype=0&src=http%3A%2F%2Fwww.jbaobao.com%2Fuploadfile%2F2017%2F0425%2F20170425033758283.png"
    text="泥类、羹类"
    to="/babyeat"
  />
</van-grid>
<!-- 333 -->
<van-grid :column-num="3">
  <van-grid-item
    v-for="value in 3"
    :key="value"
    icon="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4277368427,1055348458&fm=26&gp=0.jpg"
    text="蔬菜面"
    to="/babyeat"
  />
</van-grid>
  </div>
</template>

<script>
  export default {
name:'Eat',
path:'/eat',
data() {
    return {
      value: ""
    };
  },
methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickLeft() {
      this.$router.go(-1);
    },





  }
  }
</script>

<style scoped>
.search{
  margin-top: 46px;
}
img{
  width: 50px;
  height: 50px;
}
</style>
