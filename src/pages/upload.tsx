import React from "react";
import "tabler-react/dist/Tabler.css";
<<<<<<< HEAD
import "./upload.css";
=======
import "./upload.css"
<<<<<<< HEAD
>>>>>>> Added navbar with routing functionality
=======
import Navbar from '../component/navbar'
>>>>>>> Added images to feed and fixed formatting.
import { Dropdown, Form, Button } from "tabler-react";
import PhotoUp from "../assets/uploadphoto.svg";
import styled from "styled-components";
import Fall from "../assets/fall.png";
import Spring from "../assets/spring.png";
import Summer from "../assets/summer.png";
import Winter from "../assets/winter.png";

const UploadLabel = styled("label")`
  background: url(${PhotoUp}) #ffedad no-repeat center;
  padding: 30px;
  background-color: #ffedad;
`;

const PhotoUpload = styled("input")`
  position: absolute;
  top: -100vh;
`;

const WhereSelect = styled("select")``;

const WhereOpt = styled("option")``;

const SeasonDiv = styled("div")`
  display: flex;
  justify-content: space-around;
`;

<<<<<<< HEAD
// import logo from './logo.svg';
//Form, Button, Dropdown

export default class App extends React.Component<
  {},
  { picture: any; photoloc: String; season: String; time: String }
> {
  constructor(props) {
    super(props);
    this.displayPic = this.displayPic.bind(this);
    this.handleWhere = this.handleWhere.bind(this);
    this.handleSeason = this.handleSeason.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  SeasonButton = styled("div")`
    background: ${props => `url(${props.background})`} center no-repeat;
    background-size: 60% 60%;
    width: 3vw;
    height: 3vw;
    border-radius: 1vw;
    border: 1px black solid;
    background-color: ${props => {
      if (props.val == this.state.season) return "#45aaf2";
      else return "white";
    }};
  `;

  componentWillMount() {
    this.setState({
      picture: "null",
      photoloc: "royce"
    });
  }

  handleWhere(e) {
    console.log(e.target.value);
    this.setState({
      photoloc: e.target.value
    });
  }

  handleSeason(e) {
    this.setState({
      season: e.target.dataset.value
    });
  }

  handleTime(e) {
    console.log(e.target.value);
    this.setState({
      time: e.target.value
    });
  }

  displayPic(input) {
    console.log(input.target.files[0]);
    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById(
        "uploadlabel"
      ).style.background = `url(${e.target.result})`;
    };

    reader.readAsDataURL(input.target.files[0]);
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="c-form">
            <div className="photo-submission">
              <div className="question">upload photo here: </div>
              <UploadLabel className="upload-photo" id="uploadlabel">
                <PhotoUpload
                  type="file"
                  required
                  accept=".png"
                  onChange={this.displayPic}
                  background={this.state.picture}
                ></PhotoUpload>
              </UploadLabel>
            </div>
            <div className="form-submission">
              <div className="question">where was this photo taken? </div>
              <WhereSelect onChange={this.handleWhere}>
                <WhereOpt value="royce">royce</WhereOpt>
                <WhereOpt value="powell">powell</WhereOpt>
                <WhereOpt value="janss">janss</WhereOpt>
                <WhereOpt value="boelter">boelter</WhereOpt>
                <WhereOpt value="bruin bear">bruin bear</WhereOpt>
                <WhereOpt value="sculpture garden">sculpture garden</WhereOpt>
              </WhereSelect>

              <div className="question">
                when was this photo taken? (season){" "}
              </div>
              <SeasonDiv>
                <this.SeasonButton
                  background={Fall}
                  data-value="fall"
                  onClick={this.handleSeason}
                  val="fall"
                ></this.SeasonButton>
                <this.SeasonButton
                  background={Winter}
                  data-value="winter"
                  onClick={this.handleSeason}
                  val="winter"
                ></this.SeasonButton>
                <this.SeasonButton
                  background={Spring}
                  data-value="spring"
                  onClick={this.handleSeason}
                  val="spring"
                ></this.SeasonButton>
                <this.SeasonButton
                  background={Summer}
                  data-value="summer"
                  val="summer"
                  onClick={this.handleSeason}
                ></this.SeasonButton>
              </SeasonDiv>
              <div className="question">time? </div>
              <div className="toggle">
                <Form.Group>
                  <Form.SwitchStack>
                    <Form.Switch
                      type="radio"
                      name="toggle"
                      value="day"
                      label="day"
                      onClick={this.handleTime}
                    />
                    <Form.Switch
                      type="radio"
                      name="toggle"
                      value="night"
                      label="night"
                      onClick={this.handleTime}
                    />
                  </Form.SwitchStack>
                </Form.Group>
                <Button pill color="azure">
                  submit upload
                </Button>
              </div>
            </div>
=======
const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar title="upload" />
      <div className='top-bar'>
        <img className="logo" src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" alt='logo'/>
        <h1 className='title'><strong>upload</strong></h1>
        <div className='right-buttons'>
          {/* <Button className='heart-icon' icon='heart-icon' color="azure"><img className='heart-or' src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></Button> */}
          <button className='filter'><img className='heart-or' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA1MCA0OSIgZmlsbD0ibm9u%0D%0AZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUuMjg2%0D%0AOSIgY3k9IjI0LjYzNiIgcj0iMjQuMjg4OCIgZmlsbD0iIzZBQUFEOCIvPgo8cGF0aCBkPSJNMjQu%0D%0AOTM5MyAzNy4xNzczTDI2LjkyMTIgMzYuNTQ0MkMyNy4zMzU3IDM2LjQxMTkgMjcuNjE3IDM2LjAy%0D%0ANjcgMjcuNjE3IDM1LjU5MTZWMjkuMDE1NkMyNy42MTcgMjguODA0NSAyNy42ODM4IDI4LjU5ODkg%0D%0AMjcuODA3NyAyOC40MjgxTDM3LjA4MjkgMTUuNjUxOUMzNy41NjI4IDE0Ljk5MDkgMzcuMDkwNiAx%0D%0ANC4wNjQ1IDM2LjI3MzcgMTQuMDY0NUgxNC4zODczQzEzLjU1NyAxNC4wNjQ1IDEzLjA4ODQgMTUu%0D%0AMDE3OCAxMy41OTU1IDE1LjY3NTJMMjMuNDI2OSAyOC40MjA5QzIzLjU2MTkgMjguNTk1OSAyMy42%0D%0AMzUxIDI4LjgxMDcgMjMuNjM1MSAyOS4wMzE3VjM2LjIyNDdDMjMuNjM1MSAzNi45MDIgMjQuMjk0%0D%0AMiAzNy4zODMzIDI0LjkzOTMgMzcuMTc3M1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0i%0D%0AMS41Ii8+Cjwvc3ZnPgo="/></button>
          <button className='heart-two'><img className='heart-or' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9u%0D%0AZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwIDUzLjM3%0D%0ANUwyNi4zNzUgNTAuMDc1QzEzLjUgMzguNCA1IDMwLjcgNSAyMS4yNUM1IDEzLjU1IDExLjA1IDcu%0D%0ANSAxOC43NSA3LjVDMjMuMSA3LjUgMjcuMjc1IDkuNTI1IDMwIDEyLjcyNUMzMi43MjUgOS41MjUg%0D%0AMzYuOSA3LjUgNDEuMjUgNy41QzQ4Ljk1IDcuNSA1NSAxMy41NSA1NSAyMS4yNUM1NSAzMC43IDQ2%0D%0ALjUgMzguNCAzMy42MjUgNTAuMUwzMCA1My4zNzVaIiBmaWxsPSIjNkFBQUQ4Ii8+Cjwvc3ZnPgo="/></button>
          <div className='top-dropdown'>
            <Button.List>
              <Dropdown
                type="button"
                toggle
                color="secondary"
                items={[
                  <Dropdown.Item>home</Dropdown.Item>,
                  <Dropdown.Item>mission</Dropdown.Item>,
                  <Dropdown.Item>profile</Dropdown.Item>,
                  <Dropdown.Item>log out</Dropdown.Item>
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
>>>>>>> Added navbar with routing functionality
          </div>
        </div>
      </>
    );
  }
}
