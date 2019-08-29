<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" class="tex"></van-search>
    </div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="banner">
      <van-swipe-item>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567600363&di=57ca5a11d997c10f2cc5232ed9f41c3f&imgtype=jpg&er=1&src=http%3A%2F%2Fcp1.douguo.com%2Fupload%2Fcaiku%2F6%2F0%2Fa%2Fyuan_60165640cdbc8f9b53ca28ddb8c6c93a.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567005609704&di=23d3125dffe339652cd80668ecfddbe1&imgtype=0&src=http%3A%2F%2Fi7.qhimg.com%2Ft01ca4ba8ce05ffadac.jpg%3Fsize%3D800x533 " />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3548233925,1127889117&fm=26&gp=0.jpg" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <div id="nav">
      <h3 @click="food()">食谱</h3>
      <h3 @click="questions()">百科</h3>
      <h3 @click="encyclopedia()">问答</h3>
    </div>
    <!-- 新闻 -->
    <div id="newa">
      <div class="news">
      <img src="../assets/baby.jpg" />
      <div class="title">
        <h4>宝宝爱高声尖叫？其实就是这个原因!</h4>
        <p>
          <span>4.6</span>w人在读
        </p>
      </div>
    </div>

    <div class="news">
      <img src="http://files.angelmom.org/Image/20140421/20140421112716_4655.jpg" />
      <div class="title">
        <h4>最坑娃的5种辅食，你还在给宝宝吃吗？</h4>
        <p>
          <span>2.8</span>w人在读
        </p>
      </div>
    </div>

    <div class="news">
      <img src="http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1512/17/c2/16560182_16560182_1450323556983_mthumb.jpg" />
      <div class="title">
        <h4>不要让他无所事事。让孩子们忙碌起来，让你一起做的事情更有趣。</h4>
        <p>
          <span>3.4</span>w人在读
        </p>
      </div>
    </div>
    </div>

    <!-- 以上是新闻部分 -->
  </div>
</template>

<script>
export default {
  name: "Slikbag",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    food() {
      this.$router.push("/food");
    },
    questions() {
      this.$router.push("/questions");
    },
    encyclopedia() {
      this.$router.push("/encyclopedia");
    }
  }
};
</script>

<style scoped>
/* 搜索框 */
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
}
.search .van-cell {
  height: 30px;
  width: 290px;
  line-height: 20px;
  background: #fff;
}
/* 以下是轮播 */
.banner {
  width: 100%;
  height: 225px;
  text-align: center;
}
.van-swipe-item {
  margin-top: 56px;
}
img {
  width: 316px;
  height: 148px;
  border-radius: 20px;
}
/* 导航跳转分页 */
#nav {
  display: flex;
  justify-content: space-around;
  color: #646464;
  margin-bottom: 8px;
}
/* 新闻 */
.news {
  width: 100%;
  height: 150px;
  /* background: pink; */
  border-top: 1px solid #ccc;
}
.title {
  width: 214px;
  height: 68px;
  float: left;
  font-size: 14px;
  color: #464545;
  font-weight: normal;
  margin-top: 32px;
}
.title p {
  height: 50px;
  line-height: 50px;
}
.news img {
  width: 133px;
  height: 88px;
  margin: 31px 8px;
  float: left;
  border-radius: 1px;
}
#newa{
  margin-bottom: 50px;
}
</style>
