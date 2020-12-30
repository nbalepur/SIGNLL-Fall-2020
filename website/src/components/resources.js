import React, { Component } from "react";

import { Container } from "react-bootstrap";

import "../styles.css";

import ACM from "../images/acm.png";
import Discord from "../images/discord.png";
import Drive from "../images/drive.png";
import Github from "../images/github.png";
import Gmail from "../images/gmail.png";

class Resources extends Component {
  state = {};
  render() {
    return (
      <Container>
        <br></br>
        <div class="row">
          <div class="col-lg-3" align="center">
            <img src={Discord} class="circle"></img>
            <h4 style={{ paddingTop: 15 }}>Discord</h4>
          </div>
          <div class="col-lg-3" align="center">
            <div class="circle">
              <img src={Gmail}></img>
            </div>
          </div>
          <div class="col-lg-3" align="center">
            <div class="circle">
              <img
                src={Github}
                style={{
                  display: "inline",
                  margin: 0,
                  height: "100%;",
                  width: "auto",
                }}
              ></img>
            </div>
          </div>
          <div class="col-lg-3" align="center">
            <div class="circle">
              <img src={Drive}></img>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Resources;
