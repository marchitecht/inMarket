import ordersHistory from '../../assets/orders-history.json';
import {Card, Table, Tag} from 'antd';

const OrderHistory = () => {


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
      render: (status) => <Tag color={status === 'Доставлено' ? 'green': 'red'}>{status}</Tag> 
    },
  ]
  return (
    <Card title={'История заказов'} style={{margin: 20}}>
      <Table
      dataSource={ordersHistory}
      columns={tableColumns}
      rowKey='orderID'
      />
    </Card>
  )
}
export default OrderHistory
