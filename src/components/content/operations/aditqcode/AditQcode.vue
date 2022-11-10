<template>
  <div class='adit-qcode-inner'>
    <el-dialog v-model="dialogInfo.visible" :title="dialogInfo.title" width="900px" top="5vh">
      <div class="form-con">
        <el-form ref="aditFormRef" :model="formData" label-width="180px" class="basic-form" size="default" status-icon>
          <!-- 活码类型 -->
          <el-form-item label="二维码图片类型:">
            <el-radio-group v-model="formData.mode" @change="modeChange">
              <el-radio-button border :label="1">微信二维码</el-radio-button>
              <el-radio-button border :label="2">自 制 海 报</el-radio-button>
            </el-radio-group>
            <PreviewTips top="10px" bottom="10px" content="所上传的二维码直接从微信获取" :isShowBtn="false" style="width: 100%" v-if="isModeCode">
            </PreviewTips>
            <PreviewTips top="10px" bottom="10px" content="所上传的二维码是海报形式的二维码" style="width: 100%" v-else>
            </PreviewTips>
          </el-form-item>
          <el-form-item label="二维码展示形式:" v-if="isModeCode">
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
          <el-form-item label="群名称:" style="width: 500px" v-if="isModeCode">
            <el-input type="textarea" v-model="formData.qun_name" placeholder="请填写在活码页面中展示的群名称" resize="none" />
          </el-form-item>
          <!-- 上传二维码图片 -->
          <el-form-item class="upload-colum" label="上传二维码图片:" style="width: 500px">
            <input ref="uploadInput" type="file" style="display: none;" @change="uploadChange" />
            <el-button plain @click="uploadBtn">
              <el-icon class="el-icon--right" color="#606266">
                <Upload />
              </el-icon> 上传图片
            </el-button>
            <span style="color: #67C23A;font-size: 14px;margin-left: 10px;">已上传成功1张图片</span>
          </el-form-item>
          <!-- 自动切换频率 -->
          <el-form-item class="frequ-colum" label="自动切换频率:" prop="frequ" style="width: 500px">
            <el-input v-model.number="formData.frequ" type="text" autocomplete="off" />
            <PreviewTips top="14px" bottom="10px"
              content="指当有多少人扫描该群二维码自动切换至下一个，可以近似理解为加多少个人入群后换下一个群（存在有些用户仅长按二维码但不加好友的可能性）。一般建议频率建议设定为150-180。如果您的群里已经有不少人了，这里需要将切换频率修改为200减去群已有人数。"
              :isShowBtn="false"></PreviewTips>
          </el-form-item>
          <!-- 二维码失效时间 -->
          <el-form-item label="二维码失效时间" style="width: 500px">
            <el-date-picker v-model="formData.overdate" type="date" style="width: 150px"
              :disabled-date="disabledDate" />
            <PreviewTips top="14px" bottom="10px" content="请根据微信群码图片的底部日期填写，到期前系统提醒您及时更换。" :isShowBtn="false">
            </PreviewTips>
          </el-form-item>
          <!-- 引导文字 -->
          <el-form-item label="引导文字（选填）:" style="width: 500px" v-if="isModeCode">
            <el-input type="textarea" v-model="formData.down_guide" placeholder="请填写二维码下方的引导文字，可根据活动所填写"
              resize="none" />
          </el-form-item>
        </el-form>
      </div>

      <!-- 预览活码落地页 -->
      <MobilePreview class="mobile-preview" v-if="isModeCode"></MobilePreview>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogInfo.visible = false">取消</el-button>
          <el-button type="primary" @click="dialogInfo.visible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 图片上传框 -->
    <UploadImgSeries :dialog-info="uploadDialogInfo" :img-list="formData.code_imgs"></UploadImgSeries>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { AditDialInfo, CreateCode, DialogInfo } from "@/config/type/index";
import PreviewTips from "@/components/common/previewtips/PreviewTips.vue";
import MobilePreview from "@/components/content/mobilepreview/MobilePreview.vue"
import UploadImgSeries from "@/components/common/uploadimgseries/UploadImgSeries.vue"
import { QuestionFilled, Upload } from '@element-plus/icons-vue';
import { Time } from "@/utils/index"

type Props = {
  dialogInfo: AditDialInfo,
  formData: CreateCode
}
const { dialogInfo } = defineProps<Props>();
const uploadInput = ref<HTMLInputElement>();

// 上传图片按钮
const uploadBtn = () => {
  uploadDialogInfo.visible = true

  return
  console.log(uploadInput);
  let inputElem = uploadInput.value as HTMLInputElement;
  inputElem.click();
}

const uploadChange = () => {
  let inputElem = uploadInput.value as HTMLInputElement;
  let file = inputElem.files && inputElem.files[0]
  console.log(file);
}

const disabledDate = (time: Date): boolean => {
  return Time.disabledDate(time, 7)
}

const isModeCode = ref<boolean>(true)
const modeChange = (value: number) => {
  console.log(value);
  if (value == 1) {
    isModeCode.value = true
  } else {
    isModeCode.value = false
  }
}

const uploadDialogInfo = reactive<DialogInfo>({
  visible: false
})
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

  .frequ-colum {
    .el-input {
      width: 108px;
    }
  }
}

.tip-content {
  width: 160px;
}

.adit-qcode-inner {
  position: relative;

  .mobile-preview {
    position: absolute;
    right: 90px;
    top: 8%;
    z-index: 1000;
  }

}
</style>