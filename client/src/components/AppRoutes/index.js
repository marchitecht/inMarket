import { Route, Routes } from "react-router-dom";
import DetailedOrder from "../../components/vendorDashboard/modules/DetailedOrder/index";
import Orders from "../../components/vendorDashboard/modules/Orders/index";
import Menu from "../../components/vendorDashboard/modules/VendorMenu/index";
import CreateMenuItem from "../../components/vendorDashboard/modules/CreateMenuItem/index";
import OrderHistory from "../../components/vendorDashboard/modules/OrderHistory/index";
import Settings from '../../components/vendorDashboard/modules/Settings/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/vendor/orders" element={<Orders />} />
      <Route path="/vendor/orders/:id" element={<DetailedOrder />} />
      <Route path="/vendor/menu" element={<Menu />} />
      <Route path="/vendor/menu/new" element={<CreateMenuItem />} />
      <Route path="/vendor/history" element={<OrderHistory />} />
      <Route path="/vendor/settings" element={<Settings />} />
    </Routes>
  );
};
export default AppRoutes
