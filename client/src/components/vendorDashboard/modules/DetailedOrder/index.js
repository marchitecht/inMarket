import { Card, Descriptions, Divider, List, Button } from "antd";
import dishes from "../../assets/dishes.json";
import "antd/dist/antd.min.css";
import "../../main.css";
import { useParams } from "react-router-dom";


const DetailedOrder = () =>{
  const {id} = useParams()
  return (
    <Card title={`Заказ ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Клиент:">Martin Musin</Descriptions.Item>
        <Descriptions.Item label="Адрес клиента:">
          Орджоникидзе 11/10, Москва
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {dishItem.name} x {dishItem.quantity}
            </div>
            <div>RU {dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Итого:</h2>
        <h2 style={styles.totalPrice}>RUR 42.96</h2>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button}>
          Отменить
        </Button>
        <Button block type="primary" size="large" style={styles.button}>
          Заказать
        </Button>
      </div>
      <Button block type="primary" size="large">
        Заказ собран
      </Button>
    </Card>
  )
  
}
const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
  },
};

export default DetailedOrder
