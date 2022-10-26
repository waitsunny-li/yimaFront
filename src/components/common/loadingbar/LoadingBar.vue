<template>
  <div class='loadingbar-inner'>
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue"
let bar = ref<HTMLElement>();
let speed = ref<number>(1);
let timer = ref<number>(0)
const startLoading = () => {
  let barDom = bar.value as HTMLElement;
  speed.value = 1;
  console.log(barDom)
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value++;
      barDom.style.width = `${speed.value}%`
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = `${speed.value}%`
    })
  }, 500)

}

defineExpose({
  startLoading,
  endLoading
})
</script>

<style lang='less' scoped>
.loadingbar-inner {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2px;
  z-index: 100;

  .bar {
    height: 100%;
    width: 0;
    background-color: red;
  }
}
</style>