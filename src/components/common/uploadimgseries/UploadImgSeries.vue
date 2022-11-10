<template>
  <div class='upload-img-series-inner'>
    <el-dialog v-model="dialogInfo.visible" title="上传二维码图片" width="900px">
      <el-upload v-model:file-list="imgList" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        list-type="picture-card" :on-remove="handleRemove">
        <el-icon>
          <Plus />
        </el-icon>
      </el-upload>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogInfo.visible = false">
            确认上传
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import type { UploadProps, UploadUserFile } from 'element-plus'
import { DialogInfo } from "@/config/type/index";
import { Plus } from '@element-plus/icons-vue';

type Props = {
  imgList: UploadUserFile[]
  dialogInfo: DialogInfo
}

const props = defineProps<Props>();

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>

<style lang='less' scoped>

.upload-img-series-inner {
  .el-overlay {

  }
  :deep(.dialog-fade-enter-active) {
    // -webkit-animation: none 0.5s !important;
    // animation: none 0.5s !important;
    .el-overlay-dialog {
      -webkit-animation: zoomIn var(--el-transition-duration) !important;
      animation: zoomIn var(--el-transition-duration) !important;
    }
  }

  :deep(.dialog-fade-leave-active) {
    // -webkit-animation: dialog-fade-out 0.3s !important;
    // animation: dialog-fade-out 0.3s !important;
    .el-overlay-dialog {
      animation: zoomOut var(--el-transition-duration) !important;
    }
  }
}
</style>