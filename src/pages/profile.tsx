import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./profile.css"
import Navbar from '../component/navbar'
import { Avatar, Button, Dropdown, Icon } from "tabler-react";
 

const Profile: React.FC = () => {
  return (
    <div className="App">
      <Navbar title="profile" />
      <div className="centredContent">
         <img src="https://i1.sndcdn.com/avatars-000662870861-y6319q-t500x500.jpg" className="profilePic" alt='profilePic'/>
          <div className="nameDiv">
            <h1>Rich Brian</h1>
          </div>   
          <div className="buttonDiv">
            <button color="yellow" className="uploadButton">Upload a Picture!</button>
          </div>
          <div className="linkDiv">
            <h5>To Your Uploaded Pictures</h5>
          <input type="image" src="https://github.com/chelseyywang/pinstagrad/blob/master/arrow%201.png?raw=true" />
        </div>
      </div>
    </div>
  );

}

export default Profile;