<template>
  <div>
    <!-- 顶部 -->
    <div class="head">
      <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <!-- 分类 -->
    <div id="tab">
      <van-tabs v-model="activeName" color="#fff">
        <van-tab title="食谱" name="a">
          <div class="tabz">
            <p class="tabl">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567004250434&di=353d74e525030eb2d6c72f7afaec27c3&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F003MeDYGty6DMexBaUy82%26690" alt />
              <span>
                <h3>南瓜粥</h3>
                <p class="pb">六个月宝宝辅食</p>
              </span>
            </p>
            <p class="tabl">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567599194&di=6ca640fa8f1d67ee56b356fb71e43a70&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.cq67.com%2Fuploads%2Fyishi%2F2016071756%2F09-02-51-95-1.jpg" alt />
              <span>
                <h3>番茄土豆鸡末粥</h3>
                <p class="pb">丰富的优质蛋白，提高宝宝免疫力适宜年龄八个月以上</p>
              </span>
            </p>
             <p class="tabl">
              <img src="https://c-ssl.duitang.com/uploads/blog/201411/18/20141118225911_2tQEL.thumb.700_0.jpeg" alt />
              <span>
                <h3>手工饼干</h3>
                <p class="pb">纯手工造型曲奇饼干水果西瓜芝麻婴儿辅食办公室零食婚宴甜品饼干</p>
              </span>
            </p>
          </div>
        </van-tab>
        <van-tab title="营养计划" name="b">
          <div class="tabz">
            <p class="tabl">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567004600938&di=d579ece7a703295557df9f7c19d9da4b&imgtype=0&src=http%3A%2F%2Fcp1.douguo.net%2Fupload%2Fcaiku%2F1%2Fe%2F5%2Fyuan_1e66948f216e02507e9c4473238ab365.jpg" alt />
              <span>
                <h3>宝宝版鲜嫩虾丸</h3>
                <p class="pb">很多人反映宝宝嚼不动虾肉，可是虾好有营养啊，怎么让宝宝吃呢？</p>
              </span>
            </p>
            <p class="tabl">
              <img src="http://i2.chuimg.com/7d6ab80a55b211e7bc9d0242ac110002_1920w_1080h.jpg?imageView2/2/w/660/interlace/1/q/90" alt />
              <span>
                <h3>什锦酸奶薄脆</h3>
                <p class="pb">冻过的酸奶配上酸酸甜甜的水果，咬起来嘎嘣脆，感受水果丁和酸奶交织在一起的美味体验，简直不要太惬意了！</p>
              </span>
            </p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collect",
  path: "/collect",
  data() {
    return {
      activeName: "a"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
#tab {
  margin-top: 46px;
}
.tabl{
  height: 100px;;
}
.tabz {
  height: 100px;
  display: flex;
  flex-direction: column;
}
.tabl{
  height: 150px;
  width: 375px;
  margin-bottom: 20px;
}
.tabl img {
  margin-left: 10px;
  width: 133px;
  height: 88px;
  border-radius: 15px;
  float: left;
}
.tabl span {
  margin-top: 15px;
  float: right;
  width: 214px;
}
.tabl .pb{
  color: #ccc;
}
.tabl h3{
  font-weight: normal;
  color: #666;
}
p{
  display: block;
}
.van-tab__pane{
  height: 95px;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
