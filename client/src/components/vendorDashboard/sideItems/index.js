import {Menu} from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () =>{
  const navigate = useNavigate()
  const menuItems = [
    {
      key: 'orders',
      label: 'Заказы',
    },
    {
      key: 'menu',
      label: 'Ассортимент'
    },
    {
      key: 'history',
      label: 'История заказов',
    },
    {
      key: 'settings',
      label: 'Настройки',
    },
  ];

 
  return (
    <Menu items={menuItems} onClick={(menuItem)=> navigate(`/vendor/${menuItem.key}`)}/>
  )
}
export default SideMenu
