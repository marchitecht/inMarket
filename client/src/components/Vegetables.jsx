import styled, { keyframes } from "styled-components";
// import tomato from "../img/categoryImg/vej/pom.jpg";
// import cabach from "../img/categoryImg/vej/cabach.jpg";
// import morc from "../img/categoryImg/vej/morc.jpg";
// import capusta from "../img/categoryImg/vej/capusta.jpg";
// import pot from "../img/categoryImg/vej/pot.jpg";
// import ogur from "../img/categoryImg/vej/ogur.jpg";
// import svekla from "../img/categoryImg/vej/svekla.jpg";
// import perec from "../img/categoryImg/vej/perec.jpg";
import purpleArrow from "../img/footerIcons/purple_arrow.png";
import { useMemo, useState,useEffect } from "react";
import { useDispatch, useSelector,useLocation, useNavigate } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCategory } from "../redux/reducers/productsReducer";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'

// let staticVegies = [
//   {
//     img: tomato,
//     link: "/vegetables/tomatos",
//     name: "Помидоры",
//   },
//   {
//     img: morc,
//     link: "/vegetables/carrot",
//     name: "Морковь",
//   },
//   {
//     img: cabach,
//     link: "/vegetables/zucchini",
//     name: "Кабачки",
//   },
//   {
//     img: capusta,
//     link: "/vegetables/cabbage",
//     name: "Капуста",
//   },
//   {
//     img: pot,
//     link: "/vegetables/potato",
//     name: "Картофель",
//   },
//   {
//     img: ogur,
//     link: "/vegetables/cucumbers",
//     name: "Огурцы",
//   },
//   {
//     img: svekla,
//     link: "/vegetables/beet",
//     name: "Свекла",
//   },
//   {
//     img: perec,
//     link: "/vegetables/pepper",
//     name: "Перец",
//   },
// ];


function Vegetables() {
  const {categoryName} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('in useEFF');
    dispatch(getCategory(categoryName))
  }, [dispatch, categoryName])
  const {subcategories} = useSelector(store => store.productsReducer)
  return ( 
    <div>
      <Wrapper>
        <h3>{categoryName}</h3>
        <Splide 
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
            }}>
          {subcategories?.map((subcategory)=> {
            return(
              <SplideSlide key={subcategory.id}>
                <Card>
                <Link to={'/subcategory/'+subcategory.id}>
                  <p>{subcategory.subCategoryName}</p>
                  <img src={`http://localhost:5000/${subcategory.subCategoryImg}`} alt={subcategory.subCategoryName} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
padding: 2rem;  
`;
const Card = styled.div`
padding: 3rem;
min-height: 25rem;
border-radius: 14px;
overflow: hidden;
position: relative;
transition: transform 1s both;
:hover{
  /* transform: translateY(-1.5rem) scale(1.03);
  border-radius: 1rem; */
  animation: moveToTop 0.2s ease-in-out both;
  }

img{
    margin: 1.5rem 1rem;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
p{
    position: absolute;
    z-index: 10;
    bottom: 0%;
    transform: translate(-50%, 0%)
    color: white;
    width: 100%;
    text-align: center;
    font-weigth: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes moveToTop {
    0% {

    }
    100% {
      /* transform: translateY(-5px) */
      transform: translateY(-1.5rem) scale(1.03);
      border-radius: 2rem;
  
    }
  }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  heigth: 100%;
  background: white;
  
`;
export default Vegetables
