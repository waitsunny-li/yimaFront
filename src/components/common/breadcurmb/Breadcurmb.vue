<template>
  <div class='breadcurmb-inner'>
    <el-breadcrumb separator="/">
      <template v-for="breadcrumb in breadcurmStore.breadcurmList" :key="breadcrumb">
        <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang='ts'>
import {ref} from "vue"
import { useBreadcurmStore } from "@/store";
const breadcrumbList = ref<string[]>()
const breadcurmStore = useBreadcurmStore()
const changeBread = (newBl: string[]) => {
  breadcrumbList.value = newBl
}

defineExpose({
  changeBread
})
</script>

<style lang='less' scoped>
.breadcurmb-inner {
  width: 100%;
  padding: 13px 10px;
  background-color: #fff;
  box-shadow: 0px 1px 0px 0px #e9e9e9;
  box-sizing: border-box;
}
</style>