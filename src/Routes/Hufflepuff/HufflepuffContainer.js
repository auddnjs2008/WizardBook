import React from "react";
import {HufflepuffApi} from "../../api";
import HufflepuffPresenter from "./HufflepuffPresenter";

export default class extends React.Component {
  state={
    houseInfo:null,
    loading:true,
    error:null,
  }
  
  async componentDidMount(){
    try{
      const {data} = await HufflepuffApi.houseInfo();
      console.log(data);
      this.setState({houseInfo:data[0]});
    }catch(error){
      this.setState({error:"Can't find Information"});
    }finally{
      this.setState({loading:false});
    }

  }

  
  render() {
    const {houseInfo,error,loading}=this.state;
    return <HufflepuffPresenter
      houseInfo={houseInfo}
      error={error}
      loading={loading}
    ></HufflepuffPresenter>;
  }
}
