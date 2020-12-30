import React, { Component } from "react";

import { Container } from "react-bootstrap";

import "../styles.css";

import Discord from "../images/discord.png";
import Drive from "../images/drive.png";
import Github from "../images/github.png";
import ACM from "../images/acm.png";

class Resources extends Component {
  state = {};
  render() {
    return (
      <Container>
        <br></br>
        <div class="row">
          <div class="col-lg-3" align="center">
            <a
              href="https://discord.gg/hVeuPNX4MY"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="discord" src={Discord} class="circle"></img>
            </a>
            <a
              href="https://discord.gg/hVeuPNX4MY"
              target="_blank"
              rel="noreferrer"
            >
              <h4 style={{ paddingTop: 15, color: "black" }}>Discord</h4>
            </a>
          </div>
          <div class="col-lg-3" align="center">
            <a href="acm.illinois.edu" target="_blank" rel="noreferrer">
              <img alt="acm" src={ACM} class="circle"></img>
            </a>
            <a href="acm.illinois.edu" target="_blank" rel="noreferrer">
              <h4 style={{ paddingTop: 15, color: "black" }}>ACM Website</h4>
            </a>
          </div>
          <div class="col-lg-3" align="center">
            <a
              href="https://github.com/nbalepur/SIGNLL-Fall-2020"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="github" class="circle" src={Github}></img>
            </a>
            <a
              href="https://github.com/nbalepur/SIGNLL-Fall-2020"
              target="_blank"
              rel="noreferrer"
            >
              <h4 style={{ paddingTop: 15, color: "black" }}>GitHub</h4>
            </a>
          </div>
          <div class="col-lg-3" align="center">
            <a
              href="https://drive.google.com/drive/folders/1CbqussylbW2MsGxeYmhugtO-TaBlmoCd?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Drive} alt="drive" class="circle"></img>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1CbqussylbW2MsGxeYmhugtO-TaBlmoCd?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <h4 style={{ paddingTop: 15, color: "black" }}>Google Drive</h4>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default Resources;
