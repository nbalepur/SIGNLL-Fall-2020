import React, { Component } from "react";

import Subheader from "./subheader.js";

import { Container } from "react-bootstrap";

import TacoBellLogo from "../images/TacoBellLogo.svg";
import SignllLogo from "../images/logo.png";

import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

import { predictIntent, getReply } from "../backend/chatbot_backend.js";

import "../styles.css";

class CustomerSupport extends Component {
  state = {
    chatBackgroundColor: "#853a85",
    inputBackgroundColor: "#bf8abf",
    messages: [
      <MessageBox
        position={"left"}
        type="text"
        avatar={TacoBellLogo}
        status={"read"}
        date=""
        text={
          "Hi! I am a bot offering support for Taco Bell. Ask me what I can do! To exit, say goodbye"
        }
      />,
    ],
  };

  sendReply = () => {
    let input = document.getElementById("chatbotp2-input").value;

    let chatMessages = this.state.messages;
    chatMessages.push(
      <MessageBox
        position={"right"}
        type="text"
        status={"read"}
        date=""
        avatar={SignllLogo}
        text={input}
      />
    );

    let intentArr = predictIntent(input.trim());

    intentArr.array().then((arr) => {
      let maxIndex = 0;
      for (let tagIndex = 1; tagIndex < arr[0].length; tagIndex++) {
        if (arr[0][tagIndex] > arr[0][maxIndex]) {
          maxIndex = tagIndex;
        }
      }

      let reply = getReply(maxIndex, arr[0][maxIndex]);
      chatMessages.push(...reply);

      this.setState({ messages: chatMessages });
      document.getElementById("chatbotp2-input").value = "";
    });
  };

  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <Subheader
          title={this.props.title}
          titleKey={this.props.titleKey}
          subtitle={this.props.subtitle}
          badges={this.props.badges}
        />
        <br></br>
        <br></br>

        <div class="row">
          <div
            class="col-xl-1"
            style={{ backgroundColor: "transparent" }}
          ></div>
          <div
            class="col-xl-10 overflow-auto"
            style={{
              height: 400,
              backgroundColor: this.state.chatBackgroundColor,
              borderRadius: 5,
            }}
          >
            <br></br>
            {this.state.messages.map((message) => message)}
            <br></br>
          </div>
          <div class="col-xl-1"></div>

          <div class="col-xl-1"></div>
          <br></br>
          <div
            class="col-xl-10"
            style={{
              backgroundColor: this.state.inputBackgroundColor,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <br></br>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="chatbotp2-input"
                    rows="1"
                    defaultValue="What can you do?"
                    placeholder="Enter your message here!"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-9"></div>
              <div class="col-sm-3" align="right">
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => {
                    document.getElementById("chatbotp2-input").value = "";
                  }}
                >
                  Clear
                </button>{" "}
                <button
                  type="button"
                  class="btn btn-dark"
                  onClick={this.sendReply}
                >
                  Send
                </button>
              </div>
            </div>
            <br></br>
          </div>
          <div class="col-xl-1"></div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default CustomerSupport;
