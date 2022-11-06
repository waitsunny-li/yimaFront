import { ref, reactive, markRaw } from "vue";
import { SelectOperation } from "@/config/index"
import { ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'

interface CodeInfo {
  index?: number
  code_name: string
  code_img: string
  frequ: number
  overdate: string
  mode: string
}

interface RowIn {
  row: CodeInfo,
  rowIndex: number
}

interface Operations {
  name: string
  value: number
}



export default function AddGcodeList() {
  const tableData = reactive<CodeInfo[]>(
    [
      {
        code_name: '二维码1.jepg',
        code_img: 'https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        frequ: 150,
        overdate: "2022-10-11",
        mode: "标准模式"
      },
      {
        code_name: '二维码2.jepg',
        code_img: 'https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        frequ: 100,
        overdate: "2022-10-12",
        mode: "标准模式"
      },
      {
        code_name: '二维码3.jepg',
        code_img: 'https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        frequ: 110,
        overdate: "2022-10-13",
        mode: "标准模式"
      },
    ]
  )
  const multipleSelection = ref<CodeInfo[]>([])
  const handleSelectionChange = (val: CodeInfo[]) => {
    multipleSelection.value = val
  }

  const rowClassName = ({ row, rowIndex }: RowIn) => {
    row.index = rowIndex
    if (rowIndex % 2) {
      return 'placehode-color'
    }
    return ''
  }

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

  const selectOperations = reactive<Operations[]>([
    { name: "删除", value: SelectOperation.DELETE },
    { name: "自动切换频率", value: SelectOperation.FREQU },
    { name: "有效期", value: SelectOperation.VALIDITY }
  ])
  const operationChange = (val: number) => {
    switch (val) {
      case SelectOperation.DELETE:
        ElMessageBox.confirm(
          '确定要删除1个二维码?',
          '确认删除',
          {
            type: 'warning',
            icon: markRaw(Delete),
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          }
        ).then(() => {

        }).catch(() => {})
        break
      case SelectOperation.FREQU:
        console.log("自动切换频率");
        break
      case SelectOperation.VALIDITY:
        console.log("有效期");
        break
    }
  }

  return {
    tableData,
    handleSelectionChange,
    rowClassName,
    upMove,
    upTop,
    downBottom,
    downMove,
    selectOperations,
    operationChange
  }
}