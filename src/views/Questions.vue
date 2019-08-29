<template>
  <div>
    <!-- 固定头部 -->
    <van-nav-bar
      title="百科"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
    <!-- 分类 -->
    <div class="fl">
      <van-tabs v-model="active" color="rgba(255, 255, 255, 0)">
      <van-tab title="孕期"></van-tab>
      <van-tab title="0-1岁"></van-tab>
      <van-tab title="1-3岁"></van-tab>
      <van-tab title="3-6岁"></van-tab>
    </van-tabs>
    </div>
    <!-- banner图 -->
    <div class="banner">
      <img src="../assets/lunbo3.jpg" alt />
    </div>
    <!-- 展示 -->
    <div class="nav">
      <figure>
        <img
          src="http://thumbs.dreamstime.com/b/%E7%A5%88%E7%A5%B7%E7%9A%84%E5%B0%8F%E5%A5%B3%E5%AD%A9%EF%BC%8C%E4%BD%9C%E6%A2%A6%E5%9C%A8%E5%85%AC%E5%9B%AD%E6%88%B7%E5%A4%96-82357502.jpg"
          alt
        />
        <figcaption>
          <p>孕前准备</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="http://thumbs.dreamstime.com/b/%E7%A5%88%E7%A5%B7%E7%9A%84%E5%B0%8F%E5%A5%B3%E5%AD%A9%EF%BC%8C%E4%BD%9C%E6%A2%A6%E5%9C%A8%E5%85%AC%E5%9B%AD%E6%88%B7%E5%A4%96-82357502.jpg"
          alt
        />
        <figcaption>
          <p>孕期检查</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="http://thumbs.dreamstime.com/b/%E7%A5%88%E7%A5%B7%E7%9A%84%E5%B0%8F%E5%A5%B3%E5%AD%A9%EF%BC%8C%E4%BD%9C%E6%A2%A6%E5%9C%A8%E5%85%AC%E5%9B%AD%E6%88%B7%E5%A4%96-82357502.jpg"
          alt
        />
        <figcaption>
          <p>孕期生活</p>
        </figcaption>
      </figure>

      <figure>
        <img
          src="http://thumbs.dreamstime.com/b/%E7%A5%88%E7%A5%B7%E7%9A%84%E5%B0%8F%E5%A5%B3%E5%AD%A9%EF%BC%8C%E4%BD%9C%E6%A2%A6%E5%9C%A8%E5%85%AC%E5%9B%AD%E6%88%B7%E5%A4%96-82357502.jpg"
          alt
        />
        <figcaption>
          <p>产后</p>
        </figcaption>
      </figure>
    </div>
    <!-- 文章 -->
    <div class="eat">
      <ul id="list">
        <li>
          <img src="../assets/8.jpg" alt />
          <span>
            <h3>红薯泥焗鲟鱼</h3>
            <p>鲟鱼丰富的优质蛋白，提高宝宝免疫力适宜年龄八个月以上</p>
          </span>
        </li>
        <van-divider />
        <li>
          <img src="../assets/8.jpg" alt />
          <span>
            <h3>红薯泥焗鲟鱼</h3>
            <p>鲟鱼丰富的优质蛋白，提高宝宝免疫力适宜年龄八个月以上</p>
          </span>
        </li>
        <van-divider />
        <li>
          <img src="../assets/8.jpg" alt />
          <span>
            <h3>红薯泥焗鲟鱼</h3>
            <p>鲟鱼丰富的优质蛋白，提高宝宝免疫力适宜年龄八个月以上</p>
          </span>
        </li>
        <van-divider />
        <li>
          <img src="../assets/8.jpg" alt />
          <span>
            <h3>红薯泥焗鲟鱼</h3>
            <p>鲟鱼丰富的优质蛋白，提高宝宝免疫力适宜年龄八个月以上</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  path: "/questions",
  name: "Questions",
  data() {
    return {
      active: 2
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.fl{
  margin-top:46px;
}
.banner img {
  margin-left: 39px;
  margin-top: 10px;
  width: 303px;
  height: 140px;
  line-height: 20px;
  border-radius: 12px;
  background-color: rgba(240, 240, 240, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  margin-top: 10px;
}
figure img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  margin: 0;
  margin-left: 5px;
}
figure {
  text-align: center;
  width: 60px;
  height: 80px;
  margin: 0;
  background-color: #f8f8f8;
}
figcaption p {
  color: rgba(102, 102, 102, 1);
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
}
#list {
  height: 150px;
  display: flex;
  flex-direction: column;
}
#list li {
  height: 150px;
  width: 375px;
  margin-bottom: 20px;
}
#list img {
  left: 10px;
  width: 133px;
  height: 88px;
  border-radius: 15px;
  float: left;
}
#list span {
  margin-top: 15px;
  float: right;
  width: 214px;
}
</style>
