import { getDataSourceConfigList } from '@/api/infra/dataSourceConfig'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

const dataSourceConfigs = await getDataSourceConfigList()

export const columns: BasicColumn[] = [
  {
    title: '数据源',
    dataIndex: 'dataSourceConfigId',
    width: 100,
    customRender: ({ text }) => {
      for (const config of dataSourceConfigs) {
        if (text === config.id) {
          return config.name
        }
      }
      return '未知【' + text + '】'
    }
  },
  {
    title: '表名称',
    dataIndex: 'tableName',
    width: 200
  },
  {
    title: '表描述',
    dataIndex: 'tableComment',
    width: 120
  },
  {
    title: '实体',
    dataIndex: 'className',
    width: 200
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '表名称',
    field: 'tableName',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: '表描述',
    field: 'tableComment',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: '创建时间',
    field: 'createTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  }
]

export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '岗位名称',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: '岗位编码',
    field: 'code',
    required: true,
    component: 'Input'
  },
  {
    label: '岗位顺序',
    field: 'sort',
    required: true,
    component: 'InputNumber'
  },
  {
    label: '状态',
    field: 'status',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    }
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea'
  }
]