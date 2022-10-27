import {defineStore} from "pinia"

export const breadcurmStore = defineStore("breadcurmId", {
  state: () => {
    return {
      breadcurmList: []
    }
  }
})