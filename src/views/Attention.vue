

//关注之后页面
<template>
  <div>
    <div class="connter">
      <figure>
        <div class="top">
          <img
            class="touxiang"
            src="http://hbimg.b0.upaiyun.com/f79744a6dbc178b67f90f618373158a16606bb7e1682c-OfkWVP_fw658"
            alt="">
          <span class="biaoqian">
          <p>vivi妈妈</p>
          <p>3秒前  宝宝2岁</p>
        </span>
        </div>
        <figcaption>

          <p>
            清晨起来打开窗，阳光美美哒，看着蝴蝶闻花香，风景美美哒，你在远处看着我，笑容美美哒，我的心就像朵花儿，开的美美哒，我爱你你爱我，感情美美哒，爸爸妈妈身体好，亲情美美哒...
          </p>
          <p>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567052143631&di=55a0daef5d8c9e627aa16ebb195b3c8f&imgtype=0&src=http%3A%2F%2Fwww.234.cn%2Fuploadfile%2Fimage%2F20130117162652_8978.jpg"
                 alt="">
          </p>
        </figcaption>

        <div class="bottom">
          <span @click="fxtap">分享</span>
          <span>评论</span>
          <span>
            <van-icon name="like-o"/>
            666
          </span>
        </div>
        <van-action-sheet v-model="show" title="分享">
          <share :config="config"></share>

        </van-action-sheet>
      </figure>


      <figure>
        <div class="top">
          <img
            class="touxiang"
            src="http://b-ssl.duitang.com/uploads/item/201708/09/20170809215520_Eju2A.jpeg"
            alt="">
          <span class="biaoqian">
          <p>yoyo妈妈</p>
          <p>6秒前  宝宝1岁半</p>
        </span>
        </div>
        <figcaption>
          <p>
            冰是水的凝固，山是岩浆的凝固，泪是情的凝固，爱是真诚的凝固,
            成长，便是接受一个不完美的自己和一个不理想的自己，也接受这个世界的不完美和不理想
            日出东海落西山，愁也一天，喜也一天
          </p>
          <p>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567052143631&di=a3b6d3aa4bbab13ae8392bf8f35f9cce&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F18%2F20141218110356_eYamW.jpeg"
                 alt="">
          </p>
        </figcaption>

        <div class="bottom">
          <span @click="fxtap">分享</span>
          <span>评论</span>
          <span>
            <van-icon name="like-o"/>
            5471
          </span>
        </div>
        <van-action-sheet v-model="show" title="分享">
          <share :config="config"></share>

        </van-action-sheet>
      </figure>

      <figure>
        <div class="top">
          <img
            class="touxiang"
            src="http://b-ssl.duitang.com/uploads/item/201801/04/20180104151700_Sxafw.jpeg"
            alt="">
          <span class="biaoqian">
          <p>tutu妈妈</p>
          <p>10秒前  宝宝3岁</p>
        </span>
        </div>
        <figcaption>

          <p>
            　当你能飞的时候就不要放弃飞；当你能梦的时候就不要放弃梦；当你能爱的时候就不要放弃爱,
            　人生的乍然离别，常常杀我们一个措手不及。有谁能为离别练习呢？倘若可以练习，便不会有那么多眼泪和思念。
          </p>
          <p>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567052143630&di=f744cfab50c3e1c779d8535d97c1e984&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170726%2F248f26cac5724906881b3cdd34290dbc_th.jpg"
                 alt="">
          </p>
        </figcaption>

        <div class="bottom">
          <span @click="fxtap">分享</span>
          <span>评论</span>
          <span>
            <van-icon name="like-o"/>
            9999
          </span>
        </div>
        <van-action-sheet v-model="show" title="分享">
          <share :config="config"></share>

        </van-action-sheet>
      </figure>

    </div>


  </div>
</template>

<script>
    export default {
        name: "Attention",
        data() {
            return {
                show: false,
                config: {
                    url: 'http://www.baidu.com', // 网址，默认使用 window.location.href
                    source: '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
                    title: 'hello', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
                    description: 'hi', // 描述, 默认读取head标签<meta name="description" content="PHP弱类型的实现原理分析" />
                    image: '', // 图片, 默认取网页中第一个img标签
                    sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
                    //disabled: ['google', 'facebook', 'twitter'], // 禁用的站点
                    wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
                    wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
                }

            }
        },
        methods: {
            fxtap() {
                this.show = !this.show
            }

        },

    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;

  }
  .connter{
    margin-bottom:40px;
    margin-top: 46px;
  }
  figure {
    width: 100%;
    height: 400px;
    background-color: #f4f4f4;
  }

  figure .touxiang {
    float: left;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin: 10px 10px;

  }

  figure .top {
    width: 100%;
    height: 100px;
    margin-top: 10px;

  }

  figure .top img {
    display: block;
    margin-top: 30px;
  }

  figure .biaoqian {
    float: left;
    margin-top: 45px;
    display: block;
    font-size: 14px;
  }

  figure figcaption {
    display: block;
    margin-top: 10px;
  }

  figure figcaption p {
    padding: 0 10px;
    font-size: 14px;
  }


  figure figcaption img {
    display: block;
    width: 340px;
    height: 150px;
    border-radius: 5px;
    margin: 10px auto 10px;
  }

  figure .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    line-height: 20px;
    margin:15px auto;
  }

  figure .bottom span {
    width: 50px;
    height: 20px;
    border-radius: 5px;
    background-color: #ffc731;
    color: white;
  }

  figure .bottom span i {
    font-size: 14px;
    font-weight: 700;
    color: white;
    line-height: 20px;

  }
  figure figcaption p{
    color:#999999;
    font-size: 14px;
  }

  .top .biaoqian p:nth-child(1){
    color: #2e2e2e;
    font-size: 16px;
  }
  .top .biaoqian p:nth-child(2){
    font-size: 12px;
  }
</style>
