<template>
  <div class='code-list-inner'>
    <div class="table-con">
      <div class="row table-con-action">
        <SwitchTip :active-icon="Check" :inactive-icon="Close" tip-content="开启：每个二维码轮流展示给用户，扫码人数达到预设阈值后不再展示。<br/>
          关闭：从第一个二维码开始展示，扫码人数达到预设阈值后切换至下一个二维码，直到最后一个二维码的扫码人数达到上限为止。" lable="轮播图模式"></SwitchTip>
        <UploadAvatar btn-name="自定义群头像" title="当前活码头像"></UploadAvatar>
      </div>
      <div class="row table-con-main">
        <div class="header-row">
          <el-button type="primary" :icon="Plus" @click="addBtn">添加微信入群二维码</el-button>
          <el-select class="select-operation" placeholder="批量操作" @change="operationChange" :disabled="selectDisabled">
            <el-option v-for="item in selectOperations" :key="item.name" :label="item.name" :value="item.value" />
          </el-select>
        </div>
        <el-table class="tablist" ref="tableRef" :data="tableData" style="width: 100%"
          @selection-change="handleSelectionChange" :row-class-name="rowClassName">
          <el-table-column type="selection" width="40" />
          <el-table-column label="二维码名称" property="code_name" min-width="200" />
          <el-table-column label="二维码图片" property="code_img" min-width="180">
            <template #default="scope">
              <el-popover placement="right" title="Title" :width="200" trigger="hover"
                content="this is content, this is content, this is content">
                <template #reference>
                  <img :src="scope.row.code_img" alt="" style="width:80px; height:80px">
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="自动切换频率" property="frequ" min-width="140">
            <template #header>
              自动切换频率
              <el-tooltip class="tip-icon" effect="dark" placement="top">
                <template #content>
                  <div style="width: 200px;">
                    二维码扫描人数达到设定的数值后，会自动切换至下一个二维码。
                  </div>
                </template>
                <el-icon color="#ccc" style="margin-left: 5px;" size="16px">
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </template>
            <template #default="scope">{{ scope.row.frequ }}</template>
          </el-table-column>
          <el-table-column label="过期时间" property="overdate" min-width="160" />
          <el-table-column label="二维码展示形式" property="mode" width="180" />
          <el-table-column label="顺序调整" width="150">
            <template #default="scope">
              <div class="icon-group">
                <el-tooltip class="box-item" effect="dark" content="置顶" placement="top">
                  <span class="icon-wrap" :class="scope.row.index == 0 ? 'disabled' : ''"
                    @click="upTop(scope.row.index)">
                    <i class="iconfont icon-yima-21zhiding"></i>
                  </span>
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" content="置底" placement="top">
                  <span class="icon-wrap zhidi" :class="scope.row.index == tableData.length - 1 ? 'disabled' : ''"
                    @click="downBottom(scope.row.index)">
                    <i class="iconfont icon-yima-21zhiding"></i>
                  </span>
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" content="上移" placement="top">
                  <span class="icon-wrap shangyi" :class="scope.row.index == 0 ? 'disabled' : ''"
                    @click="upMove(scope.row.index)">
                    <i class="iconfont icon-yima-arrowBottom"></i>
                  </span>
                </el-tooltip>

                <el-tooltip class="box-item" effect="dark" content="下移" placement="top">
                  <span class="icon-wrap" :class="scope.row.index == tableData.length - 1 ? 'disabled' : ''"
                    @click="downMove(scope.row.index)">
                    <i class="iconfont icon-yima-arrowBottom"></i>
                  </span>
                </el-tooltip>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template #default="scope">
              <div class="operation-wrap">
                <el-button size="small" plain>编辑</el-button>
                <el-popconfirm title="确定要删除这个二维码吗?" confirm-button-text="确认" cancel-button-text="取消">
                  <template #reference>
                    <el-button size="small" plain>删除</el-button>
                  </template>
                </el-popconfirm>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

  <EditFrequ :dialog-info="editFrequDialogInfo"></EditFrequ>
  <EditValidate :dialog-info="editValidDialogInfo"></EditValidate>
  <AditQcode :dialog-info="aditDialogInfo" :form-data="addData" @listen-success="successAddBtn"></AditQcode>
</template>

<script setup lang='ts'>
import SwitchTip from '@/components/common/switchtip/SwitchTip.vue';
import { Check, Close, Plus, QuestionFilled } from '@element-plus/icons-vue';
import UploadAvatar from '@/components/common/uploadavatar/UploadAvatar.vue';
import { gcodeListOpera } from "@/hooks/gcode/AddGcodeList";
import EditFrequ from '@/components/content/operations/editfrequ/EditFrequ.vue';
import EditValidate from '@/components/content/operations/editvalidate/EditValidate.vue';
import AditQcode from '@/components/content/operations/aditqcode/AditQcode.vue';
import { CodeInfo } from "@/config/type/index"

interface RowIn {
  row: CodeInfo,
  rowIndex: number
}

type Props = {
  type: string
}

defineProps<Props>();

const rowClassName = ({ row, rowIndex }: RowIn) => {
  row.index = rowIndex
  if (rowIndex % 2) {
    return 'placehode-color'
  }
  return ''
}

const { selectOperations, tableData, handleSelectionChange, upMove, upTop, downBottom, downMove, operationChange, selectDisabled, editFrequDialogInfo, editValidDialogInfo, aditDialogInfo, addBtn, addData, successAddBtn } = gcodeListOpera()

</script>

<style lang='less' scoped>
.code-list-inner {
  width: 100%;
  display: flex;
  justify-content: center;
}

.table-con {
  width: 100%;
  border: 1px solid @border-voice-color;

  .row {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
  }

  .table-con-action {
    padding: 10px 20px;
    border-bottom: 1px solid @border-voice-color;
    display: flex;
  }

  .table-con-main {
    padding: 10px 20px;

    .header-row {
      padding: 10px 0;

      .select-operation {
        margin-left: 10px;
        width: 100px;
      }
    }

    .tablist {
      margin-top: 10px;

      :deep(.el-table__header-wrapper) {

        .el-table__cell {
          background-color: #F5F5F5 !important;
          border-right: 2px solid #fff;

          .cell {
            display: flex;
            align-items: center;
            color: #666;
          }
        }
      }

      :deep(.el-table__body-wrapper) {
        .el-table__row {
          .cell {
            .icon-group {
              display: flex;
              align-items: center;

              .icon-wrap {
                cursor: pointer;
                display: inline-block;
                width: 20px;
                height: 20px;
                border: 1px solid @border-voice-color;
                border-radius: 50%;
                background: #fff;
                line-height: 20px;
                font-size: 14px;
                text-align: center;
                margin-right: 10px;
                color: #555666;
                transition: all 0.5s;

                .iconfont {
                  transition: all 0.5s;
                }

                &:hover {
                  border-color: @theme-color;

                  .iconfont {
                    color: @theme-color;
                  }
                }

              }

              .disabled {
                background-color: #f1f0f0;
              }

              .zhidi,
              .shangyi {
                transform: rotate(180deg) !important;
              }
            }

            .operation-wrap {
              display: flex;
            }
          }
        }


        .placehode-color {
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>