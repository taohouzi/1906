//购物车
<template>

  <div>
    <van-nav-bar
      title="购物详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <h2 v-if="show">购物车空空如也.................................</h2>
    <div class="connter">
      <div class="main" v-for="(item,i) in list">
        <van-button class="delete" type="danger" size="mini" @click="detele(item)">删除</van-button>
        <van-checkbox v-model="item.checked" class="checkbox" @click="danxuan(i)">
        </van-checkbox>
        <van-card
          class="card"
          :price="item.pprice"
          :desc="item.pdesc"
          :title="item.pname"
          :thumb="item.pimg"
        />
        <div class="footer">

          <van-stepper
            @change="updata(item)"
            v-model="item.pnum"
            input-width="40px"
            button-size="18px"
          />
        </div>
      </div>
    </div>



    <van-submit-bar
      class="foot"
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="quanxuan()">
        全选
      </van-checkbox>

    </van-submit-bar>

    <van-action-sheet v-model="show1" title="请使用支付宝支付" class="zhifu">
      <p>
        <img src="../assets/zxzzfb.jpg" alt="">
      </p>
    </van-action-sheet>
  </div>

</template>

<script>

    import axios from "axios";

    export default {
        name: 'Cartlist',
        data() {
            return {
                checked: false,
                list: [],
                uid: 20997,
                show:'',
                show1:false,

            };
        },
        computed: {
            totalPrice() {

                let cont = 0;

                //计算属性 价格乘以数量
                this.list.forEach(data => {
                    if (data.checked) {
                        cont += Number(data.pprice) * Number(data.pnum)
                    }

                })
                return cont * 100

            },

        },
        methods: {

            detele(i){
                axios({
                    url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
                    params:{uid:i.uid,pid:i.pid}
                }).then((data)=>{
                    axios({
                        url: 'http://jx.xuzhixiang.top/ap/api/cart-list.php',
                        params: {id: this.uid}
                    }).then((data) => {
                        let arr = data.data.data
                        arr.map((item) => {
                            item.checked = false
                        })
                        this.list = arr
                        if(this.list.length>0){
                            this.show=false
                        }else {
                            this.show=true
                        }
                    })

                })
            },

            onSubmit() {

                    this.show1=true


            },
            onClickLeft() {
                this.$router.go(-1)
            },
            quanxuan() {
                if (!this.checked) {
                    this.list.map((item) => {
                        item.checked = true
                    })
                } else {
                    this.list.map((item) => {
                        item.checked = false
                    })
                }
            },
            danxuan(i) {
                this.list[i].checked = !this.list[i].checked
                let arr = this.list.filter(item => item.checked == true)
                if (arr.length == this.list.length) {
                    this.checked = true
                } else {
                    this.checked = false
                }


            },
            updata(i) {
                //console.log(i.pid)
                axios({
                    url: 'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
                    params: {uid: i.uid, pid: i.pid, pnum: i.pnum}
                }).then((data) => {

                })
            }
        },
        mounted() {
            axios({
                url: 'http://jx.xuzhixiang.top/ap/api/cart-list.php',
                params: {id: this.uid}
            }).then((data) => {
                let arr = data.data.data
                arr.map((item) => {
                    item.checked = false
                })
                this.list = arr
                if(this.list.length>0){
                    this.show=false
                }else {
                    this.show=true
                }
            })
        }
    };
</script>

<style scoped>

  .connter {
    margin-top: 46px;
  }

  .connter * {
    margin: 0;
  }

  .main {
    height: 105px;
    background-color: #fafafa;
    position: relative;
    width: 100%;
    margin-top:10px;
  }

  .main .checkbox {
    display: block;
    float: left;
    margin: 45px 0 0 10px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 50%;
  }

  .main .card {
    width: 90%;
    float: right;
    margin: 0;
    padding: 0;
  }

  .main .footer {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  .foot {
    border-top: 1px solid #9F9F9F;
    opacity: 0.7;
  }
  .delete{
    position: absolute;
    z-index: 2;
    top:72%;
    left: 50%;
  }
  h2{
    margin:50% auto;
    text-align: center;
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
