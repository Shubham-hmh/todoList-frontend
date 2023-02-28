import { Space, Table, Tag } from 'antd';
import { Popconfirm, Button, Form, Input } from 'antd'
import axios from 'axios'
import { useEffect ,useState} from 'react';


const App = () => {

  const [inputData,setInputData]=useState([]);
  const [editRowKey, setEditrowKey] = useState("");

  const [form] = Form.useForm();
  useEffect(() => {
    loadData();
  }, []);


    //Delete function ------------->
    const handleDelete = async(value) => {
      await axios.delete(`http://localhost:5000/deleteUser/${value._id}`);
      window.alert("data has been deleted");
      loadData();
  };

  const isEditing = (record) => {
      return record._id === editRowKey;
  }

  const cancel = () => {
      setEditrowKey("");
  }
  const edit = (record) => {
      form.setFieldValue({
          duedate: "",
          description: "",
          ...record
      });
      setEditrowKey(record._id);
  }

  const save = async (title) => {
      try {
          const row = await form.validateFields();
          const newData = [...inputData];
          const index = newData.findIndex((item) => title === item.title);
          if (index > -1) {
              const item = newData[index];
              newData.splice(index, 1, { ...item, ...row });
              setInputData(newData);
              setEditrowKey("");
          }
      }
      catch (error) {
          console.log(error);
      }
  }


  const EditableCell = ({ editing, dataIndex, title, record, children, ...restProps }) => {
    const input = <Input />
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item name={dataIndex} style={{ margin: 0 }} rules={[{
                    required: true,
                    message: `Please Input  some value in ${title} field`
                }]}>
                    {input}
                </Form.Item>
            ) : (children)}
        </td>
    )
}

  //
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/");
    console.log(response.data);
    setInputData(response.data);
  }


  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: '1',
      align: 'center',
      editTable: 'true'
    },
    {
      key: '2',
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: '3',
    },
    {
      key: '4',
      title: "Due Date",
      dataIndex: "dueDate",
      align: "center",
      editTable: false,
  
    },
    {
  
      title: 'Action',
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        console.log(record,"iii");
        const editable = isEditing(record);
        return inputData.length >= 1 ? (
          <Space>
            <Popconfirm title='Are you sure want to delete ?' onConfirm={() => handleDelete(record)} >
              <Button danger type='primary' disabled={editable} >Delete</Button>
            </Popconfirm>
  
            {
              editable ? (
                <span>
                  <Space size='middle'>
                    <Button onClick={() => save(record.title)} type='primary' style={{ marginRight: 8 }}>Save</Button>
                    <Popconfirm title='Are you sure to cancel ?' onConfirm={cancel}>
                      <Button>Cancel</Button>
  
                    </Popconfirm>
                  </Space>
                </span>
              ) : (
                <Button onClick={() => edit(record)} type='primary'>Edit</Button>
  
              )
            }
          </Space>
  
        ) : null;
      }
    },
  ];

  const mergeColumns = columns.map((col) => {
    if (!col.editTable) {
        return col;
    }
    return {
        ...col,
        onCell: (record) => ({
            record,
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
        }),
    }
});

  return (
    <>
      {/* <Table columns={columns} dataSource={inputData} />; */}
      <Form form={form} component={false}>
                <Table
                    columns={mergeColumns}
                    components={{
                        body: {

                            cell: EditableCell,
                        },
                    }}
                    dataSource={inputData}
                    bordered
                />
            </Form>

    </>
  )
}
export default App;