import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Loader from "Components/Loader";
import Dormitory2 from "../../images/레드기숙사.gif";
import Flag from "../../images/그리핀도르깃발.png";
import Dormitory from "../../images/사자기숙사.jpeg";
import Header from "../../images/맥고나걸.jpg";
import Ghost from "../../images/해리포터귀신.jpg";
import Dormitory3 from "../../images/레드기숙사.jpg";
import Harry from "../../images/해리.png";

import {
  faAngle,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${Dormitory2});

  background-size: content;
  background-repeat: repeat;
  background-position: center bottom;
  z-index: -1;
  opacity: 0.6;
`;

const GridWrapper = styled.div`
  display: grid;
  user-select: none;
  height: 90%;
  grid-template-columns: 1fr 3fr;
`;

const SubGridWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 1fr 1.5fr;
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: #f1c40f;
  font-weight: 600;
  font-size: 20px;
`;

const ImageSlider = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:repeat(2,1fr);
  
`;

const SliderItems = styled.div`
  width:200px;
  height:200px;
  object-fit:cover;
  img{
    width:200px;
  height:200px;
  object-fit:cover
  }
`;


const FlagImage = styled.div`
  width: 210px;
  height: 400px;
  background-image: url(${Flag});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Title = styled.span`
  font-size: 25px;
  color: #eb2f06;
  font-weight: 700;
  margin-right: 20px;
`;
const Mascot = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const HeadOfHouse = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const HouseGhost = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const ValuesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 2fr;
  span {
    display: flex;
    li {
      margin-right: 10px;
    }
  }
`;



const Colors = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  div {
    display: flex;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-child(1) {
        color: #f72202;
        margin-right: 20px;

        div {
          width: 20px;
          height: 20px;
          background-color: #f72202;
        }
      }
      &:nth-child(2) {
        color: #fed703;
        div {
          width: 20px;
          height: 20px;
          background-color: #fed703;
        }
      }
    }
  }
`;

const SLink = styled(Link)`
  position:absolute;
  bottom:50px;
  left:50px;
  color:white;
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
    width:100px;
    height:190px;
    object-fit:cover;
  }
`;





const GryffindorPresenter = ({
  houseInfo,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <BackgroundImg></BackgroundImg>

      <GridWrapper>
        <FlagImage></FlagImage>
        <SubGridWrapper>
          <SubContainer>
            <Mascot>
              <Title>MasCot</Title>
              {houseInfo.mascot}
            </Mascot>

            <HeadOfHouse>
              <Title>Head Of House</Title>
              {houseInfo.headOfHouse}
            </HeadOfHouse>
            <HouseGhost>
              <Title>House Ghost</Title>
              {houseInfo.houseGhost}
            </HouseGhost>
            <ValuesWrapper>
              <Title>Values</Title>
              <span>
                {houseInfo.values.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </span>
            </ValuesWrapper>
            <Colors>
              <Title>Colors</Title>
              <div>
                {houseInfo.colors.map((color) => (
                  <span>
                    <div></div>
                    {color}
                  </span>
                ))}{" "}
              </div>
            </Colors>
          </SubContainer>
          <ImageSlider >
            <SliderItems>
              <img src={Dormitory} alt="img"></img>
            </SliderItems>
            <SliderItems>
              <img src={Header} alt="img"></img>
            </SliderItems>
            <SliderItems>
              <img src={Ghost} alt="img"></img>
            </SliderItems>
            <SliderItems>
              <img src={Dormitory3} alt="img"></img>
            </SliderItems>
          </ImageSlider>
       
        </SubGridWrapper>
      </GridWrapper>
    <SLink to="/Gryffindor/students">
       <img src={Harry} alt="img"></img>  
       <div>Gryffindor Student </div>        
    </SLink>
    
    </Container>
  );

GryffindorPresenter.propTypes = {
  houseInfo: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default GryffindorPresenter;
