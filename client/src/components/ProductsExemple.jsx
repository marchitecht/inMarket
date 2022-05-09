import styled, { keyframes } from "styled-components";

const products = [{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://images.news18.com/ibnlive/uploads/2021/08/tomato1-16299798874x3.jpg',
  price: 1500,
  desc: 'bad',
  userImg: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://images.news18.com/ibnlive/uploads/2021/08/tomato1-16299798874x3.jpg',
  price: 1500,
  desc: 'bad',
  userImg: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://images.news18.com/ibnlive/uploads/2021/08/tomato1-16299798874x3.jpg',
  price: 1500,
  desc: 'bad',
  userImg: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
},{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://images.news18.com/ibnlive/uploads/2021/08/tomato1-16299798874x3.jpg',
  price: 1500,
  desc: 'bad',
  userImg: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
},]

function ProductsExemple() {
  return (
    <>
      <Flex>
        <Container>
          {products.map(product => (
            <Card>
            <ProductName>Цена: {product.price}, Состояние: {product.desc}
            <Description>{product.name}</Description>
            </ProductName>
            <ProductPhoto img={product.img}></ProductPhoto>
            <UserPhoto userImg={product.userImg}></UserPhoto>
            </Card>
          ))}
          
          
        </Container>
      </Flex>
    </>
  );
}

export default ProductsExemple;

const Flex = styled.div`
  padding-top: 100px;
`;

const Container = styled.div`
  position: relative;
  width: 1800px;
  height: 80vh;
  background-color: #8f8989;
  overflow-y: scroll;
  z-index: 1;
`;

const Card = styled.div`
position: relative;
 /* margin-top: 20px; */
 /* background-color: #3d3d3d; */
 width: 800px;
 height: 200px; 
`
const ProductPhoto = styled.div`
position: absolute;
 background-color: #bb8888;
 background-image: url(${props => props.img});
 background-size: 130%;
 background-position: center;
 display: flex;
 align-items: center;
 width: 200px;
 height: 200px;
 border-radius: 100%;
 left: -100px;
 z-index: 3;
`
const UserPhoto = styled.div`
position: absolute;
background-color: #bb8888;
background-image: url(${props => props.userImg});
 background-size: 130%;
 background-position: center;
 display: flex;
 align-items: center;
 width: 200px;
 height: 200px;
 border-radius: 100%;
 right: -100px;
 z-index: 3;

 `
 const Description = styled.div`
 position: relative;
  background-color: #afadad;
  text-align: center;
  width: 800px;
  height: 100px;
  margin-top:-100px;
  line-height: 100px;
  font-size: 30px;
  cursor: pointer;
  transition: margin-top 0.3s;
 `

const ProductName = styled.div`
position: absolute;
 background-color: #afadad;
 text-align: center;
 width: 800px;
 height: 100px;
 top: 50px;
 line-height: 100px;
 font-size: 30px;
 cursor: pointer;
 transition: top 0.3s;
 :hover {
  top: 100px;
 }
 :hover ${Description} {
   margin-top: -200px;
 }
`
