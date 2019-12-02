import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./uploadPage.css"
import { Dropdown, Form, Button } from "tabler-react";

// import logo from './logo.svg';
//Form, Button, Dropdown


const App: React.FC = () => {
  return (
   
    <div className="App">
          <header className="header">
              <link href="https://fonts.googleapis.com/css?family=Montserrat|Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
               <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans&display=swap" rel="stylesheet"></link>
               <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
               <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"></link>
          
          <img src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" className="logo" alt='logo'/>
        
          
          
          {/* <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
          <Form.Input name='username' label='cool beans' placeholder='Enter Username' />
          <Button type='submit' value='Submit' />
          </Form> */}
          
      <div className="form">
      <div className="up"><h1>UPLOAD</h1></div>
      <div className="question">Upload photo here: </div>
      <Button pill color="azure" >
              Upload Photo
          </Button>
        <div className="question">Where was this photo taken? </div>
          <div className="drop">
          <Dropdown
              triggerContent="location"
                itemsObject={[
                { value: "Ackerman",},
                { isDivider: false },
                { value: "Andersen", },
                { isDivider: false },
                { value: "Boelter", },
                { isDivider: false },
                { value: "Broad", },
                { isDivider: false },
                { value: "Bruin Bear", },
                { isDivider: false },
                { value: "Bunche" },
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
          {/* <div className="question">Upload photo here: </div> */}
          
          <Button pill color="azure">
              Upload!
          </Button>
      </div>
      {/* <div className="sidebar"> */}
      <div className='heart'>
          {/* <Button icon='heart' color="azure"></Button> */}
          <button><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9u%0D%0AZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2Zp%0D%0AbHRlcjBfaSkiPgo8cGF0aCBkPSJNNDAuMDAwMSA3MS4xNjY3TDM1LjE2NjcgNjYuNzY2N0MxOC4w%0D%0AMDAxIDUxLjIgNi42NjY3NSA0MC45MzMzIDYuNjY2NzUgMjguMzMzM0M2LjY2Njc1IDE4LjA2Njcg%0D%0AMTQuNzMzNCAxMCAyNS4wMDAxIDEwQzMwLjgwMDEgMTAgMzYuMzY2NyAxMi43IDQwLjAwMDEgMTYu%0D%0AOTY2N0M0My42MzM0IDEyLjcgNDkuMjAwMSAxMCA1NS4wMDAxIDEwQzY1LjI2NjcgMTAgNzMuMzMz%0D%0ANCAxOC4wNjY3IDczLjMzMzQgMjguMzMzM0M3My4zMzM0IDQwLjkzMzMgNjIuMDAwMSA1MS4yIDQ0%0D%0ALjgzMzQgNjYuOEw0MC4wMDAxIDcxLjE2NjdaIiBmaWxsPSIjNEU5Q0Q1Ii8+CjwvZz4KPGRlZnM+%0D%0ACjxmaWx0ZXIgaWQ9ImZpbHRlcjBfaSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9Ijg0%0D%0AIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVy%0D%0Acz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZElt%0D%0AYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0i%0D%0AQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUNvbG9yTWF0cml4IGluPSJT%0D%0Ab3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAw%0D%0AIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjQi%0D%0ALz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPgo8ZmVDb21wb3NpdGUgaW4yPSJo%0D%0AYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+CjxmZUNvbG9y%0D%0ATWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAg%0D%0AMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9InNoYXBlIiByZXN1%0D%0AbHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3ciLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="/>
           </button>

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
        {/* </div> */}
      </header>
    </div>
    
  );
}

export default App;
