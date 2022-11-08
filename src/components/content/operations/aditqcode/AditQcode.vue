<template>
  <div class='adit-qcode-inner'>
    <el-dialog v-model="dialogInfo.visible" :title="dialogInfo.title" width="900px">
      <div class="form-con">
        <el-form ref="aditFormRef" :model="formData" label-width="180px" class="basic-form" size="default" status-icon>
          <!-- 活码类型 -->
          <el-form-item label="二维码图片类型:">
            <el-radio-group v-model="formData.mode">
              <el-radio border label="微信二维码" />
              <el-radio border label="自制海报" />
            </el-radio-group>
            <PreviewTips top="10px" bottom="10px" content="所上传的二维码直接从微信获取" :isShowBtn="false" style="width: 100%"></PreviewTips>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogInfo.visible = false">取消</el-button>
          <el-button type="primary" @click="dialogInfo.visible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { AditDialInfo } from "@/config/type/index"
import { CodeInfo } from "@/config/type/index"
import PreviewTips from "@/components/common/previewtips/PreviewTips.vue"

type Props = {
  dialogInfo: AditDialInfo,
  formData: CodeInfo
}
const { dialogInfo } = defineProps<Props>();
</script>

<style lang='less' scoped>
:deep(.el-dialog) {
  .el-dialog__body {
    border-top: 1px solid @border-voice-color;
    border-bottom: 1px solid @border-voice-color;
  }
}
</style>