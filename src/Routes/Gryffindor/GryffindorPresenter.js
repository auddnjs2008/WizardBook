import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Loader from "Components/Loader";
import Loader2 from "Components/Loader2";
import Dormitory from "Components/Dormitory";

import Dormitory2 from "../../images/레드기숙사.gif";

import Header from "../../images/맥고나걸.jpg";
import Dumble from "../../images/덤블도어.jpg";
import Harry2 from "../../images/해리2.jpg";
import three from "../../images/삼총사.jpg";
import Harry3 from "../../images/해리방.png";


import Harry from "../../images/해리.png";

import {
  faAngle,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackgroundImg=styled.div`
    width:100vw;
    height:100vh;
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    background-image:url(${Dormitory2});
    background-position:center center;
    opacity:0.9;
`;

const Container = styled.div`

`;

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
    top:100px;
    right:30px;
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
    height:370px;
    }
    div{
        color:white;
        text-align:center;
        font-size:20px;
    }
`;

const GryffindorPresenter = ({
  houseInfo,
  error,
  loading,
  slider,
  handleLeftClick,
  handleRightClick
}) =>
  loading ? (
    <Loader2 />
  ) : (
    <Container>
      <BackgroundImg></BackgroundImg>
      <Dormitory houseInfo={houseInfo}></Dormitory>
         
        <ImageWrapper ref={slider}>
          <ImageSlider>
            <img src={Header}/>
            <img src={Dumble}/>
            <img src={Harry2}/>
            <img src={three}/>
            <img src={Harry3}/>
            </ImageSlider>

        </ImageWrapper>
        
        <SLink to="/Gryffindor/students">
            <img src={Harry}/>
            <div>Gryffindor Student</div>
        </SLink>
        <IconLeft><FontAwesomeIcon icon={faAngleLeft} onClick={handleLeftClick}/></IconLeft>
        <IconRight><FontAwesomeIcon icon={faAngleRight} onClick={handleRightClick}/></IconRight>
    </Container>
  );

GryffindorPresenter.propTypes = {
  houseInfo: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleRightClick:PropTypes.func,
  handleLeftClick:PropTypes.func,
};

export default GryffindorPresenter;
