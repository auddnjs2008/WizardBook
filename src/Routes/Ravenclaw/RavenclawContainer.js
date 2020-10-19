import React from "react";
import RavenclawPresenter from "./RavenclawPresenter";
import {RavenclawApi} from "../../api";


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
    const {houseInfo,loading,error,slider} = this.state;
    return <RavenclawPresenter
      houseInfo={houseInfo}
      loading={loading}
      error={error}
      slider={slider}
      handleLeftClick={this.handleLeftClick}
      handleRightClick={this.handleRightClick}
    ></RavenclawPresenter>;
  }
}
