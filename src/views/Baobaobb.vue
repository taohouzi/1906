

//宝宝必备
<template>
<div>
  <div class="head">
    <van-nav-bar title="宝宝必备" left-text="返回" left-arrow
                 class="opct"
                 @click-left="onClickLeft"
                 :fixed="true"
                 :border="false"

    >
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
  </div>

  <div class="connter">
    <figure v-for="(item,i) in list" @click="tobuy(item.pid)">
      <img :src="item.pimg">
      <div class="txt">
        <h3>{{item.pname}}</h3>
        <p>会员价：￥{{item.pprice}}</p>
        <p>
          {{item.pdesc}}
        </p>
      </div>
      <span>{{i+1}}</span>
    </figure>

  </div>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Baobaobb",
        data(){
            return{
                list:[],
                uid:20948,
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            tobuy(id){
                this.$router.push('/buy/'+id)
            },

        },
        mounted() {
            axios({
                url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
                params:{uid:this.uid}
            }).then((data)=>{
                this.list=data.data.data

            })
        }
    }
</script>

<style scoped>

    .connter{
      display: flex;
      margin-top:60px;
      flex-direction: column;
      align-items: center;
      margin-bottom:10px;

    }
    .connter *{
      margin: 0;
      padding: 0;
    }

    .connter figure{
      width: 347px;
      height:160px;
      background-color: #cceecc;
      position: relative;
      border-radius:10px;
      margin-top:10px;

  }
    .connter figure img{
      width: 110px;
      height:110px;
      display: block;
      float: left;
      margin:20px 10px;
    }
    .connter figure .txt{
      margin-top:20px;
      line-height: 25px;
    }
    .connter figure .txt p:last-child{
      line-height: normal;
    }
    .connter figure span{
      position:absolute;
      display: block;
      width:30px;
      height:30px;
      border:1px solid #9F9F9F;
      border-radius:50%;
      display: flex;
      justify-content: center;
      align-items: center;
      top:10px;
      legt:10px
    }

</style>
