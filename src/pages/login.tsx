import React from 'react';
import "tabler-react/dist/Tabler.css"
import {Form, Button } from "tabler-react"

import "./login.css"

const Login: React.FC = () => {
  return (

    <div className="loginPage">
        <div>
          <h1>Sign in</h1>
        </div>

        <div className="form">
          <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
            <Form.Input className="loginTextBox" name='username' label='Username' placeholder='Enter Username' />
            <Form.Input className="loginTextBox" name='password' label='Password' type="password" placeholder='Enter Password' />
            <Button className='button' color="dark gray">Submit</Button>
          </Form>
        </div>

    </div>
  );
}

export default Login;
