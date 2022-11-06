<template>
  <div class='upload-avatar-inner'>
    <el-popover :visible="visible" placement="right" trigger="click" :width="width">
      <div class="upload-content">
        <div class="title">{{title}}</div>
        <div class="con">
          <div class="left-wrap">
            <img src="https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
              alt="">
          </div>
          <div class="right-upload">
            <el-button plain>上传新头像</el-button>
            <p>图片长宽比1:1</p>
            <p>文件小于2M</p>
          </div>
        </div>
        <div class="button-group">
          <el-button type="primary">确定</el-button>
          <el-button style="margin-right: 10px" plain @click="visible = false">取消</el-button>
        </div>
      </div>
      <template #reference>
        <el-button plain @click="visible = true">{{btnName}}</el-button>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang='ts'>
import { onActivated, ref } from "vue"
type Props = {
  width?: string
  btnName?: string
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: "280px",
});
const visible = ref<boolean>(false)

</script>

<style lang='less' scoped>
.upload-avatar-inner {
  margin-left: 20px;
}

.upload-content {
  width: v-bind(width);

  .title {
    font-family: "PingFangSC-Medium";
    color: #333333;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid @border-voice-color;
  }

  .con {
    height: 110px;
    padding-top: 10px;
    padding-bottom: 15px;
    display: flex;
    border-bottom: 1px solid @border-voice-color;

    .left-wrap {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90px;
        height: 90px;
      }
    }

    .right-upload {
      width: 50%;

      .el-button {
        margin-top: 10px;
        margin-bottom: 10px;
      }

      p {
        padding: 0;
        margin: 0;
        margin-bottom: 3px;
        color: rgb(153, 153, 153);
      }
    }
  }

  .button-group {
    padding-top: 12px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>