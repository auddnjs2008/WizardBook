import React from "react";
import RavenclawPresenter from "./RavenclawPresenter";
import {RavenclawApi} from "../../api";


export default class extends React.Component {
  state={
    houseInfo:null,
    loading:true,
    error:null,
  }

  async componentDidMount(){
    try{
       const {data} = await RavenclawApi.houseInfo();
       console.log(data);
       this.setState({houseInfo:data[0]}); 
    }catch(error){
      this.setState({error:"Can't find Information"});
    }finally{
      this.setState({loading:false});
    } 

  }
  
  render() {
    const {houseInfo,loading,error} = this.state;
    return <RavenclawPresenter
      houseInfo={houseInfo}
      loading={loading}
      error={error}
    ></RavenclawPresenter>;
  }
}
