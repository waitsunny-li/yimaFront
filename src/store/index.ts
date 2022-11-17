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
        type: 1,
        name: "王者小组",
        remarks: "",
        repeat: [],
        addWhite: [],
        safetip: [],
        kefu_img: "ss", 
        tags: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
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

export const useKcodeBasicInfoStore = defineStore("kcodeBasicId", {
  state: () => {
    return {
      basicInfo: {
        type: 1,
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