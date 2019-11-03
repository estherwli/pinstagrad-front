import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./registerPage.css";
import { Form, Card, Button } from "tabler-react";


class myForm extends React.Component {
    render() {
        return (
            
            <div className="registerPage">
                <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet'></link>
                {/* <a href="/"> <img src="smiley.gif" alt="Logo" style="width:42px;height:42px;border:0;"/></a> */}
                <div>
                    <h1>Sign up</h1>
                </div>

                <div className="form">
                    <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
                        <Form.Input className='loginTextBox' name='username' label='Username' placeholder='Username' />
                        <Form.Input className='loginTextBox' name='password' label='Password' placeholder='Password' />
                        <Button className='button' color="primary">Submit</Button>
                        
                    </Form>
                </div>
            </div>
        );
      }
}

  

export default myForm;
