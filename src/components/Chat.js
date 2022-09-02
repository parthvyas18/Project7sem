import React, { useState, useEffect } from "react";
import "../index.css";
import Card from "./Card";
const Chat = ({ visible }) => {
  var [msg, setmsg] = useState(" ");
  var [data, setdata] = useState([]);
  const takeMsg = (a) => {
    setdata(data.concat(msg));
    setmsg("");
  };
  const ChatData = () => {
    var dat = data.map((ind, val) => {
      return <p key={ind}>{ind}</p>;
    });
    return <div>{dat}</div>;
  };
  useEffect(() => {
    ChatData();
    console.log(data);
  }, [data]);
  if (visible) {
    return (
      <>
        <div className="h border d-flex flex-column justify-content-between">
          <div className="textBox border w pd5" style={{ height: "80%" }}>
            <ChatData />
          </div>
          <div className="ChatBox border w" style={{ height: "10%" }}>
            <input
              className=""
              type="text"
              placeholder="type..."
              value={msg}
              onChange={(e) => {
                setmsg(e.target.value);
              }}
            />
            <button type="" className="btn" onClick={takeMsg}></button>
          </div>
        </div>
      </>
    );
  }else{
    return(
      <>
        <div className="h border d-flex flex-column justify-content-between">
          <div><Card Name={"Farhan"}/></div>
          <div className="textBox border w pd5" style={{ height: "80%" }}>
            <ChatData />
          </div>
          <div className="ChatBox border w" style={{ height: "10%" }}>
            <input
              className=""
              type="text"
              placeholder="type..."
              value={msg}
              onChange={(e) => {
                setmsg(e.target.value);
              }}
            />
            <button type="" className="btn" onClick={takeMsg}></button>
          </div>
        </div>
      </>
    );
  }
};
export default Chat;
