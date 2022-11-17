<template>
  <div class='step2-inner'>
    <BasicInfoForm :basic-form="kcodeBasicInfoStore.basicInfo" type="kcode"/>
  </div>
</template>

<script setup lang='ts'>
import BasicInfoForm from '@/components/content/basicinfo/BasicInfo.vue';
import { useKcodeBasicInfoStore } from '@/store'

const kcodeBasicInfoStore = useKcodeBasicInfoStore();
</script>

<style lang='less' scoped>

</style>