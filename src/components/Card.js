import React from "react";
import user from '../images/userImg.png'
const Card = ({Name}) => {
  return (
    <div className="h  d-flex justify-content-center align-items-center" >
        <div className=" d-flex flex-column align-items-center" style={{ height: "60%" }}>
            <img className="" src={user} style={{width:'90%',height:'90%'}} alt="UserImg"/>
            <h1 className="wc"> {Name}</h1>
        </div>
    </div>
  );
};

export default Card;