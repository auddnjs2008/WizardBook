import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import GryStudent from "../images/그리학생.jpg";
import SlyStudent from "../images/슬리학생.jpg";
import HupStudent from "../images/후플학생.jpg";
import RavStudent from "../images/래번학생.jpg";



const Wrapper = styled.div`
display:grid;
grid-template-columns: 110px 1fr;
border-radius:30px;
background-color:rgba(0,0,0,0.6);
padding:10px;
    img{
        width:100px;
        height:100px;
        object-fit:cover;
    }

`;
const Info = styled.div`
    h1{
        font-size:20px;
        color:white;
        span{
            font-size:18px;
            color:#f1c40f;
        }
    }
`;


const Wizard = ({house,bloodStatus, deathEater, dumbledoresArmy,name,role,species}) =>(
    <Wrapper>
        <img src={house === "Gryffindor" ? GryStudent :(house==="Slytherin" ? SlyStudent : (house === "Hufflepuff" ? HupStudent : RavStudent)) }></img>
        <Info>
            <h1>Name: <span>{name}</span></h1>
            <h1>Roles: <span>{role}</span></h1>
            <h1>Species: <span>{species}</span></h1>
            <h1>BloodStatue: <span>{bloodStatus}</span></h1>
            <h1>DeathEater: <span>{`${deathEater}`}</span></h1>
            <h1>DumbledoresArmay: <span>{`${dumbledoresArmy}`}</span></h1>     
        </Info>
    </Wrapper>

)

Wizard.propTypes ={
    house:PropTypes.string,
    name:PropTypes.string,
    role:PropTypes.string,
    species:PropTypes.string,
    bloodStatue:PropTypes.string,
    deathEater:PropTypes.bool,
    dumbledoresArmy:PropTypes.bool
}

export default Wizard;