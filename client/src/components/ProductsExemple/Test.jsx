import React from "react";
import './test.css';

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
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social__item" href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="card__info">
        <div className="card__name">Помидоры </div>
        <div className="card__prof">Цена</div>
      </div>
    </div>
    </div>
  );
}
export default TestPage;
