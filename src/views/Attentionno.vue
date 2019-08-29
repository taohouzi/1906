//关注之前子组件
<template>
  <div>
    <h3 class="zgz">关注你感兴趣的人</h3>

    <div class="zcon">
      <ul>
        <li>
          <img @click="tap1()" alt="" src="http://img5.imgtn.bdimg.com/it/u=2000586608,3862686451&fm=26&gp=0.jpg">
          <van-icon class="cont" name="success" v-if="show1"/>
          <p>我有一只猫</p>
        </li>
        <li>
          <img @click="tap2()" alt=""
               src="http://img1.2345.com/duoteimg/qqTxImg/10/73b3e24d58747f7a9a0bfde0943b1d7b.jpg">
          <van-icon class="cont" name="success" v-if="show2"/>
          <p>萌萌哒</p>
        </li>
        <li>
          <img @click="tap3()" alt="" src="http://www.qqtouxiang.com/d/file/xiaohai/2018-11-07/9b0b29b357ef02011d379adaa8765cbc.jpg">

          <van-icon class="cont" name="success" v-if="show3"/>
          <p>我有一只狗</p>
        </li>
        <li>
          <img @click="tap4()" alt=""
               src="http://n.sinaimg.cn/sinacn20108/480/w640h640/20181219/10d2-hqhtqsq3492370.jpg">
          <van-icon class="cont" name="success" v-if="show4"/>
          <p>嘟嘟脸</p>
        </li>
        <li>
          <img @click="tap5()" alt="" src="http://img1.gtimg.com/sh/pics/hv1/192/146/2214/144002772.jpeg">

          <van-icon class="cont" name="success" v-if="show5"/>
          <p>小虎牙</p>
        </li>

        <li>
          <img @click="tap6()" alt="" src="http://img1.2345.com/duoteimg/qqTxImg/11/2014062008480399409.jpg">

          <van-icon class="cont" name="success" v-if="show6"/>
          <p>小土猪</p>
        </li>

        <li>
          <img @click="tap7()" alt="" src="http://www.qqtouxiang.com/d/file/xiaohai/2018-11-07/7b3ac4592759df2e4f687ba1e7e9c3b3.jpg">

          <van-icon class="cont" name="success" v-if="show7"/>
          <p>水晶娃娃</p>
        </li>

        <li>
          <img @click="tap8()" alt="" src="http://www.qqtouxiang.com/d/file/xiaohai/2018-11-07/808266019d8700cc6669e27414571075.jpg">

          <van-icon class="cont" name="success" v-if="show8"/>
          <p>小猪佩奇</p>
        </li>
      </ul>

    </div>

    <div class="footer">
      <h4 @click="tapall()">一键关注</h4>
      <h4 @click="tapd()">一键取消关注</h4>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Attentionno",
        data() {
            return {
                shows: true,
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                show6: false,
                show7: false,
                show8: false,
            }
        },
        methods: {
            tap1() {
                this.show1 = !this.show1
            },
            tap2() {
                this.show2 = !this.show2
            },
            tap3() {
                this.show3 = !this.show3
            },
            tap4() {
                this.show4 = !this.show4
            },
            tap5() {
                this.show5 = !this.show5
            },
            tap6() {
                this.show6 = !this.show6
            },
            tap7() {
                this.show7 = !this.show7
            },
            tap8() {
                this.show8 = !this.show8
            },
            tapall() {
                this.show1 = true
                this.show2 = true
                this.show3 = true
                this.show4 = true
                this.show5 = true
                this.show6 = true
                this.show7 = true
                this.show8 = true
                this.$router.push('/attention')


            },
            tapd() {
                this.show1 = false
                this.show2 = false
                this.show3 = false
                this.show4 = false
                this.show5 = false
                this.show6 = false
                this.show7 = false
                this.show8 = false

            }

        }
    }
</script>

<style scoped>
  .zgz {
    font-weight: normal;
    display: block;
    text-align: center;
    line-height: 24px;
    margin: 10px auto;
    font-size: 10px;
    color: #A4A2A2;
    background: ghostwhite;
    width: 100px;
    height: 24px;
    border-radius: 10px;

  }

  .zcon {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 480px;
    background: lightblue;


  }

  .zcon ul li {
    float: left;
    text-align: center;
    margin: 10px 25px;
    position: relative;
  }

  .zcon ul li .cont {
    width: 10px;
    height: 10px;
    background: lightcoral;
    border-radius: 50%;
    text-align: center;
    color: white;
    position: absolute;
    left: 60px;
    top: 4px;
  }


  .zcon img {
    width: 75px;
    height: 75px;
    display: block;
    border-radius: 50%;

  }

  .footer {
    text-align: center;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }

  .footer h4 {
    font-weight: normal;
    color: #646464;
    width: 130px;
    height: 24px;
    background-color: ghostwhite;
    text-align: center;
    line-height: 24px;
    margin: 10px auto;
    border-radius: 10px;
    border-color: white;

  }
</style>
