import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Wizard from "Components/Wizard";
import Background from "../../images/래번학생배경.jpg";

const Container =styled.div`
    background-image:url(${Background});
    background-size:contain;
    background-position:center center;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
    padding:20px;    
`



const RavPresenter =({studentInfo,loading,error}) =>
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

RavPresenter.propTypes={
    studentInfo:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
}

export default RavPresenter;