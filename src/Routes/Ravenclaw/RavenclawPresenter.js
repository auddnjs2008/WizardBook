import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Loader from "Components/Loader";
import Loader2 from "Components/Loader2";

import Dormitory from "Components/Dormitory";
import dormitory from "../../images/래번클루기숙사.gif";
import img1 from "../../images/루나러브굿.jpg";
import img2 from "../../images/루나러브굿2.gif";
import img3 from "../../images/초챙.jpg";
import img4 from "../../images/래번파랑.jpg";
import img5 from "../../images/래번파랑2.jpg";
import student from "../../images/래번학생.png";

import {
  faAngle,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BackgroundImage=styled.div`
    width:100vw;
    height:100vh;
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    background-image:url(${dormitory});
    background-position:center center;
    opacity:0.9;
`;

const Container = styled.div``;

const IconLeft = styled.div`
    position:absolute;
    bottom:100px;
    left:20px;
    color:white;
    font-size:55px;
`;

const IconRight = styled.div`
  position:absolute;
  bottom:100px;
  right:20px;
  color:white;
  font-size:55px;
`;


const ImageWrapper = styled.div`
margin-top:20px;
background-color:rgba(0,0,0,0.6);
overflow:auto;
    display:flex;

    &::-webkit-scrollbar{
      display:none;
    }
    img{
        width:400px;
        height:400px;
        object-fit:contain;
       
    }

`;

const ImageSlider =styled.div`
  display:flex;
  img{
        width:400px;
        height:400px;
        object-fit:contain;
       
    }
`;

const SLink = styled(Link)`
    position:absolute;
    top:20px;
    right:0px;
    @keyframes sky{
    0%{
      transform:translateY(-50px);

    }
    50%{
      transform:translateY(-70px);
    }
    100%{

    }
  }
  &:hover{
    transform:translateY(-50px);
    animation:sky 2s linear infinite;
  }
  transition: all 1s linear;
    img{
    object-fit:cover;
    width:200px;
    height:330px;
    }
    div{
        color:white;
        text-align:center;
        font-size:20px;
    }
`;



const RavenclawPresenter = ({houseInfo,loading,error,slider,handleLeftClick,handleRightClick}) =>
loading ? <Loader2/> : <Container>
<BackgroundImage></BackgroundImage>   
<Dormitory houseInfo={houseInfo}></Dormitory>
<ImageWrapper ref={slider}>
  <ImageSlider>
    <img src={img1}/>
    <img src={img2}/>
    <img src={img3}/>
    <img src={img4}/>
    <img src={img5}/>
  </ImageSlider>  
</ImageWrapper>
 <SLink to="/Ravenclaw/students">
     <img src={student}/>
     <div>Ravenclaw Student</div>
 </SLink>
 <IconLeft><FontAwesomeIcon icon={faAngleLeft} onClick={handleLeftClick}/></IconLeft>
        <IconRight><FontAwesomeIcon icon={faAngleRight} onClick={handleRightClick}/></IconRight>
</Container>



RavenclawPresenter.propTypes={
    houseInfo:PropTypes.object,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
    handleRightClick:PropTypes.func,
    handleLeftClick:PropTypes.func,
}


export default RavenclawPresenter;
