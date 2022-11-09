export interface DialogInfo { visible: boolean }
export interface EditDialInfo extends DialogInfo { ids?: number[] }
export interface AddDataDiaInfo<T> extends DialogInfo { data: T }
export interface AditDialInfo extends DialogInfo {title: string}

// 创建群活码信息
export interface CodeInfo {
  id?: number,
  index?: number
  qun_name?: string
  code_name: string
  code_img: string
  img_mode?: string
  down_guide?: string
  frequ: number
  overdate: string
  mode: string
}