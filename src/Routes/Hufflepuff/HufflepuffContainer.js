import React from "react";
import {HufflepuffApi} from "../../api";
import HufflepuffPresenter from "./HufflepuffPresenter";

export default class extends React.Component {
  state={
    houseInfo:null,
    loading:true,
    error:null,
    slider:React.createRef()
  }
  scrollSpeeder= (where)=>{
    const node= this.state.slider.current; 
    let speeder=0;
     let speed = setInterval(()=>{
       speeder +=5;
       
       if(where === "left" && node.scrollLeft !==0)
       {  
          node.scrollLeft -=speeder; 
       } 

       else if(where ==="right" && node.scrollRight !==node.offsetWidth)
       {
         node.scrollLeft +=speeder;
       }
       
       if(speeder ===70) {
        clearInterval(speed);
     }},30);
   } 




  handleLeftClick=()=>{
    this.scrollSpeeder("left");
  }

  handleRightClick=()=>{
    this.scrollSpeeder("right");
  }
  
  async componentDidMount(){
    try{
      const {data} = await HufflepuffApi.houseInfo();
      
      this.setState({houseInfo:data[0]});
    }catch(error){
      this.setState({error:"Can't find Information"});
    }finally{
      this.setState({loading:false});
    }

  }

  
  render() {
    const {houseInfo,error,loading,slider}=this.state;
    return <HufflepuffPresenter
      houseInfo={houseInfo}
      error={error}
      loading={loading}
      slider={slider}
      handleLeftClick={this.handleLeftClick}
      handleRightClick={this.handleRightClick}
    ></HufflepuffPresenter>;
  }
}
