import "./App.css";
import Display from "./components/Display";
import Chat from "./components/Chat";
import "./index.css";
import './styles/Home.css';
import './styles/Chat.css';
import {useEffect, useState,useRef} from 'react';
function App() {

  var [visibility,setVisibility]=useState(true);
  
  var [mediaStrm,setMediaStrm]=useState(null);
  var [usrstrm,setUsrstrm]=useState(null);
 
  const IsVisible = () => {
    setVisibility(!visibility);
    console.log(visibility);
  } 
  const MediaSet=(mediaStream) => {
    setUsrstrm(mediaStream)

  };
  const RemoteMediaSet=(remoteStream) => {
    setMediaStrm(remoteStream);
    
  };
  return (
    <>
      <div className="border Box" style={{ height: "100vh"}}>
        <div className="d-flex justify-content-around mt-2">
         
            <div className="pd5">
              <button onClick={(e) => {IsVisible()}}>Click</button>
            </div>
            
         
          <div className=" pd5" style={{height: "80vh",width:"75%"}}>
            <Display visible={visibility}  MediaSet={MediaSet} RemoteMediaSet={RemoteMediaSet} usrstrm={usrstrm} mediaStrm={mediaStrm}/>
          </div>
          <div className=" wbc Chat pd5" style={{ height: "95vh",width:"23%"}}>
            <Chat visible={visibility}  mediaStrm={mediaStrm}/>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
