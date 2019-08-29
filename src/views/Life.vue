

//生活父组件
<template>
  <div>
      <div id="nav">
        <h2 @click="tap1">关注</h2>
        <h2 @click="tap2">社区</h2>
        <h2 @click="tap3">优品</h2>
      </div>
    <router-view></router-view>

  </div>
</template>

<script>
    export default {
        name: "Life",
        data(){
            return{

            }
        },
        methods:{
            tap1(){
                this.$router.push('/attention')
            },
            tap2(){
                this.$router.push('/community')
            },
            tap3(){
                this.$router.push('/goods')
            }

        }


    }
</script>

<style scoped>



  * {
    margin: 0;
    padding: 0;
  }

  #nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    background-color: white;
    z-index: 100;
    width: 100%;
    top:0;

  }

  #nav h2 {
    width: 94px;
    height: 24px;
    font-weight: normal;
    font-size: 16px;
    color: #ffc731;
    text-align: center;
    margin-top:8px;
    border-radius: 10px;

  }




</style>
