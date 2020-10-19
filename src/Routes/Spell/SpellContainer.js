import React from "react";
import SpellPresenter from "./SpellPresenter";
import {Spells} from "../../api";


export default class extends React.Component{
    state={
        spells:null,
        error:null,
        loading:true,
    }

    async componentDidMount(){
        try{
        const {data} = await Spells.spells();
        console.log(data);
        this.setState({spells:data});
        }catch(error){
            this.setState({error:"Can't find Information"});
        }finally{
            this.setState({loading:false});
        }

    }
    
 
    render(){
        const{spells,error,loading}=this.state;
        return <SpellPresenter
            spells={spells}
            error={error}
            loading={loading}
        ></SpellPresenter>
    }
}