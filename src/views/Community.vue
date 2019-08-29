

//社区父组件
<template>
  <div>
    <div class="head">
      <van-nav-bar title="社区" left-text="返回" left-arrow
                   class="opct"
                   @click-left="onClickLeft"
                   :fixed="true"
      >
        <van-icon name="search" slot="right"/>
      </van-nav-bar>

      <div class="nav">
        <span @click="tap1">备孕</span>
        <span @click="tap2">孕期</span>
        <span @click="tap3">育儿</span>
        <span @click="tap4">家常</span>
        <span @click="tap5">旅行</span>
      </div>
    </div>

  <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Community",
        data() {
            return {

            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            tap1(){
                this.$router.push('/beiyun')
            },
            tap2(){
                this.$router.push('/yunqi')
            },
            tap3(){
                this.$router.push('/yuer')
            },
            tap4(){
                this.$router.push('/jiachang')
            },
            tap5(){
                this.$router.push('/lvxing')
            }

        }
    }
</script>

<style scoped>

  .head {
    width: 100%;
    height:160px;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567054924233&di=99d10315327f156c8e8c65789c6312e2&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170322%2F8572584c0adf4459a81791102d3c3334_th.jpg") no-repeat ;
    background-size:100% 100%;


  }
  .head .opct{
    opacity: 0.8;

  }
  .head .nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;


  }
  .head .nav span{
    display: block;
    width: 50px;
    height:50px;
    margin-top: 130px;
    border-radius:50%;
    text-align: center;
    line-height: 50px;
    background: #ffc731;
    color:#fff;
    font-size: 14px;
    font-weight: bold;
  }
</style>
