import React from "react";
import './test.css';

const products = [{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},
{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},]

function TestPage() {
  
  return (
    <div className="card">
    <div className="card__item">
      <div className="card__inner">
        <div className="card__img">
        <img src="https://cdn.nur.kz/images/1120x630/3200b0bfaf02b10a.jpeg" />
        </div>
        <div className="card__text">
          <div className="social">
            <a className="social__item" href="#" target="_blank">
              <i className="like">Избранное</i>
            </a>
            <a className="social__item" href="#" target="_blank">
              <i className="cart">В корзину</i>
            </a>
          </div>
        </div>
      </div>
      <div className="card__info">
        <div>
          <div className="card__name">Помидоры </div>
          <div className="card__prof">Цена</div>
        </div>
        <div className="user_photo">
          Фото
        </div>
      </div>
    </div>
    </div>
  );
}
export default TestPage;
