

<template>

  <div class="goods">
    <van-nav-bar
      title="购物详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />

    <van-swipe class="goods-swipe">
      <van-swipe-item>
        <img :src="this.list.pimg">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{this.list.pname}}</div>
        <div class="goods-price">￥{{this.list.pprice}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>

      </van-cell>
    </van-cell-group>

    <van-notice-bar
      :text="list.pdesc"
      left-icon="volume-o"
    />

    <van-goods-action>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1456687610&site=qq&menu=yes">
      <van-goods-action-icon icon="chat-o">
        客服
      </van-goods-action-icon>
      </a>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="addCart">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="buy">
        立即购买
      </van-goods-action-button>
    </van-goods-action>

    <van-action-sheet v-model="show1" title="请使用支付宝支付" class="zhifu">
      <p>
        <img src="../assets/zxzzfb.jpg" alt="">
      </p>
    </van-action-sheet>
  </div>
</template>

<script>

    import axios from "axios";

    import {
        Tag,
        Col,
        Icon,
        Cell,
        CellGroup,
        Swipe,
        Toast,
        SwipeItem,
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton
    } from 'vant';

    export default {
        components: {
            [Tag.name]: Tag,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [GoodsAction.name]: GoodsAction,
            [GoodsActionIcon.name]: GoodsActionIcon,
            [GoodsActionButton.name]: GoodsActionButton
        },
        data() {
            return {
                list:[],
                uid:20997,
                pnum:1,
                show1:false,
            };
        },
        methods: {

            buy(){
              this.show1=true

            },

            onClickCart() {
                this.$router.push('/cartlist');
            },
            sorry() {
                Toast('暂无后续逻辑~');
            },
            onClickLeft() {
                this.$router.go(-1)
            },
            addCart(){
                axios({
                    url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
                    params:{uid:this.uid,pid:this.list.pid,pnum:this.pnum}
                }).then((data)=>{
                    if(data.status==200){
                        return Toast('添加购物车成功');
                    }else {
                        return Toast('添加失败请重试');
                    }
                })

            }
        },
        mounted() {
            axios({
                url:'http://jx.xuzhixiang.top/ap/api/detail.php',
                params:{id:this.$route.params.id}
            }).then((data)=>{

                this.list=data.data.data
            })


        }
    };
</script>

<style lang="less" scoped>
  .goods {
    padding-bottom: 50px;
    &-swipe {
      img {
        width: 100%;
        display: block;
        height: 450px;
      }
    }
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    &-tag {
      margin-left: 5px;
    }
  }
  .gundong{
    margin-top: 20px;
  }
  .zhifu p{
    width:375px;
    height: 100%;
  }
  .zhifu p img{
    width: 100%;
    height: 100%;
  }
</style>
