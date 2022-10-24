<template>
  <div class='menuImtes-inner'>
    <template v-for="(menu, key) in datas" :key="menu.path">
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
        <template #title>
          <i :class="'iconfont ' +  menu.meta.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
        <menu-item :datas="menu.children"></menu-item>
      </el-sub-menu>

      <el-menu-item v-else :index="menu.path">
        <i v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')" :class="menu.meta.icon"></i>
        <i :class="'iconfont ' +  menu.meta.icon"></i>
        <template #title>{{ menu.meta.title }}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script setup lang='ts'>

defineProps(["datas"])
</script>

<style lang='less' scoped>
.menuImtes-inner {

  .iconfont {
    margin-right: 8px
  }

  .el-menu-item {
    height: 40px;
  }

  .el-sub-menu {
    :deep(.el-sub-menu__title) {
      height: 44px;
    }
  }


  .is-active {
    background-color: #2866DE;
    border-radius: 4px;
  }
}
</style>