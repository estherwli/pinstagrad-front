import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./uploadPage.css"
import { Dropdown, Form, Button } from "tabler-react";
// import logo from './logo.svg';
//Form, Button, Dropdown


const App: React.FC = () => {
  return (
    <div className="App">
          <header>
              <link href="https://fonts.googleapis.com/css?family=Montserrat|Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
               <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
               <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
          </header>
          <img src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" className="logo" alt='logo'/>
          <h1 className="title">UPLOAD</h1>

          {/* <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
          <Form.Input name='username' label='cool beans' placeholder='Enter Username' />
          <Button type='submit' value='Submit' />
          </Form> */}
      <div className="form">
        <div className="question">Where was this photo taken? </div>
          <div className="drop">
          <Dropdown
              triggerContent="location"
                itemsObject={[
                { value: "Profile",},
                { isDivider: false },
                { value: "Logout", },
                { isDivider: false },
                { value: "Profile", },
                { isDivider: false },
                { value: "Logout", },
                { isDivider: false },
                { value: "Profile", },
                { isDivider: false },
                { value: "Logout" },
                ]}
            />
          </div>
          <div className="question">When was this photo taken? (season) </div>
          <Button.List>
          <Button pill color="secondary">
          <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></div>
          </Button>
          <Button pill color="secondary">
          <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></div>
          </Button>
          <Button pill color="secondary">
          <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></div>
          </Button>
          <Button pill color="secondary">
          <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></div>
          </Button>
          </Button.List>
          <div className="question">Time? </div>
          <div className="toggle">
          <Form.Group>
          <Form.SwitchStack>
          <Form.Switch type="radio" name="toggle" value="day" label="day" />
          <Form.Switch type="radio" name="toggle" value="night" label="night" />
          </Form.SwitchStack>
          </Form.Group>
          </div>
          <div className="question">Upload photo here: </div>
          <Button pill color="secondary">
              Upload Photo
          </Button>
      </div>
    </div>
  );
}

export default App;
