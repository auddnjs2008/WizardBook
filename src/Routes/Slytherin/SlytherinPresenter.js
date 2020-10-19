import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Loader from "Components/Loader";
import Loader2 from "Components/Loader2";

import dormitory from "../../images/초록기숙사.jpg";
import Dormitory from "Components/Dormitory";
import Snape from "../../images/스네이프.jpg";
import Malpoy from "../../images/말포이.jpg";
import Bold from "../../images/볼드모트.jpg";
import Write from "../../images/슬리명언.jpg";
import Draco from "../../images/드레이코.png";
import student from "../../images/말포학생.png";

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
    height:250px;
    }
    div{
        color:white;
        text-align:center;
        font-size:20px;
    }
`;

const SlytherinPresenter = ({houseInfo,loading, error,slider,handleLeftClick,handleRightClick}) =>
    loading ? <Loader2/> : 
    <Container>
       <BackgroundImage></BackgroundImage>   
       <Dormitory houseInfo={houseInfo}></Dormitory>
        <ImageWrapper ref={slider}>
            <ImageSlider >
            <img src={Snape}/>
            <img src={Malpoy}/>
            <img src={Bold}/>
            <img src={Write}/>
            <img src={Draco}/>
            </ImageSlider>
        </ImageWrapper>
        <SLink to="/Slytherin/students">
            <img src={student}/>
            <div>Slytherin Student</div>
        </SLink>
        <IconLeft><FontAwesomeIcon icon={faAngleLeft} onClick={handleLeftClick}/></IconLeft>
        <IconRight><FontAwesomeIcon icon={faAngleRight} onClick={handleRightClick}/></IconRight>
    </Container>
    



SlytherinPresenter.propTypes ={
    houseInfo:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}


export default SlytherinPresenter;


