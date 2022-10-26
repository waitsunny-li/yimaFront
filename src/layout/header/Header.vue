<template>
  <div class='header-inner'>
    <div class="logo"></div>
    <div class="right-wrap">
      <!-- 使用帮助 -->
      <a class="h-item">
        <i class="iconfont icon-yima-bangzhu"></i>
        <p>使用帮助</p>
      </a>
      <!-- 联系客服 -->
      <a class="h-item">
        <el-popover placement="bottom" trigger="hover" class="ke-popover" :width="200">
          <div class="ke-content">
            <div class="ke-title">联系客服</div>
            <img class="ke-img"
              src="http://wxb-marketing.oss-cn-hangzhou.aliyuncs.com/wxb-marketing/0-qrcode-202206-09-1654757887-85947-abd3b6c6.jpg"
              alt="">
            <p>扫上面二维码，加客服微信</p>
          </div>
          <template #reference>
            <div class="ke-wrap">
              <i class="iconfont icon-yima-kefu1"></i>
              <p>客服</p>
            </div>
          </template>
        </el-popover>
      </a>
      <!-- 价格 -->
      <a class="h-item">
        <i class="iconfont icon-yima-gouwu"></i>
        <p>价格</p>
      </a>
      <!-- 账户 -->
      <a class="h-item">
        <i class="iconfont icon-yima-zhanghu"></i>
        <p>13425324</p>
      </a>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='less' scoped>
.header-inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 100px;
    background-color: rgb(52, 36, 36);
  }

  .right-wrap {
    display: flex;
    height: 100%;

    .h-item {
      display: flex;
      align-items: center;
      margin-left: 30px;
      cursor: pointer;

      .ke-wrap {
        display: flex;
        height: 100%;
        align-items: center;
      }

      i {
        color: rgb(196, 196, 196);
      }

      p {
        margin-left: 5px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
      }
    }
  }
}

.ke-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  .ke-title {
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #333333;
    font-weight: normal;
    margin: 4px 0;
  }

  .ke-img {
    width: 141px;
    height: 141px;
  }
}
</style>