

//优品
<template>
  <div>

    <div class="head">
      <van-nav-bar title="优品" left-text="返回" left-arrow
                   class="opct"
                   @click-left="onClickLeft"
                   @click-right="onClickRight"
                   :fixed="true"
      >
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white" class="banner">
      <van-swipe-item v-for="(item,i) in list" :key="i">
        <img :src="item.pimg"/>

      </van-swipe-item>
    </van-swipe>

    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />

    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

    <div class="nav">
      <figure @click="tap2()">
        <img src="http://img3.imgtn.bdimg.com/it/u=107289555,2916529422&fm=26&gp=0.jpg"
             alt="">
        <figcaption>
          <p>清洁</p>
        </figcaption>

      </figure>

      <figure @click="tap3()">
        <img src="http://photocdn.sohu.com/20150621/mp19641725_1434854584274_4.jpeg"
             alt="">
        <figcaption>
          <p>喂养</p>
        </figcaption>

      </figure>

      <figure @click="tap4()">
        <img src="https://img.alicdn.com/imgextra/i3/1600030558/O1CN0166sW5l1FzbYBRXnfX_!!1600030558.jpg_400x400.jpg"
             alt="">
        <figcaption>
          <p>童装</p>
        </figcaption>

      </figure>

      <figure @click="tap5()">
        <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/820521956/O1CN01y2PQot1QJtFEkNqwZ_!!820521956.jpg_430x430q90.jpg"
             alt="">
        <figcaption>
          <p>更多</p>
        </figcaption>

      </figure>


    </div>
    <div class="foot">
      <div class="foot-nav">
        <span>宝宝必备</span>
        <span @click="tap1()">All</span>
      </div>

      <div class="shop">
          <figure v-for="(item,i) in list" @click="tobuy(item.pid)">
            <img :src="item.pimg">
            <figcaption>
              <span>{{item.pname}}</span>
              <span>会员价￥{{item.pprice}}</span>
            </figcaption>

          </figure>

      </div>

    </div>

  </div>
</template>

<script>

    import axios from 'axios';

    const coupon = {
        available: 1,
        condition: '无使用门槛最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    };
    export default {
        name: "Goods",
        data() {
            return {
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon],
                showList: false,
                list:[],
                uid:20941,

            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            onClickRight() {
                console.log('aa')
            },
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            },
            tap1(){
                this.$router.push('/baobaobb')
            },
            tap2(){
                this.$router.push('/clean')
            },
            tap3(){
                this.$router.push('/feed')
            },
            tap4(){
                this.$router.push('/children')
            },
            tap5(){
                this.$router.push('/more')
            },
            tobuy(id){
              this.$router.push('/buy/'+id)
            },
        },
        mounted() {
            axios({
                url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
                params:{uid:this.uid,}
            }).then((data)=>{
                this.list=data.data.data
            })


        }

    }
</script>

<style scoped>

  .banner img {
    width: 100%;
    height: 100%;
  }

  .banner {
    margin-top: 46px;
    background-color: turquoise;
    height: 200px;
    width: 100%;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    margin-top: 10px;
  }

  .nav figure img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    border:1px solid #cceecc;
  }

  figure {
    text-align: center;
    width: 60px;
    height: 80px;
    margin: 0;
  }

  .foot .foot-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    line-height: 20px;

  }

  .foot .foot-nav span:nth-child(1) {
    margin-left: 10px;
    width:80px;
    height:20px;
    border-radius:5px;
    border:1px solid slategray;
  }
  .foot .foot-nav span:nth-child(2){
    margin-right:10px;
    width:80px;
    height:20px;
    border-radius:5px;
    border:1px solid slategray;
  }

  .shop{
    width: 100%;
    margin-top:10px ;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    flex-wrap:wrap;
  }
  .shop figure img{
    width:100px;
    height: 100px;
    border-radius:10px;
    border: 1px solid #cceecc;
  }
  .shop figure{
    width:100px;
    height:140px;
    margin-top: 10px;
  }
  .shop figure span{
    display: block;
  }


</style>
