import React from "react";
import GryPresenter from "./GryPresenter";
import {GryffindorApi} from "../../api";
export default class extends React.Component{
    state={
        studentInfo :null,
        loading:true,
        error:null
    }

    
    async componentDidMount(){
        try{
            const {data} =await GryffindorApi.characters();
            
            this.setState({studentInfo:data});
        }catch(error){
            this.setState({error:"Can't find Info"});
        }finally{
            this.setState({loading:false});
        }
    }
    render(){
        const {studentInfo, loading, error} =this.state;

        return <GryPresenter
        studentInfo={studentInfo}
        loading={loading}
        error={error}
        >
        </GryPresenter>
    }

}