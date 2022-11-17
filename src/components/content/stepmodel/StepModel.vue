<template>
  <div class='stepmodel-inner'>
    <el-card class="box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span>创建群活码</span>
          <div>
            <el-button class="button" text>未购买会员</el-button>
            <el-button type="primary">立即购买</el-button>
          </div>
        </div>
      </template>
      <div class="content-wrap">
        <el-steps :active="activeNum" finish-status="success" simple style="margin-top: 20px;margin-bottom: 20px;">
          <el-step v-for="title in stepList" :title="title" />
        </el-steps>

        <!-- 内容 -->
        <slot name="content"></slot>
      </div>
    </el-card>
    <div class="next-bottom">
      <template v-if="activeNum == 1">
        <el-button type="primary" @click="nextBtn" size="large" :loading="loading">我已详细阅读，下一步</el-button>
      </template>
      <template v-else>
        <el-button @click="preBtn" size="large">上一步</el-button>
        <el-button type="primary" @click="nextBtn" size="large">下一步</el-button>
      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import {Time} from "@/utils/index"
type Props = {
  stepList: string[]
  activeNum: number
}
const props = defineProps<Props>()
const emit = defineEmits(["onPre", "onNext"])

const loading = ref<boolean>(false)

const preBtn = () => {
  emit("onPre")
}
const nextBtn = async () => {
  if (props.activeNum === 1) {
    loading.value = true
    await Time.sleep(200)
    loading.value = false
  }
  emit("onNext")
}
</script>

<style lang='less' scoped>
.stepmodel-inner {

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .next-bottom {
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid @border-voice-color;
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    :deep(.el-steps) {
      // width: 920px;
      width: 67%;
      min-width: 800px;
      .el-step {
        .is-success {
          color: @theme-color;
          border-color: @theme-color;

          .is-status {
            color: @theme-color;
          }
        }
        .el-step__title {
          font-size: 14px;
        }
      }
    }
  }
}
</style>