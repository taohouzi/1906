<<<<<<< HEAD
<template>
  <div class="index">
    <div class="container">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="balance-o" to="/silkbag">锦囊</van-tabbar-item>
      <van-tabbar-item icon="smile-o" to="/life">生活</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/lovetime">时光记</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mytest">我的</van-tabbar-item>
    </van-tabbar>

=======



<template>
  <div class="index">
    <div class="container">

      <router-view></router-view>

    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item name="silkbag" icon="balance-o" to="/silkbag">锦囊</van-tabbar-item>
      <van-tabbar-item name="life" icon="smile-o" to="/life">生活</van-tabbar-item>
      <van-tabbar-item name="lovetime" icon="home-o" to="/lovetime">时光记</van-tabbar-item>
      <van-tabbar-item name="message" icon="more-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item name="my" icon="user-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>




>>>>>>> zxz
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
<<<<<<< HEAD
        active: 2
=======
        active: 'life'
>>>>>>> zxz
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
