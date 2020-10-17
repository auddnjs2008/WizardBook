import React from "react";
import {HufflepuffApi} from "../../api";
import HupPresenter from "./HupPresenter";


export default class extends React.Component{
    state={
        studentInfo:null,
        loading:true,
        error:null
    }

    async componentDidMount(){
        try{
            const {data} = await HufflepuffApi.characters();
            this.setState({studentInfo:data}); 
        }catch(error){
            this.setState({error:"Can't find Info"});
        }finally{
            this.setState({loading:false});
        }
    }
    
    render(){
        const{studentInfo,error,loading} = this.state;
        return <HupPresenter
            studentInfo={studentInfo}
            error={error}
            loading={loading}
        ></HupPresenter>;
    }

}