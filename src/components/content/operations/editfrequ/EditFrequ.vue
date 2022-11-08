<template>
  <!-- 编辑自动切换频率 -->
  <div class='edit-frequ-inner'>
    <el-dialog v-model="dialogInfo.visible" title="批量修改自动切换频率" width="26%">
      <el-form ref="frequFormRef" :model="frequForm">
        <el-form-item label="将选中的1个二维码更改切换频率为:" :rules="[
          { required: true, message: '必填项' },
        ]" prop="value">
          <el-input v-model="frequForm.value" type="number" autocomplete="off" />
        </el-form-item>
      </el-form>

      <div class="desc">
        指当有多少人扫描该群二维码自动切换至下一个，可以近似理解为加多少个人入群后换下一个群（存在有些用户仅长按二维码但不加好友的可能性）。一般建议频率建议设定为150-180。如果您的群里已经有不少人了，这里需要将切换频率修改为200减去群已有人数。
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogInfo.visible = false">取消</el-button>
          <el-button type="primary" @click="handleSure(frequFormRef)">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue';
import type { FormInstance } from "element-plus"
import {EditDialInfo} from "@/config/type/index"
type Props = {
  dialogInfo: EditDialInfo
}
const props = defineProps<Props>()
const dialogInfo = props.dialogInfo
const frequFormRef = ref<FormInstance>()

const frequForm = reactive({
  value: ""
})

const handleSure = async (formEl: FormInstance | undefined) => {
  console.log('============', formEl)
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    console.log("=======", valid, fields)
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
} 
</script>

<style lang='less' scoped>
.desc {
  margin-top: 30px;
  color: rgb(153, 153, 153);
  font-size: 14px;
}

:deep(.el-dialog) {
  .el-dialog__body {
    border-top: 1px solid @border-voice-color;
    border-bottom: 1px solid @border-voice-color;
  }
}
</style>