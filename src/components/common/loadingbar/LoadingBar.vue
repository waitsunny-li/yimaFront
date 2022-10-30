<template>
  <div class='loadingbar-inner' v-show="isShowBar">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"
let bar = ref<HTMLElement>();
let speed = ref<number>(1);
let timer = ref<number>(0)
let isShowBar = ref<boolean>(false)
const startLoading = () => {
  let barDom = bar.value as HTMLElement;
  speed.value = 1;
  isShowBar.value = true;
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 93) {
      speed.value++;
      barDom.style.width = `${speed.value}%`
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1;
      // isShowBar.value = false;
      window.cancelAnimationFrame(timer.value);
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100;
      dom.style.width = `${speed.value}%`
    })
    setTimeout(() => {
      isShowBar.value = false;
    }, 500)
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
    background-color: #409EFF;
  }
}
</style>