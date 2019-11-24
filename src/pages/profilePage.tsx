import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./profilePage.css"
import { Avatar, Button } from "tabler-react";
 

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
      </header>
        <img src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" className="logo" alt='logo'/>
        <h1 className="title">PROFILE</h1>
        <div className="pppic"><Avatar size="xxl" imageURL="https://media.gq.com/photos/5a74702054cb6a6e81fe34df/master/w_775%2Cc_limit/rich-brian-web-alex-reside13.jpg" /></div>
       
        
      
      <div><Button pill color="secondary">
              Upload Photo
      </Button></div>
      {/* <Button pill color="secondary">
              Your Feed
      </Button> */}
      <div className="ppquestion"><strong>Your Feed: </strong></div>
      {/* <button className="butt"> 
        <img src="https://github.com/chelseyywang/DZknow/blob/master/dzcursor.gif?raw=true"></img> 
      </button> */}
      {/* <input type="image" src="https://github.com/chelseyywang/DZknow/blob/master/dzcursor.gif?raw=true" /> */}
      <input type="image" src="https://github.com/chelseyywang/pinstagrad/blob/master/arrow%201.png?raw=true" />
    </div>
  );
}

export default App;
