import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Wizard from "Components/Wizard";
import Background from "../../images/그리학생배경.jpg";
const Header = styled.div``;

const Container = styled.div`
    background-image: url(${Background});
    
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
    padding:20px;

`;

const GryPresenter =({studentInfo,error,loading})=>
    loading ? <Loader/> : 
    <>
    <Header></Header>
    <Container>
        {studentInfo.map(student =>
            <Wizard
               house={student.house}
               bloodStatus={student.bloodStatus}
               deathEater={student.deathEater}
               dumbledoresArmy={student.dumbledoresArmy}
               name={student.name}
               role={student.role}
               species={student.species}
            >
            </Wizard>
        )}
    </Container>
    </>

GryPresenter.propTypes={
    studentInfo: PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,

}


export default  GryPresenter;

