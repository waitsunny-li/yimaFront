<template>
  <div class='mobile-preview-inner'>
    <h3 class="header-title">预览活码落地页</h3>
    <div class="mobile-con">
      <div class="title">
        <span class="title-span">王者小队</span>
      </div>
      <div class="img">
        <div class="maincode">
          <div class="img-header">
            <div class="qrcode-header"><img src="//s.weituibao.com/static/1559543274167/head-portrait.png"></div>
            <div class="qrcode-name">群名称</div>
          </div>
          <img class="qrcode-touth qrcode-img-1"
            src="http://oss-cn-hangzhou.aliyuncs.com/wxb-marketing/wxb-marketing/0-qrcode-202211-09-1668003205-55997-5e346b5e.png" />
          <!-- <div class="exhibition-code">二维码展示区</div> -->
        </div>
      </div>
    </div>
    <div class="bottom-desc">仅预览第一张二维码情况</div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='less' scoped>
.mobile-preview-inner {
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  .mobile-con {
    background-image: url(https://s.weituibao.com/static/1560928196806/mobileBg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 200px;
    min-height: 366px;
    padding: 0 12px 5px;
    box-sizing: border-box;

    .title {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-size: 10px;
      height: 34px;
      text-align: center;
      position: relative;

      .title-span {
        position: absolute;
        top: 14px;
      }
    }

    .img {
      min-height: 210px;
      background: #FFFFFF;
      box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 5%);
      padding: 10px 10px 16px;
      margin-top: 20px;
      text-align: center;
      position: relative;

      .img-header {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;

        .qrcode-header {
          width: 30px;
          height: 30px;

          img {
            width: 100%;
            height: 100%;
            border-style: none;
          }
        }

        .qrcode-name {
          width: 120px;
          height: 30px;
          line-height: 1.3;
          margin-left: 6px;
          font-family: PingFangSC-Medium;
          color: #444444;
          letter-spacing: 0.2px;
          text-align: left;
          font-size: 12px;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      .exhibition-code {
        margin-top: 69px;
        color: #aaaaaa;
      }

      .qrcode-img-1 {
        display: block;
        width: 138px;
        height: 138px;
        margin: 16px auto 0;
      }
    }
  }


  .bottom-desc {
    text-align: center;
    line-height: 1;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>