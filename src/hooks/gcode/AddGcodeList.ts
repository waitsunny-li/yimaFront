import { ref, reactive } from "vue";

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

  const rowClassName = ({row, rowIndex}: RowIn) => {
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
  const downMove = (index: number) => {}
  const downBottom = (index: number) => {}

  return {
    tableData,
    handleSelectionChange,
    rowClassName,
    upMove, 
    upTop,
    downBottom,
    downMove
  }
}