import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./registerPage.css";
import { Form, Card, Button } from "tabler-react";
import pinstagradLogo from "../assets/PinstagradLogo.jpeg"


class myForm extends React.Component {
    render() {
        return (
            
            <div className="registerPage">
                <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet'></link>
                <div className="form">
                    <a href="/"> <img src={pinstagradLogo} alt="Pinstagrad Logo" height="142px" width="142px"/></a>
                </div>
                <div>
                    <h1>Sign up</h1>
                </div>

                <div className="form">
                    <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
                        <Form.Input className='loginTextBox' name='username' label='Username:' placeholder='Username' />
                        <Form.Input className='loginTextBox' name='password' label='Password:' placeholder='Password' />
                        <Button className='button' color="dark gray">Submit</Button>
                        
                    </Form>
                </div>
            </div>
        );
      }
}

  

export default myForm;
