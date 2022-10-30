<template>
  <div class='addkcode-inner'>
    <StepModel @on-change="listenStepChange" :step-list="stepTitleList">
      <template #content>
        <component :is="curComponent.component"></component>
      </template>
    </StepModel>
  </div>
</template>

<script setup lang='ts'>
import { markRaw, ref, reactive } from 'vue';
import StepModel from "@/components/content/stepmodel/StepModel.vue"
import Step1 from './addsteps/Step1.vue';
import Step2 from './addsteps/Step2.vue';
import Step3 from './addsteps/Step3.vue';
import Step4 from './addsteps/Step4.vue';
import { computed } from '@vue/reactivity';

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
    name: "群活码基本信息",
    component: markRaw(Step2)
  },
  {
    name: "添加微信群二维码",
    component: markRaw(Step3)
  },
  {
    name: "生成活码",
    component: markRaw(Step4)
  }
])
const curComponent = reactive<StepComponent>({
  name: stepComponentList[0].name,
  component: stepComponentList[0].component
})

const stepTitleList = computed<string[]>(() => {
  return stepComponentList.map(item => item.name)
})

const listenStepChange = (index: number) => {
  console.log("====addgrcode===> ", index - 1)
  curComponent.name = stepComponentList[index - 1].name
  curComponent.component = stepComponentList[index - 1].component
}
</script>

<style lang='less' scoped>

</style>