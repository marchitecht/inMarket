import orders from '../../assets/orders.json';
import {Card, Table, Tag} from 'antd';
import "../../main.css";
import { useNavigate } from 'react-router-dom';

const Orders = () =>{
  const navigate = useNavigate();
  const renderOrderStatus = (orderStatus)=>{
    if(orderStatus === 'Доставлено'){
      return <Tag color={'green'}>{orderStatus}</Tag>
    }
    if(orderStatus === 'Собирается'){
      return <Tag color={'orange'}>{orderStatus}</Tag>
    }
    if(orderStatus === 'Отменен'){
      return <Tag color={'red'}>{orderStatus}</Tag>
    }
  }
  const tableColumns = [
    {
      title: 'ID заказа',
      dataIndex: 'orderID',
      key: 'orderID',
    },
    {
      title: 'Адрес доставки',
      dataIndex: 'deliveryAddress',
      key: 'deliveryAddress',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `RUR ${price}`
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: renderOrderStatus
    },
  ]

  return (
    <Card title={'Заказы'} style={{margin: 20}}>
      <Table
      dataSource={orders}
      columns={tableColumns}
      rowKey='orderID'
      onRow={(orderItem)=> ({
        onClick: () => navigate(`/vendor/orders/${orderItem.orderID}`)
      })}
      />
    </Card>
  )
}
export default Orders
