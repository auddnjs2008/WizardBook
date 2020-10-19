import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Red from "../../images/빨간마법.png";
import Green from "../../images/초록마법.png";
import Black from "../../images/저주마법.png";
import Magic from "../../images/마법배경1.jpg";


const SpellInfo = styled.ul`
    height:400px;
    background-image:url(${Magic});
    background-size:cover;
    background-position:center center;
    padding:20px;
    border:1px solid black;
    display:grid;
    grid-template-rows:repeat(6,1fr);
    justify-content:center;
    gap:20px;
    li{
        display:grid;
        grid-template-columns:120px 1fr;
        font-size:20px;
        font-weight:600;
        color:#f1c40f;
        span{
            font-size:18px;
            color:white;
            margin-left:50px;
        }
        
    }

`

const GridWrapper=styled.div`
    padding:20px;
    background-color:#130f40;
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(270px,1fr));
    gap:20px;
    color:white;
`;
const Spell = styled.div`
    display:flex;
    align-items:center;
    height:200px;
    border:1px solid black;
    background-color:rgba(0,0,0,0.7);    
    img{
        width:50px;
        height:50px;
        object-fit:cover;
        border-radius:50%;
        margin-right:20px;
    }  
    &:hover{
        transform:scale(1.05,1.05);
        background-color:#f0932b;
    } 
    transition:all 0.3s linear;

`;
const Info = styled.div`
    display:grid;
    grid-template-rows:1fr 1fr 2fr;

    div{
        display:grid;
        grid-template-columns:90px 1fr;
        font-size:20px;
        color:#f1c40f;
       
        span{
            font-size:18px; 
            color:white;   
        }
    }
`;

const SpellPresenter = ({spells,error,loading})=>
loading ? <Loader/> : 
<>
<SpellInfo>
    <li>Jinx <span>장난마법-미약한 어둠의 마법, 대상에게 약간의 불편을 끼침</span></li>
    <li>Charm <span>주문마법-대상의 행동,소양 또는 능력을 변화</span></li>
    <li>Hex <span>희롱마법-통상적인 어둠의 마법, 대상에게 큰 불편을 끼치거나 당황하게 함</span></li>
    <li>Curse <span>저주마법-중대한 어둠의 마법, 대상을 해할 목적으로 큰 피해를 끼침</span></li>
    <li>Enchantment <span>정확히 모름</span></li>
    <li>Spell <span>일반마법(정확하지 않음)</span></li>
</SpellInfo>
<GridWrapper>
    {spells.map(spell => 
        <Spell> 
            {spell.type ==="Charm" ? <img src={Green}/> : (spell.type==="Spell" ? <img src={Red}/> : <img src={Black}/>)}
            <Info>
                <div className="title">Name:{<span>{spell.spell}</span>}</div>
                <div className="type">Type:{<span>{spell.type}</span>}</div>
                <div className="content">Explain: {<span>{spell.effect}</span>}</div>
            </Info>
        </Spell>
    )}    

</GridWrapper>
</>

SpellPresenter.protoType={
    spells:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
}
export default SpellPresenter;