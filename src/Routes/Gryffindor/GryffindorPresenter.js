import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Banner from "../../images/그리핀도르배너.png";

import Dormitory2 from "../../images/레드기숙사.gif";
import Flag from "../../images/그리핀도르깃발.png";
import Dormitory from "../../images/사자기숙사.jpeg";
import Header from "../../images/맥고나걸.jpg";
import Ghost from "../../images/해리포터귀신.jpg";
import Dormitory3 from "../../images/레드기숙사.jpg";

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
  width: 50%;
  height: 400px;
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
    behavior: "smooth";
  }
`;

const SliderItems = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

const SliderLeftArrow = styled.span`
  position: absolute;
  top: 63%;
  left: -25px;
  font-size: 50px;
`;

const SliderRightArrow = styled.span`
  position: absolute;
  top: 63%;
  right: 50%;
  transform: translateX(100%);
  font-size: 50px;
`;

const BannerImage = styled.div`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  background-image: url(${Banner});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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

const GryffindorPresenter = ({
  houseInfo,
  error,
  loading,
  Length,
  value,
  SliderRef,
  leftSliderControl,
  rightSliderControl,
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
          <ImageSlider ref={SliderRef} movieValue={value}>
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
          <SliderLeftArrow onClick={leftSliderControl}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </SliderLeftArrow>
          <SliderRightArrow onClick={rightSliderControl}>
            <FontAwesomeIcon icon={faAngleRight} />
          </SliderRightArrow>
        </SubGridWrapper>
      </GridWrapper>
    </Container>
  );

GryffindorPresenter.propTypes = {
  houseInfo: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  Length: PropTypes.number,
  value: PropTypes.number,
  leftSliderControl: PropTypes.func,
  rightSliderControl: PropTypes.func,
};

export default GryffindorPresenter;
