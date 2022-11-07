<template>
  <div class='adit-qcode-inner'>
    <el-dialog v-model="dialogInfo.visible" title="Tips" width="30%">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogInfo.visible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogInfo.visible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>

type Props = {
  dialogInfo: {visible: boolean}
}
const {dialogInfo} = defineProps<Props>();
</script>

<style lang='less' scoped>

</style>