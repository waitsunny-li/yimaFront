<template>
  <div class='addkcode-inner'>
    <StepModel :step-list="stepTitleList" :active-num="activeNum" @on-next="nextBtn" @on-pre="preBtn">
      <template #content>
        <keep-alive>
          <component :is="curComponent.component"></component>
        </keep-alive>
      </template>
    </StepModel>
  </div>
</template>

<script setup lang='ts'>
import { markRaw, ref, reactive, onUnmounted } from 'vue';
import StepModel from "@/components/content/stepmodel/StepModel.vue"
import Step1 from './addsteps/Step1.vue';
import Step2 from './addsteps/Step2.vue';
import Step3 from './addsteps/Step3.vue';
import Step4 from './addsteps/Step4.vue';
import { computed } from '@vue/reactivity';
import { useKcodeBasicInfoStore } from "@/store/index"

type StepComponent = {
  name: string
  component: any
}
const stepComponentList = reactive<StepComponent[]>([
  {
    name: "使用须知",
    component: markRaw(Step1)
  },
  {
    name: "客服码基本信息",
    component: markRaw(Step2)
  },
  {
    name: "添加个人微信二维码",
    component: markRaw(Step3)
  },
  {
    name: "生成活码",
    component: markRaw(Step4)
  }
])

const activeNum = ref<number>(2)

const curComponent = computed<StepComponent>(() => {
  return {
    name: stepComponentList[activeNum.value - 1].name,
    component: stepComponentList[activeNum.value - 1].component
  }
})

const stepTitleList = computed<string[]>(() => {
  return stepComponentList.map(item => item.name)
})

const kcodeBasicInfoStore = useKcodeBasicInfoStore()
onUnmounted(() => {
  kcodeBasicInfoStore.$reset()
})

// 下一步
const nextBtn = async () => {
  if (activeNum.value === 4) return;
  if (activeNum.value == 2) {
    let valid = await kcodeBasicInfoStore.valid()
    if (valid) {
      activeNum.value++
      console.log("基本信息==================> ", kcodeBasicInfoStore.basicInfo);
    }
    return
  } else {
    activeNum.value++
  }
}

// 上一步
const preBtn = () => {
  if (activeNum.value === 1) return;
  activeNum.value--
}
</script>

<style lang='less' scoped>

</style>