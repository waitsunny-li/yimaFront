<template>
  <div class='addcode-innter'>
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
        <el-steps :active="activeNum" finish-status="success" simple style="margin-top: 20px">
          <el-step v-for="title in stepList" :title="title" />
        </el-steps>
      </div>
    </el-card>
    <div class="next-bottom">
      <el-button @click="preBtn">上一步</el-button>
      <el-button type="primary" @click="nextBtn">下一步</el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const stepList = ref<string[]>(["使用须知", "群活码基本信息", "添加微信群二维码", "生成活码"])
const activeNum = ref<number>(1)

const preBtn = () => {
  activeNum.value--;
  if (activeNum.value == 0) {
    activeNum.value = 1
  }
}
const nextBtn = () => {
  activeNum.value++;
  if (activeNum.value > 4) {
    activeNum.value = 1
  }
}
</script>

<style lang='less' scoped>
.addcode-innter {

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
  }
}
</style>