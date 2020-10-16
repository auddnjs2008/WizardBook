import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Wizard from "Components/Wizard";
import Loader from "Components/Loader";
import Background from "../../images/슬리배경화면.jpg";

const Container =styled.div`
    background-image:url(${Background});
    background-size:cover;
    background-position:center center;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
    padding:20px;    
`


const SlyPresenter= ({studentInfo , error,loading}) =>
loading ? <Loader/> :
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


SlyPresenter.propTypes={
    studentInfo:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
}

export default SlyPresenter;