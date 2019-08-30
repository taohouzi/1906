

//喂养
<template>
  <div>
    <div class="head">
      <van-nav-bar title="喂养" left-text="返回" left-arrow
                   class="opct"
                   @click-left="onClickLeft"
                   :fixed="true"
                   :border="false"

      >
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
    </div>


    <div class="content">
      <figure v-for="(item,i) in list" :key="i" @click="tobuy(item.pid)">
        <img :src="item.pimg" >
        <figcaption>
          <p>
            {{item.pname}}
          </p>
          <p>
            ￥{{item.pprice}}
          </p>
        </figcaption>
      </figure>

    </div>


  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Clean",
        data(){
            return{
                list:[],
                uid:20620

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
                params:{uid:this.uid,}
            }).then((data)=>{
                this.list=data.data.data
                console.log(this.list)
            })
        }
    }
</script>

<style scoped>

  .content * {
    margin: 0;
  }


  .content figure img {
    width: 150px;
    height: 150px;
    display: block;
    border: 1px solid #9F9F9F;
    border-radius: 8px;
    margin: 0 auto;
  }



  .content {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 46px;

  }

  .content figure p {
    text-align: center;

    line-height: 30px;
  }

  .content figure {
    margin-top: 20px;
  }
</style>
