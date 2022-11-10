<template>
  <div class='edit-validate-inner'>
    <el-dialog v-model="dialogInfo.visible" title="修改二维码有效期" width="500px">
      <el-form-item label="二维码有效期:">
        <el-date-picker v-model="dateValue" type="date" placeholder="请选择日期" :disabled-date="disabledDate" />
        <div class="desc">
          有效期在二维码图片底部有小字提示，系统会根据该日期发送提醒，<span>如7天内未加满200人</span>，请及时更新二维码，避免过期无法添加
        </div>
      </el-form-item>
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
import { ref } from "vue";
import { DialogInfo } from "@/config/type/index"
import { Time } from "@/utils/index"

type Props = {
  dialogInfo: DialogInfo
}
const { dialogInfo } = defineProps<Props>()

const dateValue = ref<string>("")

const disabledDate = (time: Date) => {
  return Time.disabledDate(time, 7)
}
</script>

<style lang='less' scoped>
.desc {
  font-family: 'PingFangSC-Regular';
  color: #999999;
  font-style: normal;
  margin-top: 14px;
  line-height: 1.4;

  span {
    color: red;
  }
}

:deep(.el-dialog) {
  .el-dialog__body {
    border-top: 1px solid @border-voice-color;
    border-bottom: 1px solid @border-voice-color;
  }
}
</style>