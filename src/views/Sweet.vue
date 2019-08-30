<template>
  <div class="box">
    <van-nav-bar title="酒酿" fixed left-arrow @click-left="onClickLeft" />
    <div style="padding:0 25px">
      <img style="width:100%;height:150px;margin-top:45px;" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2259715463,2372875481&fm=26&gp=0.jpg" />
    </div>

    <!-- 中部 -->
    <section style>
      <p
        style="text-indent:20px;font-size:14px;padding:10px"
      >酒酿(sweet ferment rice )，旧时叫“醴”，是中国传统的特产酒。用蒸熟的江米（糯米）拌上酒酵（一种特殊的微生物酵母）发酵而成的一种甜米酒在我国全国各地称呼不同又叫醪糟、酒酿、米酒、甜酒、甜米酒、糯米酒、江米酒、酒糟。</p>
      <ul style="padding: 0 10px;" v-for="(item,index) in shuju" :key="index">
        <li>
          <h4>{{item.title}}</h4>
          <p style="color:green;">{{item.advice}}</p>
          <p>{{item.detail}}</p>
        </li>
      </ul>
      <p style="height:90px;"></p>
    </section>
    <!-- 底部 -->
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="cluster">分享</van-tabbar-item>
        <van-tabbar-item icon="chat">评论</van-tabbar-item>
        <van-tabbar-item icon="star">收藏</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Sweet",
  path:'/sweet',
  data() {
    return {
      active: "",
      shuju: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let _this = this;
    Axios({
      url: "http://106.12.11.4:8888/ShiGuangJi/shiguangji/jiuniang.do"
    }).then(function(data) {
      //console.log(data.data.data.sjiuniangs);
      _this.shuju = data.data.data.sjiuniangs;
      //console.log(_this.shuju);
    });
  }
};
</script>


<style scoped>
ul li {
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #cecece;
}
</style>
