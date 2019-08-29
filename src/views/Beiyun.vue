

//社区备孕
<template>
<div>
  <div class="connter">
    <figure>
      <div class="top">
        <img
          class="touxiang"
          src="http://b-ssl.duitang.com/uploads/item/201808/29/20180829143511_dbrfb.thumb.700_0.jpeg"
          alt="">
        <span class="biaoqian">
          <p>YouYou</p>
          <p>2秒前  1岁半</p>
        </span>
      </div>
      <figcaption>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae dicta dolorem eligendi fugit
          impedit iure laudantium libero, maxime optio quis totam ullam? Cumque fugit hic ipsum molestiae reiciendis,
          tempora!
        </p>
        <p>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567052143629&di=6623ebfe1bee1102f50cc5be59658322&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201505%2F31%2F20150531200425_uYVAE.thumb.700_0.jpeg"
               alt="">
        </p>
      </figcaption>

      <div class="bottom">
        <span @click="fxtap">分享</span>
        <span>评论</span>
        <span>
            <van-icon name="like-o"/>
            5567
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
        name: "Beiyun",
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
    margin: 30px auto;
  }
  figure {
    width: 100%;
    height: 400px;
    background-color: sandybrown;
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
  figure .biaoqian p:nth-child(1){
    color: #000;
    font-size: 16px;
  }
  figure .biaoqian p:nth-child(2){
    color: #353535;
    font-size: 12px;
  }


  figure figcaption {
    display: block;
    margin-top: 10px;
  }

  figure figcaption p {
    padding: 0 10px;
  }


  figure figcaption img {
    display: block;
    width: 340px;
    height: 150px;
    border-radius: 5px;
    margin: 20px auto;
  }

  figure .bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    line-height: 20px;
  }
  figure .bottom span{
    width:50px;
    height:20px;
    background-color:palegoldenrod;
    border-radius: 5px;
  }
  figure .bottom span i{
    font-size:14px;
    font-weight:700;
    color: violet;

  }
</style>
