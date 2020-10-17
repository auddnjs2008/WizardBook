import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Wizard from "Components/Wizard";
import Background from "../../images/후플배경.jpg";

const Container=styled.div`
    background-image:url(${Background});
    background-size:contain;
    background-position:center center;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
    padding:20px;  

`;


const HupPresenter=({studentInfo,error,loading})=>
 loading ? <Loader/> : <Container>
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



HupPresenter.propTypes={
    studentInfo:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
}


export default HupPresenter;