import styled, { keyframes } from "styled-components";

const products = [{
  name: 'bakinskie pomidori',
  link: '/',
  img: 'https://delimanoua.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg',
  price: 1000,
  desc: 'good',
  userImg: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
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
 width: 800px;
 height: 200px; 
`
const ProductPhoto = styled.div`
position: absolute;
box-shadow: 20px 20px 50px #585858;
 background-color: #bb8888;
 background-image: url(${props => props.img});
 background-repeat: no-repeat;
 background-size: 130%;
 background-position: center;
 display: flex;
 align-items: center;
 width: 300px;
 height: 400px;
 border-radius: 15px;
 left: -100px;
 z-index: 3;
`
const UserPhoto = styled.div`
position: absolute;
background-color: #bb8888;
background-image: url(${props => props.userImg});
background-repeat: no-repeat;
 background-size: 130%;
 background-position: center;
 display: flex;
 align-items: center;
 width: 60px;
 height: 60px;
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
