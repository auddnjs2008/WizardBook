import React from "react";
import styled from "styled-components";
import Map from "../images/호그와트지도.jpg";

const Image = styled.div`
    position:absolute;
    top:0;
    left:0;
    background-image:url(${Map});
    background-size:contain;
    background-position:center center;
    width:100vw;
    height:100vh;
    z-index:1;
`

export default () => <Image></Image>;