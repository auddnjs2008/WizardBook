import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Loader from "Components/Loader";
import Dormitory from "Components/Dormitory";
import dormitory from "../../images/래번클루기숙사.gif";
import img1 from "../../images/루나러브굿.jpg";
import img2 from "../../images/루나러브굿2.gif";
import img3 from "../../images/초챙.jpg";
import img4 from "../../images/래번파랑.jpg";
import img5 from "../../images/래번파랑2.jpg";
import student from "../../images/래번학생.png";
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



const RavenclawPresenter = ({houseInfo,loading,error}) =>
loading ? <Loader/> : <Container>
<BackgroundImage></BackgroundImage>   
<Dormitory houseInfo={houseInfo}></Dormitory>
 <ImageWrapper>
     <img src={img1}/>
     <img src={img2}/>
     <img src={img3}/>
     <img src={img4}/>
     <img src={img5}/>
 </ImageWrapper>
 <SLink to="/Ravenclaw/students">
     <img src={student}/>
     <div>Ravenclaw Student</div>
 </SLink>
</Container>



RavenclawPresenter.propTypes={
    houseInfo:PropTypes.object,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}


export default RavenclawPresenter;
