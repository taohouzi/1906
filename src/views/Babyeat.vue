<template>
  <div>
    <!-- 顶部 -->
    <div class="head">
      <van-nav-bar title="建议辅食" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <van-search v-model="value" placeholder="输入食物名称搜索" show-action shape="round" class="tex"></van-search>
    </div>
    <!-- 热点推荐 -->
    <div>
      <ul id="list">
        <li @click="sweet()">
          <img src="http://img5.imgtn.bdimg.com/it/u=2965044620,2699472361&fm=15&gp=0.jpg" alt />
          <span>
            <h4>酒酿</h4>
            <p>
              <van-icon name="warning" />孕期、坐月子、哺乳期
            </p>
            <h5>宝宝不能吃</h5>
          </span>
        </li>
        <li @click="sweet()">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567598431&di=346a751db919bed1a7fa0b74bcf2423b&imgtype=jpg&er=1&src=http%3A%2F%2Fci.xiaohongshu.com%2F1d58a9e1-7796-4b39-ba62-b7388fbf9b55%40r_750w_750h_ss1.jpg"
            alt
          />
          <span>
            <h4>婴儿辅食</h4>
            <p>
              <van-icon name="success" />7-10个月宝宝
            </p>
            <h5>宝宝可以吃</h5>
          </span>
        </li>
        <li @click="sweet()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567598793&di=950a610bf28bb720cc27eaf68126d1f1&imgtype=jpg&er=1&src=http%3A%2F%2Fmmb-toutiao.oss-cn-shanghai.aliyuncs.com%2FtoutiaoImage%2Fbc2dfb055fd9e0bd0677b9dc38bd267d.jpeg" alt />
          <span>
            <h4>碎牛肉细面汤</h4>
            <p>
              <van-icon name="fail" />11-12个月宝宝
            </p>
            <h5>宝宝尽量少吃</h5>
          </span>
        </li>
        <li @click="sweet()">
          <img src="https://mmb-toutiao.oss-cn-shanghai.aliyuncs.com/toutiaoImage/ca4754e358bbf84d01be5da1de424b98.jpeg?x-oss-process=image/resize,w_440" alt />
          <span>
            <h4>豆腐蛋黄泥</h4>
            <p>
              <van-icon name="success" />10个月左右
            </p>
            <h5>宝宝能吃</h5>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Babyeat",
  path: "/babyeat",
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
    sweet() {
      this.$router.push("/sweet");
    }
  }
};
</script>

<style scoped>
.search {
  margin-top: 46px;
}
img {
  width: 100px;
  height: 100px;
  float: left;
  margin-left: 8px;
}
#list{
  text-align: left;
}
#list span {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  color: #999;
}
#list li {
  width: 100%;
  height: 110px;
  margin-top: 10px;
}
#list h4 {
  color: #666;
  font-size: 16px;
  font-weight: normal;
}
</style>
