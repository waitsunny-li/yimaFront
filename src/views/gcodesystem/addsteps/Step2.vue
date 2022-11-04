<template>
  <div class='step2-inner'>
    <BasicInfoForm :basic-form="qcodeBasicInfoStore.basicInfo"/>
  </div>
</template>

<script setup lang='ts'>
import BasicInfoForm from '@/components/content/basicinfo/BasicInfo.vue';
import { useQcodeBasicInfoStore } from '@/store';
const qcodeBasicInfoStore = useQcodeBasicInfoStore()
</script>

<style lang='less' scoped>
.step2-inner {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>