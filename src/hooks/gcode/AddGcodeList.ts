import { ref, reactive, markRaw } from "vue";
import { SelectOperation } from "@/config/constant/index";
import { ElMessageBox } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';
import { CodeInfo, EditDialInfo, DialogInfo, AditDialInfo, CreateCode } from "@/config/type"
import { Time } from "@/utils/index"

interface Operations {
  name: string
  value: number
}

export function gcodeListOpera() {
  const tableData = reactive<CodeInfo[]>(
    [
      {
        id: 1,
        code_name: '二维码1.jepg',
        code_img: 'https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        frequ: 150,
        overdate: "2022-10-11",
        mode: "标准模式"
      },
      {
        id: 2,
        code_name: '二维码2.jepg',
        code_img: 'https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        frequ: 100,
        overdate: "2022-10-12",
        mode: "标准模式"
      },
      {
        id: 3,
        code_name: '二维码3.jepg',
        code_img: 'https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        frequ: 110,
        overdate: "2022-10-13",
        mode: "标准模式"
      },
    ]
  )

  const {
    handleSelectionChange,
    selectDisabled,
    selectOperations,
    operationChange,
    editFrequDialogInfo,
    editValidDialogInfo
  } = batchOperations()

  return {
    tableData,
    handleSelectionChange,
    ...adjusOrder(tableData),
    selectDisabled,
    selectOperations,
    operationChange,
    editFrequDialogInfo,
    editValidDialogInfo,
    ...addOreditOpertions()
  }
}

// batch operation
export function batchOperations() {
  const selectDisabled = ref<boolean>(true)
  const selectOperations = reactive<Operations[]>([
    { name: "删除", value: SelectOperation.DELETE },
    { name: "自动切换频率", value: SelectOperation.FREQU },
    { name: "有效期", value: SelectOperation.VALIDITY }
  ])
  const multipleSelection = ref<number[]>([])
  const handleSelectionChange = (val: CodeInfo[]) => {
    let ret: number[] = []
    val.forEach(item => ret.push(item.id as number))
    multipleSelection.value = ret
    if (ret.length == 0) {
      selectDisabled.value = true
    } else {
      selectDisabled.value = false
    }
    console.log("多选===============> ", multipleSelection, ret)
  }
  const editFrequDialogInfo = reactive<EditDialInfo>({
    visible: false,
    ids: multipleSelection.value
  })
  const editValidDialogInfo = reactive<EditDialInfo>({
    visible: false,
    ids: multipleSelection.value
  })
  const operationChange = (val: number) => {
    switch (val) {
      case SelectOperation.DELETE:
        ElMessageBox.confirm(
          `确定要删除${multipleSelection.value.length}个二维码?`,
          '确认删除',
          {
            type: 'warning',
            icon: markRaw(Delete),
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          }
        ).then(() => {

        }).catch(() => { })
        break
      case SelectOperation.FREQU:
        console.log("自动切换频率");
        editFrequDialogInfo.visible = true
        break
      case SelectOperation.VALIDITY:
        console.log("有效期");
        editValidDialogInfo.visible = true
        break
    }
  }

  return {
    selectDisabled,
    selectOperations,
    operationChange,
    editFrequDialogInfo,
    editValidDialogInfo,
    handleSelectionChange
  }
}

// adjuste order
export function adjusOrder(tableData: CodeInfo[]) {
  const upMove = (index: number) => {
    if (index === 0) return;
    let uprow = tableData[index - 1]
    tableData[index - 1] = tableData[index]
    tableData[index] = uprow
  }
  const upTop = (index: number) => {
    if (index === 0) return;
    let row = tableData[index]
    tableData.splice(index, 1)
    tableData.unshift(row)
  }
  const downMove = (index: number) => {
    if (index === tableData.length - 1) return;
    let downrow = tableData[index + 1]
    tableData[index + 1] = tableData[index]
    tableData[index] = downrow
  }
  const downBottom = (index: number) => {
    if (index === tableData.length - 1) return;
    let row = tableData[index]
    tableData.splice(index, 1)
    tableData.push(row)
  }

  return {
    upMove,
    upTop,
    downBottom,
    downMove,
  }
}

// edit and add code
export function addOreditOpertions() {
  const aditDialogInfo = reactive<AditDialInfo>({
    visible: false,
    title: "添加二维码"
  })

  const addData = reactive<CreateCode>({
    code_name: "",
    code_imgs: [
      {name: "kkk", url: "https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"},
      {name: "ddd", url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.xianjichina.com%2Fediter%2F20210903%2Fimage%2F8978254ff0d1129c6fb0186a9e550bda.jpg&refer=http%3A%2F%2Fimg.xianjichina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670853516&t=91709edb71bb8d272f198a804f72c669"}
    ],
    frequ: 180,
    overdate: Time.getAfterBeforeDay(7, "yyyy-MM-dd"),
    mode: "微信二维码",
    img_mode: "标准模式",
    down_guide: ""
  })
  
  
  const addBtn = () => {
    aditDialogInfo.visible = true
  }

  const successAddBtn = () => {
    console.log(addData);
  }
  return {
    aditDialogInfo,
    addBtn,
    addData,
    successAddBtn
  }
}