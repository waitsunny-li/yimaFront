<template>
  <div class='step1-inner'>
    <div class="pannel-title">群活码</div>
    <div class="pannel-con">
      <p class="mb1">
        1. 群活码并<strong>未改变微信原有规则</strong>，只是提供了一个固定不变的入口二维码，并根据扫码人数自动切换群二维码，同时统计分析扫码数据。
      </p>
      <p class="mb1">
        2.<strong>活码长期有效</strong>可保证引流获客活动不中断。通过后台上传多个群二维码（不同的群）和及时更换群二维码，突破微信群二维码7天有效期，以及扫码入群200人的限制。
      </p>
      <p class="mb1">
        3. 微信群二维码上传满7天且扫码人数未达到预设阈值的，系统会<strong>提前两天通过服务号发送群二维码即将到期提醒</strong>，收到提醒后请及时更新群二维码，避免因群二维码过期无法进群。
      </p>
      <p class="mb1">
        4.通过活码创建的活动需要两次扫描，第一次是扫描活码（也可以通过点击活码链接的方式，例如公众号菜单、自动回复中设置的超链接等）打开活码落地页并显示群二维码，第二次是长按识别真正的微信群二维码，最后点击入群。</p>
      <p>
        5. 根据<a
          href="https://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification"
          target="_blank">《微信外链管理规范》</a>，违规内容、不合理使用活码、用户投诉等都可能导致活码域名被封，且申诉有可能无法解封，具体以官方处理结果为准，无法更换活码的（例如用于印刷），建议购买高级版套餐（独立域名，不受其他用户影响）。
      </p>
    </div>
  </div>
  <WarnText></WarnText>
</template>

<script setup lang='ts'>
import WarnText from '@/components/content/alarmtext/WarnText.vue';
</script>

<style lang='less' scoped>
.step1-inner {
  margin-top: 20px;
  border: 1px solid #E9E9E9;

  .pannel-title {
    line-height: 35px;
    background: #F7F7F7;
    border-bottom: 1px solid #E9E9E9;
    padding: 0 10px;
    font-size: 14px;
  }

  .pannel-con {
    padding: 15px 20px;
    font-size: 14px;

    p {
      color: #666;
      line-height: 22px;

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

    .mb1 {
      margin-bottom: 10px;
    }
  }
}
</style>