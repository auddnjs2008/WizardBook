import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Loader2 from "Components/Loader2";

import {Link} from "react-router-dom";
import Dormitory from "Components/Dormitory";
import Background from "../../images/후플기숙사.jpg";
import img1 from "../../images/신동.jpg";
import img2 from "../../images/새드릭.gif";
import img3 from "../../images/신동2.PNG";
import img4 from "../../images/신동3.PNG";
import img5 from "../../images/신비한동물.PNG";
import student from "../../images/동물.png";

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
    background-image:url(${Background});
    opacity:0.9;
`;
const Container=styled.div``;

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
    right:0px;
 img{
    object-fit:cover;
    width:290px;
    height:250px;
    }
    div{
        color:white;
        text-align:center;
        font-size:20px;
    }`;


const HufflepuffPresenter = ({houseInfo,error,loading,slider,handleLeftClick,handleRightClick}) => 
loading ? <Loader2/> : 
<Container>
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
    <SLink to="/Hufflepuff/students">
            <img src={student}/>
            <div>Hufflepuff Student</div>
    </SLink>
    <IconLeft><FontAwesomeIcon icon={faAngleLeft} onClick={handleLeftClick}/></IconLeft>
    <IconRight><FontAwesomeIcon icon={faAngleRight} onClick={handleRightClick}/></IconRight>
</Container>




HufflepuffPresenter.propTypes={
    houseInfo:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleRightClick:PropTypes.func,
  handleLeftClick:PropTypes.func,

}

export default HufflepuffPresenter;
