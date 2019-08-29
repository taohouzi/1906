<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      :title="title"
      left-arrow
      fixed
      @click-left="onClickLeft"
      style="height:55px;line-height:55px;"
    >

    </van-nav-bar>
    <div style="margin-top:55px;margin-bottom:50px;">
      <ul>
        <!-- 消息一 -->
        <li
          v-for="(item,index) in list"
          v-bind:key="index"
          style="width:100%-30px;height:42px;border-bottom:1px solid #cecece;padding:20px 15px;"
          @click="tz(item.pname)"
        >
          <van-image
            width="40"
            height="40"
            :src="item.pimg"
            style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;border:1px solid #cecece;"
          />
          <div style="float:left;width:120px;">
            <h3 style="font-weight: normal;margin:0;text-align:left;">{{item.pname}}</h3>
            <p style="margin-top:5px;margin-bottom:0;text-align:left;">2018.08.28 19:27</p>
          </div>
          <p style="float:right">19:27</p>
        </li>
        <!-- 消息二
        <li style="width:100%-30px;height:42px;border-bottom:1px solid #cecece;padding:20px 15px">
          <van-image
            width="40"
            height="40"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            style="border-radius:50%;overflow: hidden;float:left;margin-right:10px;border:1px solid #cecece;"
          />
          <div style="float:left;width:120px;">
            <h3 style="font-weight: normal">汤姆</h3>
            <p style="margin-top:5px">2018.08.28 19:27</p>
          </div>
          <p style="float:right">11.11</p>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Message",
  path: "/message",
  data() {
    return {
      title: "消息",
      list: ""
    };
  },
  mounted() {
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 20771 }
    }).then(data => {
      console.log(data.data.data);
      this.list = data.data.data;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
</style>
