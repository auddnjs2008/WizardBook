import React from "react";
import {SlytherinApi} from "../../api";
import SlyPresenter from "./SlyPresenter";

export default class extends React.Component{
    state={
        studentInfo :null,
        loading:true,
        error:null
    }

    async componentDidMount(){
        try{
            const {data} = await SlytherinApi.characters();
           
            this.setState({studentInfo: data});
        }catch(error){
            this.setState({error:"Can't find Info"});
        }finally{
            this.setState({loading:false});
        }
    }

    render(){
        const {studentInfo , error,loading} =this.state;
        return <SlyPresenter
            studentInfo ={studentInfo}
            error={error}
            loading={loading}
        ></SlyPresenter>
    }    

}