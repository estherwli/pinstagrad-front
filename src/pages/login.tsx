import React from 'react';
import "tabler-react/dist/Tabler.css"
import {Form, Button } from "tabler-react"
import { Link } from 'react-router-dom'

import "./login.css"

const Login: React.FC = () => {
  return (
    <div className="loginPage">
        <div className='left-navbar'>
          <img className='logo' src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" alt='logo'/>
          <p className='navbar-title'>pinstagrad</p>
        </div>
        
        <div>
          <h1 className='sign-in-title'>sign in</h1>
        </div>

        <div className="form">
          <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
            <Form.Input className="loginTextBox" name='username' label='username' placeholder='enter username' />
            <Form.Input className="loginTextBox" name='password' label='password' type="password" placeholder='enter password' />
          </Form>

          <Link to='/'><Button className='login-button' color="dark gray">submit</Button></Link>
        </div>

    </div>
  );
}

export default Login;
