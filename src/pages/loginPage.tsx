import React from 'react';

import "tabler-react/dist/Tabler.css"
import {Form, Card, Button } from "tabler-react"

import "./loginPage.css"

import pinstagradLogo from "../assets/PinstagradLogo.jpeg"


const App: React.FC = () => {
  return (

    <div className="loginPage">

        {/*  link correct font */ }
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>


        <img src={pinstagradLogo} alt="Pinstagrad Logo" />

        <div className="loginForm">
          <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
            <Form.Input className="loginTextBox" name='username' label='Username' placeholder='Enter Username' />
            <Form.Input className="loginTextBox" name='password' label='Password' type="password" placeholder='Enter Password' />
            <Button type='submit' value='Submit' />
          </Form>
        </div>

    </div>
  );
}

export default App;
