<template>
  <div class='upload-img-series-inner'>
    <el-dialog v-model="dialogInfo.visible" title="上传二维码图片" width="900px">
      <div class="desc-title">
        已选择<span>1</span>张二维码图片：
      </div>
      <el-upload v-model:file-list="imgList" action=""
        list-type="picture-card" :on-remove="handleRemove"
        :before-upload="beforeKefuUpload"
          :http-request="uploadImg">
        <el-icon>
          <Plus />
        </el-icon>
      </el-upload>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="successUpload">
            确认上传
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import type { UploadProps, UploadUserFile, UploadRawFile } from 'element-plus'
import { DialogInfo } from "@/config/type/index";
import { Plus } from '@element-plus/icons-vue';
import { Message } from "@/utils/index"

type Props = {
  imgList: UploadUserFile[]
  dialogInfo: DialogInfo
}

const props = defineProps<Props>();

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}


let files: UploadRawFile;
const beforeKefuUpload: UploadProps['beforeUpload'] = (rawFile) => {
  console.log("上传前=============> ", rawFile)
  if (rawFile.size / 1024 / 1024 > 2) {
    Message.error('图片大小不能超过2MB!')
    return false
  }
}

const uploadImg = () => {
  console.log('==============上传', files)
  
}

const successUpload = () => {
  console.log(props.imgList);
  
}
</script>

<style lang='less' scoped>

.upload-img-series-inner {
  .desc-title {
    font-size: 13px;
    margin-bottom: 15px;

    span {
      color: #67C23A;
      font-size: 14px;
      font-weight: bold;
      padding: 0 3px;
    }
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