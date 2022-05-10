import { Card, Table, Button } from "antd";
import { SpaceContext } from "antd/lib/space";
import dishes from "../../assets/dishes.json";
import { Link } from "react-router-dom";

const VendorMenu = () => {
  const tableColumns = [
    {
      title: "Название товара",
      dataIndex: "name",
      key: "name  ",
    },
    {
      title: "Цена товара",
      dataIndex: "price",
      key: "price",
      render: (price) => `RUR ${price}`,
    },
    {
      title: "",
      dataIndex: "action",
      render: () => <Button danger>Удалить</Button>,
    },
  ];

  const renderNewItemButton = () => (
    <Link to={"/vendor/menu/new"}>
      <Button type="primary">Добавить</Button>
    </Link>
  );

  return (
    <Card title={"Menu"} style={{ margin: 20 }} extra={renderNewItemButton()}>
      <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
    </Card>
  );
};

export default VendorMenu;
