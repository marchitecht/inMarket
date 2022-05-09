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

  const onMenuItemClicked = (menuItem) => {
    console.log(menuItem);
    navigate(`vendor/${menuItem.key}`)
  }

  return (
    <Menu items={menuItems} onClick={onMenuItemClicked}/>
  )
}
export default SideMenu
