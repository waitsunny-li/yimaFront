import { ElMessage } from 'element-plus'

export class Message {
  public static success(message: string) {
    ElMessage.success({
      showClose: false,
      message: message
    })
  }

  public static warning(message: string) {
    ElMessage.warning({
      showClose: false,
      message: message
    })
  }

  public static error(message: string) {
    ElMessage.error({
      showClose: false,
      message: message
    })
  }
}