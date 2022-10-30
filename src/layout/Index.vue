<template>
  <div class='layout-wrap'>
    <LoadingBar></LoadingBar>
    <el-container class="layout">
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <MenuBar></MenuBar>
        </el-aside>
        <el-main class="main">
          <Breadcurmb class="breadcurmb-wrap" />
          <div class="content-wrap">
            <router-view #default="{ route, Component }">
              <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
                <component :is="Component"></component>
              </transition>
            </router-view>
            <!-- <router-view></router-view> -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import Header from "@/layout/header/Header.vue"
import MenuBar from "@/layout/menu/MenuBar.vue"
import Breadcurmb from "@/components/common/breadcurmb/Breadcurmb.vue";
import LoadingBar from "@/components/common/loadingbar/LoadingBar.vue"
</script>

<style lang='less' scoped>
.layout {
  height: 100vh;

  .header {
    background-color: #fff;
    height: 44px;
    box-shadow: 1px 0px 8px 0px rgb(0 0 0 / 10%);
    position: relative;
    z-index: 100;
  }

  .aside {
    width: auto;
    background-color: #222832;
  }

  .main {
    background-color: #ececec;
    padding: 0;
    position: relative;

    .breadcurmb-wrap {
      position: absolute;
    }

    .content-wrap {
      padding: 0 10px;
      padding-top: 10px;
      margin-top: 40px;
      height: calc(100vh - 154px);
      overflow-y: auto;
    }
  }
}
</style>