<template>
  <div class='preview-tip-inner'>
    <div class="title">{{ content }}</div>
    <el-popover :placement="placement" trigger="hover" class="preview-popover" :width="popoverWidth">
      <span class="tips-content">
        <img :style="`width:${imgWidth}px;height:${imgHeight}px`" class="tip-img" :src="url" alt="">
      </span>
      <template #reference>
        <div class="preview-btn" v-if="isShowBtn">
          {{ btnName }}
        </div>
        <div v-else></div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang='ts'>
type Pros = {
  content: string
  popoverWidth?: number
  imgWidth?: number
  imgHeight?: number
  placement?: string
  isShowBtn?: boolean
  btnName?: string
  top?: string
  bottom?: string
  url?: string
}

withDefaults(defineProps<Pros>(), {
  isShowBtn: true,
  btnName: "预览"
})
</script>

<style lang='less' scoped>
.preview-tip-inner {
  display: flex;
  font-size: @font-size;
  align-items: center;
  margin-top: v-bind(top);
  margin-bottom: v-bind(bottom);

  .title {
    font-family: 'PingFangSC-Regular';
    color: #999999;
    font-style: normal;
    line-height: 1.5;
  }

  .preview-btn {
    color: #108ee9;
    cursor: pointer;
    margin-left: 10px;
    line-height: 1;
  }
}

.tips-content {
  display: block;

  .tip-img {}
}
</style>