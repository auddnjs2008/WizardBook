import React from "react";
import styled from "styled-components";
import Loading from "../images/로딩.gif";
const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${Loading});
  background-size: cover;
  background-position: center center;
`;

export default () => <Container></Container>;
