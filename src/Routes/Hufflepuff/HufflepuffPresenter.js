import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import {Link} from "react-router-dom";
import Dormitory from "Components/Dormitory";
import Background from "../../images/후플기숙사.jpg";
import img1 from "../../images/신동.jpg";
import img2 from "../../images/새드릭.gif";
import img3 from "../../images/신동2.PNG";
import img4 from "../../images/신동3.PNG";
import img5 from "../../images/신비한동물.PNG";
import student from "../../images/동물.png";

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

const ImageWrapper =styled.div`
    margin-top:20px;
    display:flex;
    img{
        width:350px;
        height:300px;
        object-fit:cover;
    }`;

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


const HufflepuffPresenter = ({houseInfo,error,loading}) => 
loading ? <Loader/> : 
<Container>
    <BackgroundImage></BackgroundImage>
    <Dormitory houseInfo={houseInfo}></Dormitory>
    <ImageWrapper>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
    </ImageWrapper>
    <SLink to="/Hufflepuff/students">
            <img src={student}/>
            <div>Hufflepuff Student</div>
        </SLink>
</Container>




HufflepuffPresenter.propTypes={
    houseInfo:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired

}

export default HufflepuffPresenter;
