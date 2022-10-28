import {defineStore} from "pinia"

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