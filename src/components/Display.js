import React from "react";
import Card from "./Card";
const Display = ({visible}) => {

  if(visible){
  return (
    
    <div className="h d-flex flex-column justify-content-around">
      <div className="" style={{ height: "10%" }}></div>
      <div className="d-flex justify-content-around" style={{ height: "70%" }}>
        <div  style={{width:"45%",background:'#373738',borderRadius:'1.5%'}}>
          <Card Name={"You"}/>
        </div>
        <div style={{width:"45%",background:'#373738',borderRadius:'1.5%'}}>
          <Card Name={"Farhan"}/>
        </div>
      </div>
    </div>
    
     
    
  );
  }else{
    return(
      <div></div>
    );
  }
};

export default Display;
