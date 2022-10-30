<template>
  <div class='basic-inner'>
    <el-form ref="basicFormRef" :model="basicForm" :rules="basicRules" label-width="140px" class="basic-form"
      size="default" status-icon>
      <!-- 活码类型 -->
      <el-form-item label="群活码类型:">
        <el-radio-group v-model="basicForm.type">
          <el-radio border label="普通群活码" />
          <el-radio border label="分组群活码" />
        </el-radio-group>
      </el-form-item>

      <!-- 群活码名称 -->
      <el-form-item label="群活码名称:" prop="name" style="width: 700px" :inline-message="true">
        <el-input v-model="basicForm.name" />
        <PreviewTips top="12px" content="活码名称将显示在微信标题栏上" :popover-width="430" :img-height="400" :img-width="400"
          placement="right" url="https://s.weituibao.com/1582602422498/title.png">
        </PreviewTips>
      </el-form-item>

      <!-- 群活码备注 -->
      <el-form-item label="活码备注（选填）:" prop="remarks" style="width: 700px" :inline-message="false">
        <el-input v-model="basicForm.remarks" />
        <PreviewTips top="12px" content="备注能方便你管理活码，内容不会展示给用户" :isShowBtn="false"></PreviewTips>
      </el-form-item>

      <!-- 活码设置 -->
      <el-form-item label="活码设置:" prop="repeat">
        <el-checkbox-group v-model="basicForm.repeat">
          <el-checkbox label="防止重复入群" />
          <PreviewTips top="6px" content="用户扫码获得微信群码后，后续扫码仅展示此二维码（无论活码是否有切换/调整）" :isShowBtn="false"></PreviewTips>
        </el-checkbox-group>
      </el-form-item>
      <!-- 重复添加白名单 -->
      <el-form-item label="" prop="remarks">
        <el-checkbox-group v-model="basicForm.addWhite">
          <el-checkbox label="重复添加白名单" />
          <PreviewTips top="6px" content="白名单用户绑定微信后，扫码不受防重复功能影响，且不对其进行使用数据统计" :isShowBtn="false"></PreviewTips>
        </el-checkbox-group>
      </el-form-item>
      <!-- 安全提示 -->
      <el-form-item label="" prop="safetip">
        <el-checkbox-group v-model="basicForm.safetip">
          <el-checkbox label="安全验证提示" />
          <PreviewTips top="6px" content="在活码页顶部增加安全验证信息，可增加可信度" :popover-width="240" :img-height="400" :img-width="220"
            url="https://s.weituibao.com/1582602422496/safe.png"></PreviewTips>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="客服功能">
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "vue"
import type { FormInstance, FormRules } from 'element-plus';
import PreviewTips from "@/components/common/previewtips/PreviewTips.vue"

type BasicFormType = {
  type: string
  name: string
  remarks: string
  repeat: string[]
  addWhite: string[]
  safetip: string[]
}

const basicForm = reactive<BasicFormType>({
  type: "普通群活码",
  name: "",
  remarks: "",
  repeat: [],
  addWhite: [],
  safetip: []
})

const basicRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入活码名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度不低于3高于5', trigger: 'blur' },
  ],
})
</script>

<style lang='less' scoped>
.basic-inner {
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: center;

  .basic-form {
    width: 70%;
  }
}
</style>