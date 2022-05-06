import styled from "styled-components";
import icon1 from "../img/footerIcons/vk_w.png";
import icon2 from "../img/footerIcons/face_w.png";
import icon3 from "../img/footerIcons/twitter_w.png";
import icon4 from "../img/footerIcons/inst_w.png";
import { useNavigate } from "react-router-dom";

const iconsArray = [{
  img: icon1,
  link: '/',
  name: 'Вконтакте',
},{
  img: icon2,
  link: '/',
  name: 'Facebook',
},{
  img: icon3,
  link: '/',
  name: 'Twitter',
},{
  img: icon4,
  link: '/',
  name: 'Instagram',
},]

function Footer() {

const navigate = useNavigate()

  return ( 
    <>
   <FooterDiv>
     <IconsContainer>
       {iconsArray.map((el) => {
         return(
           <Icons onClick={()=> navigate(el.link)} icon={el.img} name={el.name}></Icons>
         )
       })}
     </IconsContainer>
     <DataContainer>© {new Date().getFullYear()} Copyright Text</DataContainer>
    </FooterDiv>
   
    </>
   );
}

const FooterDiv = styled.div`
background: rgb(166,8,255);
background: linear-gradient(90deg, rgba(166,8,255,1) 21%, rgba(223,57,244,1) 100%);
position: fixed;
bottom: 0;
left: 0;
width: 100vw;
height: 65px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 7px;
opacity: 0.6;
transition: opacity 0.3s;
:hover {
  opacity: 1;
}
`
 
const IconsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
position: relative;

`
const DataContainer = styled.div`
color: white;
font-weight: bold;
`
const Icons = styled.div`
position: relative;
height: 24px;
width: 24px;
background-image: url(${props => props.icon});
background-size: 20px;
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
:hover{
  background-size: 24px;
}
:hover::after{
  content: '${props => props.name}';
  height: 20px;
  width: ${props => props.name.length * 16}px;
  font-size: 15px;
  background-color: #f6ffd4;
  line-height: 20px;
  text-align: center;
  border: 1px solid black;
  margin-top: -30px;
  margin-left: -${props => props.name.length * 6}px;
  position: absolute;
  opacity: 0.9;
  border-radius: 5px;
}
`

export default Footer;
