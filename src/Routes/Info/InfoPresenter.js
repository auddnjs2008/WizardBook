import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "Components/Loader";

import Lion from "../../images/사자.gif";
import Snake from "../../images/뱀.gif";
import Rat from "../../images/오소리.gif";
import Bird from "../../images/새.gif";
import Hogwart from "../../images/호그와트마크.png";
import Message from "../../images/올빼미.png";
import Magic from "../../images/마법2.png";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color: #353b48;
`;
const Name = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: white;
`;

const MessageWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;

  @keyframes fly {
    0% {
      top: 0px;
      left: 0px;
    }
    10% {
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "10px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "15%"
          : "0"};
    }
    20% {
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "20px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "25%"
          : "0"};
    }
    30% {
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "30px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "35%"
          : "0"};
    }
    40% {
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "35px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "40%"
          : "0"};
    }
    50% {
      left: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Hufflepuff"
          ? "13%"
          : props.dormitory === "Slytherin" || props.dormitory === "Ravenclaw"
          ? "30%"
          : "0"};
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "40px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "45%"
          : "0"};
    }
    60% {
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "45px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "48%"
          : "0"};
    }
    70% {
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "50px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "50%"
          : "0"};
    }
    100% {
      left: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Hufflepuff"
          ? "25%"
          : props.dormitory === "Slytherin" || props.dormitory === "Ravenclaw"
          ? "75%"
          : "0"};
      top: ${(props) =>
        props.dormitory === "Gryffindor" || props.dormitory === "Slytherin"
          ? "50px"
          : props.dormitory === "Hufflepuff" || props.dormitory === "Ravenclaw"
          ? "53%"
          : "0"};
      transform: translate(-50%, -50%);
    }
  }
  animation: fly 1.5s linear forwards;
  background-image: url(${Message});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Gryffindor = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Lion});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #150000;
`;
const Slytherin = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Snake});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #061000;
`;
const Hufflepuff = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Rat});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #261c00;
`;
const Ravenclaw = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Bird});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #010001;
`;

const SLink = styled(Link)`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;
  background-color: #1e272e;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const ALink = styled(Link)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${Magic});
  background-size: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes spellOnEffect {
    0% {
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) scale(7) rotate(360deg);
    }
  }

  @keyframes spellOutEffect {
    0% {
      transform: translate(-50%, -50%) scale(7) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(360deg);
    }
  }

  @keyframes none {
  }
  transform-origin: center center;
  animation: ${(props) =>
      props.bgimg === 1
        ? "spellOnEffect"
        : props.bgimg === 2
        ? "spellOutEffect"
        : "none"}
    1s linear forwards;
`;

const Mark = styled.div`
  width: 210px;
  height: 210px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${Hogwart});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
const InfoPresenter = ({
  name,
  dormitory,
  error,
  backgroundImg,
  loading,
  handleClick,
  handleMouseOut,
}) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <>
        <Name>{name}</Name>
        <SLink to="/Gryffindor">
          <Gryffindor></Gryffindor>
        </SLink>
        <SLink to="/Slytherin">
          <Slytherin></Slytherin>
        </SLink>
        <SLink to="/Hufflepuff">
          <Hufflepuff></Hufflepuff>
        </SLink>
        <SLink to="/Ravenclaw">
          <Ravenclaw></Ravenclaw>
        </SLink>
        <Mark></Mark>
        <MessageWrapper dormitory={dormitory}></MessageWrapper>
        <ALink
          to="/spell"
          onMouseEnter={handleClick}
          onMouseLeave={handleMouseOut}
          bgimg={backgroundImg}
        ></ALink>
      </>
    </Container>
  );

InfoPresenter.propTypes = {
  name: PropTypes.string,
  dormitory: PropTypes.string,
  error: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  backgroundImg: PropTypes.number,
};

export default InfoPresenter;
