import React, { useContext, useState, useEffect, useRef } from 'react'
import ReactDOM, {findDOMNode} from 'react-dom'
import { Table, Input, Button, Popconfirm, Form,Col,Row,Tag, Space } from 'antd'
import './index.less'
import {
  SearchOutlined,
} from '@ant-design/icons';
const EditableContext = React.createContext()

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  needSearch,
  handleFocus,
  handleBlur,
  ...restProps
}) => {
  const inputRef = useRef()
  const form = useContext(EditableContext)

  const save = async (e) => {
    try {
      const values = await form.validateFields()
      console.log(values, 'form');
      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  let childNode = children
  if (editable) {
    childNode = (
      <Row>
        <Col>
          <Form.Item
            style={{
              margin: 0,
            }}
            name={dataIndex}
            rules={[
              {
                required: true,
                message: `${title} is required.`,
              },
            ]}
          >
            <Input ref={inputRef} onPressEnter={save} onBlur={()=>{
              handleBlur()
              save()
            }} onFocus={()=>{
              handleFocus(inputRef)
            }}/>
          </Form.Item>
        </Col>
        <Col>
          {
            needSearch
            ?<Button type="primary" shape="circle" icon={<SearchOutlined />} />
            :null
          }
        </Col>
      </Row>
    )
  }
  return <td {...restProps}>{childNode}</td>
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
        needSearch: true
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
    ]
    this.state = {
      dataSource: [
        {
          key: '0',
          name: '',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: '',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
      pos: {
        left: 0,
        top: 0,
      },
      showTable: false
    }
  }

  handleAdd = () => {
    const { count, dataSource } = this.state
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    }
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    })
  }
  handleSave = (row) => {
    console.log(this.state.dataSource, '1');
    const newData = [...this.state.dataSource]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, { ...item, ...row })
    console.log(newData, '2');
    this.setState({
      dataSource: newData,
    })
  }
  handleBlur = ()=>{
    this.setState({
      showTable: false
    })
  }
  handleFocus=(ref)=>{
    console.dir(ref.current, '---');
    console.log(ref.current)
    let oInput = findDOMNode(ref.current)
    let pos = oInput.getBoundingClientRect()
    console.log(oInput.getBoundingClientRect(), 'obj')
    this.setState({showTable: true, pos: {
      left: pos.x,
      top: pos.y+32,
    }})
  }
  render() {
    const { dataSource } = this.state
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    }
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
          needSearch: col.needSearch,
          handleFocus: this.handleFocus,
          handleBlur: this.handleBlur
        }),
      }
    })

    const columns2 = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    
    const data2 = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        {
          this.state.showTable
          ?<div className='show_table' 
            style={{
              width: 500,
              position: 'absolute',
              left: this.state.pos.left,
              top: this.state.pos.top,
            }}>
            <Table columns={columns2} dataSource={data2} pagination={false}></Table>
          </div>
          :null
        }
        
      </div>
    )
  }
}
export default EditableTable
