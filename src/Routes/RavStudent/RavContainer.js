import React from "react";
import RavPresenter from "./RavPresenter";
import {RavenclawApi} from "../../api";

export default class extends React.Component{
    state={
        studentInfo:null,
        error:null,
        loading:true,
    }
    async componentDidMount(){
        try{
            const {data}=await RavenclawApi.characters();
            this.setState({studentInfo:data});
        }catch(error){
            this.setState({error:"Can't find Info"});
        }finally{
            this.setState({loading:false});
        }

    }


    render(){
        const {studentInfo,loading,error} = this.state;
        return <RavPresenter
            studentInfo={studentInfo}
            error={error}
            loading={loading}
        ></RavPresenter>
    }
}
