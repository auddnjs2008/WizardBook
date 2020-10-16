import React from "react";
import SlytherinPresenter from "./SlytherinPresenter";
import {SlytherinApi} from "../../api";
export default class extends React.Component {
  state={
    houseInfo:null,
    loading:true,
    error:null,
  }  
   async componentDidMount(){
    try{
      const {data} =await SlytherinApi.houseInfo();
      console.log(data);
      this.setState({houseInfo:data[0]});
    }catch(error){
      this.setState({error:"Can't find Information"});
    }finally{
      this.setState({loading:false});
    }
   }

  render() {
    const {houseInfo,loading, error} =this.state;
    return <SlytherinPresenter
      houseInfo={houseInfo}
      loading={loading}
      error={error}
    ></SlytherinPresenter>;
  }
}
