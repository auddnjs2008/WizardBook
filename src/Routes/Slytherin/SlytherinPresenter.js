import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Loader from "Components/Loader";
import dormitory from "../../images/초록기숙사.jpg";
import Dormitory from "Components/Dormitory";
import Snape from "../../images/스네이프.jpg";
import Malpoy from "../../images/말포이.jpg";
import Bold from "../../images/볼드모트.jpg";
import Write from "../../images/슬리명언.jpg";
import Draco from "../../images/드레이코.png";
import student from "../../images/말포학생.png";

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

const ImageWrapper = styled.div`
margin-top:20px;
    display:flex;
    img{
        width:400px;
        height:400px;
        object-fit:cover;
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

const SlytherinPresenter = ({houseInfo,loading, error}) =>
    loading ? <Loader/> : 
    <Container>
       <BackgroundImage></BackgroundImage>   
       <Dormitory houseInfo={houseInfo}></Dormitory>
        <ImageWrapper>
            <img src={Snape}/>
            <img src={Malpoy}/>
            <img src={Bold}/>
            <img src={Write}/>
            <img src={Draco}/>
        </ImageWrapper>
        <SLink to="/Slytherin/students">
            <img src={student}/>
            <div>Slytherin Student</div>
        </SLink>
    </Container>
    



SlytherinPresenter.propTypes ={
    houseInfo:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}


export default SlytherinPresenter;


