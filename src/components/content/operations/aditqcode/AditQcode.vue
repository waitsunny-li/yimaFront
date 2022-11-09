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
            <PreviewTips top="10px" bottom="10px" content="所上传的二维码直接从微信获取" :isShowBtn="false" style="width: 100%">
            </PreviewTips>
          </el-form-item>
          <el-form-item label="二维码展示形式:">
            <el-radio-group class="radio-colum" v-model="formData.img_mode">
              <el-radio label="标准模式">
                <div class="custom-radio">
                  <span>标准模式</span>
                  <el-tooltip class="tip-icon" effect="dark" placement="top" co>
                    <template #content>
                      <div class="tip-content">
                        识别图片中的二维码，重新生成到活动页，保证页面美观度。
                      </div>
                    </template>

                    <el-icon color="#ccc" class="icon">
                      <QuestionFilled />
                    </el-icon>
                  </el-tooltip>
                </div>
              </el-radio>
              <el-radio label="适配模式" />
              <el-radio label="剪裁模式" />
            </el-radio-group>
          </el-form-item>
          <!-- 群名称 -->
          <el-form-item label="群名称:" style="width: 500px">
            <el-input type="textarea" v-model="formData.qun_name" placeholder="请填写在活码页面中展示的群名称" resize="none" />
          </el-form-item>
          <!-- 上传二维码图片 -->
          <el-form-item class="upload-colum" label="上传二维码图片:" style="width: 500px">
            <input ref="uploadInput" type="file" style="display: none;"/>
            <el-button plain @click="uploadBtn">
              <el-icon class="el-icon--right" color="#606266">
                <Upload />
              </el-icon> 上传图片
            </el-button>
            <span style="color: #67C23A;font-size: 14px;margin-left: 10px;">已上传成功1张图片</span>
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
import { AditDialInfo } from "@/config/type/index";
import { CodeInfo } from "@/config/type/index";
import PreviewTips from "@/components/common/previewtips/PreviewTips.vue";
import { QuestionFilled, Upload } from '@element-plus/icons-vue';
import {ref} from 'vue';

type Props = {
  dialogInfo: AditDialInfo,
  formData: CodeInfo
}
const { dialogInfo } = defineProps<Props>();
const uploadInput = ref<HTMLInputElement>();

const uploadBtn = () => {
  console.log(uploadInput);
  let inputElem = uploadInput.value as HTMLInputElement;
  inputElem.click();
}
</script>

<style lang='less' scoped>
:deep(.el-dialog) {
  .el-dialog__body {
    border-top: 1px solid @border-voice-color;
    border-bottom: 1px solid @border-voice-color;
  }

  .radio-colum {
    display: block;

    label {
      display: block;

      .icon {
        font-size: 18px;
      }
    }

    .custom-radio {
      display: inline-flex;
      align-items: center;

      .el-icon {
        margin-left: 5px;
      }
    }
  }

  .upload-colum {
    .el-button {
      &:hover {
        .el-icon--right {
          color: @theme-color;
        }
      }
      &:focus {
        .el-icon--right {
          color: @theme-color;
        }
      }
    }

  }
}

.tip-content {
  width: 160px;
}
</style>