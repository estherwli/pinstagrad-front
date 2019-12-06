import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./profile.css"
import { Avatar, Button, Dropdown } from "tabler-react";
 

const Profile: React.FC = () => {
  return (
    <div className="App">
            <header>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
      </header>



      <div className="container">

        <div>
          <img src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" className="logo" alt='logo'/>
        </div>

        <div className="title">
          <h1 className="titleText">PROFILE</h1>
        </div>

        <div className='heart'>
          <Button icon='heart' color="azure"></Button>
        </div>

        <div className='dropdown'>
          <Button.List>
            <Dropdown
              type="button"
              toggle
              color="secondary"
              items={[
                <Dropdown.Item>Home</Dropdown.Item>,
                <Dropdown.Item>Mission</Dropdown.Item>,
                <Dropdown.Item>Profile</Dropdown.Item>,
                <Dropdown.Item>Log Out</Dropdown.Item>
              ]}
            />
            <Dropdown
              value="Show Calendar"
              color="secondary"
              icon="calendar"
              items={[
                <Dropdown.Item>Dropdown Link</Dropdown.Item>,
                <Dropdown.Item>Dropdown Link</Dropdown.Item>,
              ]}
            />
            <Dropdown
              value="Show Calendar"
              color="primary"
              toggle

              items={[
                <Dropdown.Item>Dropdown Link</Dropdown.Item>,
                <Dropdown.Item>Dropdown Link</Dropdown.Item>,
              ]}
            />
          </Button.List>
        </div>

      </div>






      <div className="centredContent">

         <img src="https://media.gq.com/photos/5a74702054cb6a6e81fe34df/master/w_775%2Cc_limit/rich-brian-web-alex-reside13.jpg" className="profilePic" alt='profilePic'/>


        <h1><em>Username Here</em></h1>

        <div className="buttonDiv">
          <button color="yellow" className="uploadButton">Upload a Picture!</button>
        </div>


        <div className="linkDiv">
          <h2>To Your Uploaded Pictures</h2>>
          <input type="image" src="https://github.com/chelseyywang/pinstagrad/blob/master/arrow%201.png?raw=true" />
        </div>


      </div>

    </div>
  );

}

export default Profile;