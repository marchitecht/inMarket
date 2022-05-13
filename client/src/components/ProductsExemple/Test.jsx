import React, { useState, useEffect } from "react";
import './test.css';
import { Link } from 'react-router-dom'

const products = [{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://pro-dachnikov.com/uploads/posts/2021-11/1637956649_12-pro-dachnikov-com-p-tikva-foto-13.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'http://www.almazfea.com/upload/items/417.jpg',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://images11.domashnyochag.ru/upload/img_cache/0de/0de365b0d0ee065e55522f4aa5ce7f5c_cropped_1332x888.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://dolgo-jv.ru/wp-content/uploads/2018/06/Taste-and-smell_web2.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/test',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},]

function TestPage() {
  

    const [imgType, setImgType] = useState({});
    const [avatarType, setAvatarType] = useState({});

    const onImgLoad = ({ target: img }, index) => {
      const { offsetHeight, offsetWidth } = img;
      setImgType(prev => ({...prev, [index]: offsetHeight >= offsetWidth ? 'h' : 'w'}));
    };

    const onAvatarLoad = ({ target: img }, index) => {
      const { offsetHeight, offsetWidth } = img;
      setAvatarType(prev => ({...prev, [index]: offsetHeight >= offsetWidth ? 'h' : 'w'}));
    };
  
  return (
    <div className="card">
      {products?.map((el, i) => {
       return(
        <div className="card__item">
        <div className="card__inner">
          <div className="card__img">
          <img className={`image ${imgType[i] === 'h' ? 'h' : 'w'}`} onLoad={(e) => onImgLoad(e, i)} src={el.img} />
          </div>
          <div className="card__text">
            <div className="social">
              <Link to="#" className="social__item" target="_blank">
                <i className="like">Избранное</i>
              </Link>
              <Link to="#" className="social__item" target="_blank">
                <i className="cart">В корзину</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="card__back"></div>
        <div className="card__info">
          <div>
            <div className="card__name">{el.name}</div>
            <div className="card__prof">Цена {el.price}</div>
          </div>
          <div className="user_photo">
          <img className={`${avatarType[i] === 'h' ? 'h2' : 'w2'}`} onLoad={(e) => onAvatarLoad(e, i)} src={el.userImg} />
          </div>
        </div>
      </div>
       )
      })}
    
    </div>
  );
}
export default TestPage;
