<template>
  <div class='upload-img-series-inner'>
    <el-dialog v-model="dialogInfo.visible" title="上传二维码图片" width="900px" :close-on-click-modal="false" @open="initOpen"
      @close="handleClose">
      <div class="desc-title">
        已选择<span>{{ imgsList.length }}</span>张二维码图片：
      </div>
      <el-upload ref="uploadRef" v-model:file-list="imgsList" :multiple="true" :auto-upload="true" action=""
        list-type="picture-card" :before-upload="beforeKefuUpload" :http-request="uploadImg" :on-change="handleChange">
        <template #file="{ file }">
          <div class="upload-img-wrap">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
            <div class="name">{{file.name}}</div>
            <label class="el-upload-list__item-status-label">
              <i class="el-icon el-icon--upload-success el-icon--check"><svg viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor"
                    d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z">
                  </path>
                </svg>
              </i>
            </label>
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-delete" @click="handleRemove(file, imgsList)">
                <el-icon>
                  <Delete />
                </el-icon>
              </span>
            </span>
          </div>
        </template>

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
import type { UploadProps, UploadRequestOptions, UploadFile, UploadFiles, UploadInstance } from 'element-plus'
import { DialogInfo, UploadSeries } from "@/config/type/index";
import { reactive, toRaw, ref } from "vue";
import { Plus, Delete } from '@element-plus/icons-vue';
import { Message } from "@/utils/index"
import { Time } from "@/utils/index"

type Props = {
  imgList: UploadSeries[]
  dialogInfo: DialogInfo
}

const props = defineProps<Props>();
const emits = defineEmits(["onSuccess"])
const imgsList = ref<UploadFiles>([])
const uploadRef = ref<UploadInstance>()
console.log("=====初始化");

const initOpen = () => {
  props.imgList.forEach(item => {
    imgsList.value.push({
      name: item.name as string,
      url: item.url,
      status: "success",
      uid: Date.now()
    })
  })
}

const handleClose = () => {
  uploadRef.value?.clearFiles();
}

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
  let index = uploadFiles.indexOf(uploadFile)
  uploadFiles.splice(index, 1)
}

const beforeKefuUpload: UploadProps['beforeUpload'] = async (rawFile) => {
  console.log("上传前 =============> ", rawFile)
  if (rawFile.size / 1024 / 1024 > 2) {
    Message.error('图片大小不能超过2MB!')
    return false
  }
  let reader = new FileReader()
  reader.readAsDataURL(rawFile)
  reader.onload = function (e) {
    console.log("上传前", e);
    imgsList.value.push({
      name: rawFile.name,
      url: this.result as string,
      status: "success",
      uid: rawFile.uid
    })
  }
}

const uploadImg = (option: UploadRequestOptions) => {
  console.log('==============上传', option)
}

const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  uploadFiles.pop()
}

const successUpload = () => {
  props.dialogInfo.visible = false
  emits("onSuccess", imgsList.value)
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

  .upload-img-wrap {
    .name {
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: 100;
      text-align: center;
      color: #fff;
      line-height: 30px;
      font-size: 12px;
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