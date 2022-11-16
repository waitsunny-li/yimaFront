import { defineStore } from "pinia"

export const useBreadcurmStore = defineStore("breadcurmId", {
  state: () => {
    return {
      breadcurmList: [""]
    }
  },
  actions: {
    change(t: string[]) {
      this.breadcurmList = t
    }
  }
})

export const useQcodeBasicInfoStore = defineStore("qcodeBasicId", {
  state: () => {
    return {
      basicInfo: {
        type: "普通群活码",
        name: "",
        remarks: "",
        repeat: [],
        addWhite: [],
        safetip: [],
        kefu_img: "", 
        tags: [],
        form_instance: undefined
      }
    }
  },
  getters: {
   
  },
  actions: {
    // 效验表单字段是否满足
    async valid(): Promise<boolean> {
      let ret: boolean = false;
      let instance = this.basicInfo.form_instance as any
      if (!instance) return ret;
      ret = await instance.validate().catch((err: any) => ret)
      return ret
    }
  }
})