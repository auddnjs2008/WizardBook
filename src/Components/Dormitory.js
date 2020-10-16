import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const GridWrapper = styled.div`
    padding:20px;
    display:grid;
    height:50vh;
    grid-template-rows:repeat(4,1fr);
    justify-content:center;
    color:white;
`;

const Title = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 200px 1fr;
    font-size:20px;
    font-weight:600;
`;
const Content = styled.span`
    margin-right:10px;
    font-size:18px;
`;
const ContentWrapper = styled.div``;

const Dormitory=({houseInfo}) => <GridWrapper>
    <Title>MasCot  <Content>{houseInfo.mascot}</Content></Title>
    <Title>Head of House<Content>{houseInfo.headOfHouse}</Content></Title>
    <Title>House Ghost <Content>{houseInfo.houseGhost}</Content></Title>
    <Title>Values <ContentWrapper>{houseInfo.values.map(value=><Content>{value}</Content>)}</ContentWrapper></Title>   
    <Title>Colors <ContentWrapper>{houseInfo.colors.map(value=><Content>{value}</Content>)}</ContentWrapper></Title>
</GridWrapper> 


Dormitory.propTypes={
    houseInfo: PropTypes.object,
}

export default Dormitory;