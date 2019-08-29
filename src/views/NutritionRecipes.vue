<template>
  <div>
    <!-- 顶部 -->
    <div class="head">
      <van-nav-bar title="孕早期" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <!-- 文章 -->
    <div class="eat">
      <ul id="list">
        <li>
          <img src="https://img.pconline.com.cn/images/upload/upc/tx/kidsphotolib_bbs/1707/10/c0/52346088_1499666055935.jpg" alt />
          <span>
            <h3>碧绿卷心菜 孕妈补叶酸</h3>
            <p>怀孕的妈妈如果想要适当补充叶酸，卷心菜会是不错的选择哦！</p>
          </span>
        </li>
        <van-divider />
        <li>
          <img src="https://img.pconline.com.cn/images/upload/upc/tx/kidsphotolib_bbs/1706/12/c0/49674459_1497235061486.jpg" alt />
          <span>
            <h3>冬瓜靓汤 清热补水神器</h3>
            <p>冬瓜汤味道清甜、简单易做，是大家常做的一种汤羹。</p>
          </span>
        </li>
        <van-divider />
        <li>
          <img src="https://img.pconline.com.cn/images/upload/upc/tx/kidsphotolib_bbs/1706/26/c0/51054661_1498454302231.jpg" alt />
          <span>
            <h3>淡淡牛奶香 孕妈补钙好</h3>
            <p>孕期的妈咪需要补充多种营养素，其中补钙尤其重要。</p>
          </span>
        </li>
        <van-divider />
        <li>
          <img src="https://img.pconline.com.cn/images/upload/upc/tx/kidsphotolib_bbs/1708/01/c0/54326103_1501553068927.jpg" alt />
          <span>
            <h3>鲜菇入菜 孕妈免疫力MAX</h3>
            <p>孕期的妈咪吃，可以提高免疫力哦！</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionRecipes",
  path: "/nutritionRecipes",
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
