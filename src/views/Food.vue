<template>
  <div>
    <div class="head">
      <van-nav-bar title="食谱" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <!-- 轮播 -->
    <van-swipe :autoplay="2500" indicator-color="white" class="banner" show-indicators>
      <van-swipe-item>
        <img src="http://img12.360buyimg.com/tuangou/jfs/t163/165/1449647501/14854/50745fad/53ad95c0N2d8d299d.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://p0.meituan.net/dpdeal/ae9073387bf0064f43a9f6358833b9e6221280.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://s6.sinaimg.cn/mw690/005NTnACzy6SPJQsWDX15&690" />
      </van-swipe-item>
    </van-swipe>
    <!-- 参考列表 -->
    <ul id="tab">
      <li @click="eat()">
        <img src="http://img4.imgtn.bdimg.com/it/u=3869091134,3472959330&fm=26&gp=0.jpg" alt />
        <h4>能不能吃</h4>
      </li>
      <li @click="canEat()">
        <img src="http://imgwww.heiguang.net/old/images/20063209285538408.jpg" alt />
        <h4>营养食谱</h4>
      </li>
      <li @click="collect()">
        <img src="http://qcloud.dpfile.com/pc/2nIjMJBTzFA16_GPy7PaAfjIQ68w1Zr38EyVbtt-BdCrJYl5CKWI03Dq6zuOz3f-TK-l1dfmC-sNXFHV2eRvcw.jpg" alt />
        <h4>我的收藏</h4>
      </li>
    </ul>
    <!-- 以下是精选辅食 -->
    <div class="eat">
      <ul id="list">
        <li>
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4261715684,1844124739&fm=26&gp=0.jpg" alt />
          <span>
            <h3>什锦虾仁</h3>
            <p>这道菜是我家哒的最爱，虾仁和胡萝卜，黄瓜的搭配非常营养。</p>
          </span>
        </li>
        <li>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567002961811&di=ec117940557e93b9b9843556a893d406&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2F7%2F7%2F1%2Fyuan_7739055ef8106d28c85ef4cdced89f31.jpeg" alt />
          <span>
            <h3>宝宝辅食之丝瓜猪肝粥</h3>
            <p>夏天天气很热，许多疾病流行开来，所以说，夏季饮食应以清凉、易消化、有营养的绿色蔬菜为主。 </p>
          </span>
        </li>
        <li>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567003049068&di=896b6caa8cda041832989e476de351e5&imgtype=0&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fcaiku%2Fc%2Fc%2F3%2Fyuan_cc19faf4b56bf748dd06af9df7e9d243.jpg" alt />
          <span>
            <h3>萌萌兔饭团</h3>
            <p>用红苋菜汤把米饭拌成淡粉色，捏成扇形，白色的椭圆，海苔剪眼睛嘴巴，三片小胡萝卜和一粒青豆用水焯熟做装饰</p>
          </span>
        </li>
        <li>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567003179873&di=a112d08d4d5561c702141c3ea830f981&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2Fb%2Fa%2Fa%2Fyuan_ba508d1c02fe51974da29d0fe9b89bca.jpeg" alt />
          <span>
            <h3>花儿玉米饼</h3>
            <p>丰富的优质蛋白，提高宝宝免疫力适宜年龄八个月以上</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Food",
  path: "/food",
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    eat() {
      this.$router.push("/eat");
    },
    canEat() {
      this.$router.push("/canEat");
    },
    collect() {
      this.$router.push("/collect");
    }
  }
};
</script>

<style scoped>
.head {
  margin-top: 46px;
}
.banner img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
#tab {
  width: 100%;
  height: 142px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 58% 58% 0 0;
  background: #f4f4f4;
  position: absolute;
  top: 160px;
}

#tab img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-top: 42px;
}
#list {
  height: 150px;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
}
#list li {
  height: 150px;
  width: 375px;
  margin-bottom: 20px;
}
#list img {
  margin-left: 10px;
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
