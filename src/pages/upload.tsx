import React from "react";
import "tabler-react/dist/Tabler.css";
import "./upload.css";
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
          </div>
        </div>
      </>
    );
  }
}
