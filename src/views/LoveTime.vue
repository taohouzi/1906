<template>
  <div>
<<<<<<< HEAD
    <!--上-->
    <div class="top">
      <div class="top-s">
        <p>宝宝</p>
      </div>
      <div class="top-z">
        <div id="tupian">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3022017072,630429546&fm=26&gp=0.jpg"
          />
        </div>
      </div>
      <div class="top-x">
        <p>ABC</p>
        <p>1个月2天</p>
      </div>
    </div>

    <!--中-->
    <div class="center">
      <ul>
        <li @click="photo()">云相册</li>
        <li @click="record()">成长记录</li>
        <li @click="all()">成就</li>
        <!-- <li @click="friends()">亲友团</li> -->
      </ul>
    </div>

    <!--下拉刷新-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--下-->
      <div class="foot">
        <div :style="{ height: '500px' }" class="xian">
          <van-slider v-model="value" vertical />
        </div>
        <div class="foot-rt">
          <div>
            <img src="http://img.mp.itc.cn/upload/20161104/05a162f5015b4096b06d893b4ad6e6a4_th.jpg" />
          </div>
          <div>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567054390580&di=0d58221c26d1646fb9bd90264edf4d9d&imgtype=0&src=http%3A%2F%2Ftyunfile.71360.com%2FUpLoadFile%2Fkmbb%2F2019%2F2%2F636863448913171621%2F6368634489131716212885076.jpg"
            />
          </div>
          <div></div>
          <span @click="tap()">
            +
            <div v-if="!show" @click="tiao()">照片视频</div>
            <div v-if="!show" @click="tiao()">成就</div>
            <div v-if="!show" @click="tiao()">身高体重</div>
          </span>
        </div>
      </div>
    </van-pull-refresh>
=======

    <h2>时光记</h2>
>>>>>>> zxz
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "LoveTime",
  data() {
    return {
      show: true,
      value: 0,
      isLoading: false
    };
  },
  methods: {
    tap() {
      this.show = !this.show;
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    photo() {
      this.$router.push("/Photo");
    },
    record() {
      this.$router.push("/Record");
    },
    all() {
      this.$router.push("/All");
    },
    // friends(){
    // 	this.$router.push('/Friends')
    // },
    tiao() {
      this.$router.push("/Lead");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.top {
  height: 247px;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567054056012&di=28d05b2b0e50b562749ad73b44afbadd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F25%2F20140725132352_fdj54.jpeg");
}

.top-s {
  height: 40px;
}

.top-s p {
  float: right;
  background: white;
  width: 55px;
  height: 30px;
  line-height: 30px;
  margin: 3px 7px 0 0;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(255, 255, 255, 0);
}

.top-z {
  height: 130px;
  position: relative;
}
#tupian {
  position: absolute;
  top: 17px;
  left: 39%;
  width: 85px;
  height: 85px;
  text-align: center;
  line-height: 85px;
  font-size: 16px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
}
#tupian img {
  width: 85px;
  height: 85px;
  display: block;
}

.top-x {
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-x p {
  width: 90px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: white;
}

.center {
  height: 42px;
}
.center ul {
  height: 42px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.foot {
  height: 400px;
  position: relative;
}
.xian {
  position: absolute;
  left: 15px;
  top: 10px;
}

.foot-rt {
  height: 400px;
  width: 330px;
  margin-right: 15px;
  float: right;
}
.foot-rt div {
  height: 160px;
  width: 375px;
  background: #f2f2f2 100%;
  margin-top: 20px;
  border-radius: 5px;
}
.foot-rt div img {
  height: 160px;
  width: 375px;
}

.foot-rt span {
  position: absolute;
  right: 20px;
  top: 260px;
  font-size: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  text-align: center;
  line-height: 40px;
}
.foot-rt span div {
  font-size: 12px;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  line-height: 50px;
}
.foot-rt span div:nth-child(1) {
  position: absolute;
  left: -70px;
  top: -20px;
}
.foot-rt span div:nth-child(2) {
  position: absolute;
  left: -50px;
  top: -70px;
}
.foot-rt span div:nth-child(3) {
  position: absolute;
  left: 0;
  top: -90px;
}
=======
    export default {
        name: "LoveTime"
    }
</script>

<style scoped>

>>>>>>> zxz
</style>
