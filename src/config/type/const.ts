interface DialogInfo { visible: boolean }
interface EditDialInfo extends DialogInfo { ids?: number[] }
interface AddDataDiaInfo<T> extends DialogInfo { data: T }

// 创建群活码信息
interface CodeInfo {
  id: number,
  index?: number
  code_name: string
  code_img: string
  frequ: number
  overdate: string
  mode: string
}