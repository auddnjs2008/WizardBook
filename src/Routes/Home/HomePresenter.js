import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hallway from "../../images/연회장.jpg";
import hat from "../../images/분류모자.png";
import Loading from "Components/Loader";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${hallway});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HatWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${hat});
  background-size: cover;
  background-position: center center;

  @keyframes hatMove {
    0% {
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
    }
  }

  & {
    animation: hatMove 3s linear infinite;
  }
`;

const FormContainer = styled.form`
  input {
    border: none;
    outline: none;
    all: unset;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    height: 50px;
  }
`;

const Dormitory = styled.div`
  font-size: 30px;
  color: #ff4757;
  margin-top: 20px;
  @keyframes enter {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  animation: enter 2s linear;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  position: absolute;
  bottom: 50px;
  font-size: 25px;
  padding: 5px;
  background-color: gray;
  border-radius: 20px;

  @keyframes enter {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  animation: enter 2s linear;
`;

const HomePresenter = ({
  randomRoom,
  Name,
  handleSubmit,
  updateTerm,
  error,
  loading,
  Entrance,
}) => (
  <Container>
    <>
      <HatWrapper></HatWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          value={Name}
          placeholder="What is your name?"
          onChange={updateTerm}
        />
      </FormContainer>
      {loading ? (
        <Loading />
      ) : (
        <>{randomRoom ? <Dormitory>{randomRoom}</Dormitory> : ""}</>
      )}

      {Entrance ? <SLink to="/info">Entrance</SLink> : ""}
    </>
  </Container>
);

HomePresenter.propTypes = {
  randomRoom: PropTypes.string,
  Name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  Entrance: PropTypes.bool.isRequired,
};

export default HomePresenter;
