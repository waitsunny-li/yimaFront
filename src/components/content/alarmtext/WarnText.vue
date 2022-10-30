<template>
  <div class='warntext-inner'>
    <div class="alert-tit">
      <i class="iconfont icon-yima-tixingshixin"></i>温馨提示
    </div>
    <div class="alert-description">
      <div>
        禁止任何违法、违规用途（含微信诱导分享/关注/集赞/红包/网络兼职/刷单诈骗等）。所有活码都有专人审核。一经发现即关闭访问，停止分配域名。情节严重者将封停账户。附：<a
          href="https://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification"
          target="_blank">微信外链管理规范</a>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='less' scoped>
.warntext-inner {
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 2px;
  color: #555666;
  margin-top: 20px;

  .alert-tit {
    font-size: 16px;
    color: #222333;
    font-family: PingFangSC-Medium;
    margin-bottom: 8px;

    .iconfont {
      color: #ffa39e;
      font-size: 18px;
      margin-right: 10px;
    }
  }

  .alert-description {
    font-size: 14px;
    line-height: 22px;
    margin-left: 28px;

    a {
      color: #108ee9;
      background: transparent;
      text-decoration: none;
      outline: none;
      cursor: pointer;
      -webkit-transition: color .3s ease;
      transition: color .3s ease;
    }
  }
}
</style>