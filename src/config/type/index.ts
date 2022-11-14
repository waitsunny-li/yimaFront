
export interface DialogInfo { visible: boolean }
export interface EditDialInfo extends DialogInfo { ids?: number[] }
export interface AddDataDiaInfo<T> extends DialogInfo { data: T }
export interface AditDialInfo extends DialogInfo {title: string}

export interface UploadSeries {
  url: string,
  name?: string
}

interface CodeInfo {
  mode: string
  frequ: number
  overdate: string
  img_mode?: string
}

// 创建群活码信息
export interface GcodeInfo extends CodeInfo {
  id?: number,
  index?: number
  qun_name?: string
  code_name: string
  down_guide?: string
  code_img: string
}

// 创建客服码
export interface KcodeInfo extends CodeInfo {
  kefu_name: string
}

export interface CreateGcode extends CodeInfo {
  qun_name?: string
  code_name: string
  code_imgs: UploadSeries[]
  down_guide?: string
}

export interface CreateKcode extends CodeInfo {
  kefu_name: string
}