import React, { useState, useEffect } from "react";
import './test.css';
import { Link } from 'react-router-dom'

const products = [{
  name: 'Помидоры',
  link: '/',
  img: 'https://cdnn1.img.sputnik.tj/img/102834/31/1028343170_0:161:3071:1888_1920x0_80_0_0_4090be53c37917b3e9b3e15c74136081.jpg',
  price: 400,
  desc: 'good',
  userImg: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg',
},
{
  name: 'Персики',
  link: '/',
  img: 'https://www.gastronom.ru/binfiles/images/20190712/b8ffb322.jpg',
  price: 430,
  desc: 'good',
  userImg: 'https://n1s1.elle.ru/13/93/49/13934924bb5dfe4a3b346fa62e59b967/460x598_0xc0a839a4_281420171479222123.jpeg',
},
{
  name: 'Огурцы',
  link: '/',
  img: 'https://regnum.ru/uploads/pictures/news/2020/02/04/regnum_picture_1580805495351590_normal.jpg',
  price: 150,
  desc: 'good',
  userImg: 'https://on-style.com.ua/wp-content/uploads/2012/11/serdechko.jpg',
},
{
  name: 'Яблоки',
  link: '/',
  img: 'https://aif-s3.aif.ru/images/018/624/ded4f53e7867f09b37f3f4d8d0c0a327.jpg',
  price: 350,
  desc: 'good',
  userImg: 'https://irinakhrustaleva.com/upload/medialibrary/8e4/8e4f38234003be08e5b867312de42d3e.jpg',
},
{
  name: 'Морковь',
  link: '/',
  img: 'https://images11.domashnyochag.ru/upload/img_cache/300/30029f6f7d91498d5863608b0eb9aae1_cropped_666x500.jpg',
  price: 180,
  desc: 'good',
  userImg: 'https://bigpicture.ru/wp-content/uploads/2014/10/idealman01.jpg',
},
{
  name: 'Авокадо',
  link: '/',
  img: 'https://menu-doma.ru/wp-content/uploads/2019/07/k2_items_src_349c990ab6c453afa79180a77c74b6f4-680x453.jpg',
  price: 350,
  desc: 'good',
  userImg: 'https://manrule.ru/images/article/orig/2019/09/kak-muzhchine-podobrat-prichesku-po-forme-lica-5.jpg',
},
{
  name: 'Картофель',
  link: '/',
  img: 'https://технология-бизнеса.рф/upload/iblock/7ff/7ffb70a27ac102f00a536d7b84714903.jpg',
  price: 120,
  desc: 'good',
  userImg: 'https://epilike.ru/wp-content/uploads/sites/2/2016/06/q196.jpg',
},
{
  name: 'Малина',
  link: '/',
  img: 'https://n1s1.hsmedia.ru/dd/d9/11/ddd911403610641b56ba540841dfa8cc/728x710_1_4a88e979c508786896ffe20f9d4bb319@788x768_0xac120003_18402369281615820406.jpg',
  price: 600,
  desc: 'good',
  userImg: 'https://n1s2.hsmedia.ru/be/26/2d/be262d6e23c334543f2e6f9d72ad20f2/400x600_0x0a330ca2_4528972641525770319.jpeg',
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
