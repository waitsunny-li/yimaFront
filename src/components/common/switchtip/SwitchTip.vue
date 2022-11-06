<template>
  <div class='switchtip-inner'>
    <div class="lable">{{lable}}</div>
    <el-tooltip class="tip-icon" effect="dark" placement="top" v-if="tipContent">
      <template #content>
        <div class="tip-content" v-html="tipContent"></div>
      </template>
      <el-icon color="#ccc" class="icon"><QuestionFilled /></el-icon>
    </el-tooltip>
    <el-switch v-model="value" class="switch" inline-prompt :active-icon="activeIcon" :inactive-icon="inactiveIcon" />
  </div>
</template>

<script setup lang='ts'>
import { QuestionFilled } from '@element-plus/icons-vue'
import { ref, Component, ComputedOptions, MethodOptions } from "vue"

type Props = {
  value?: boolean
  lable?: string
  tipContent?: string
  activeIcon?: string | Component<any, any, any, ComputedOptions, MethodOptions> | null | undefined | object
  inactiveIcon?: string | Component<any, any, any, ComputedOptions, MethodOptions> | null | undefined | object
}
const props = withDefaults(defineProps<Props>(), {
  value: false,
  tipContent: "",
})

const value = ref<boolean>(false)

</script>

<style lang='less' scoped>
.switchtip-inner {
  display: flex;
  align-items: center;
  color: #444;
  font-size: 14px;

  .lable {
    margin-right: 4px;
  }

  :deep(.icon) {
    cursor: pointer;
    font-size: 18px;
  }

  .switch {
    margin-left: 4px;
  }
}

.tip-content {
  width: 220px;
}
</style>