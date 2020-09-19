import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "Components/Loader";
import Gryfin from "../../images/그리핀도르.png";
import Slythe from "../../images/슬리데린.png";
import Huffle from "../../images/후풀푸프.png";
import Raven from "../../images/래번클루.png";
import Hogwart from "../../images/호그와트마크.png";
import Message from "../../images/올빼미.png";

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
  width: 60%;
  height: 70%;
  background-image: url(${Gryfin});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #1e272e;
`;
const Slytherin = styled.div`
  width: 55%;
  height: 70%;
  background-image: url(${Slythe});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #1e272e;
`;
const Hufflepuff = styled.div`
  width: 55%;
  height: 71%;
  background-image: url(${Huffle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #1e272e;
`;
const Ravenclaw = styled.div`
  width: 60%;
  height: 70%;
  background-image: url(${Raven});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #1e272e;
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
const InfoPresenter = ({ name, dormitory, error, loading }) =>
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
      </>
    </Container>
  );

InfoPresenter.propTypes = {
  name: PropTypes.string,
  dormitory: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default InfoPresenter;
