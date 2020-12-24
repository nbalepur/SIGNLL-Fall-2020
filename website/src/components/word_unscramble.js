import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";

import { buildTrie, unscrambleWord } from "../backend/trie_backend.js";

import "../styles.css";
import FlipMove from "react-flip-move";
import FadeIn from "react-fade-in";

class WordUnscramble extends Component {
  state = {
    root: null,
    wordComponentFull: null,
    wordComponent: null,
  };

  componentDidMount() {
    let root = buildTrie();
    this.setState({ root: root });
    this.getUnscrambledWords(root);
  }

  getUnscrambledWords = (root, fadeIn) => {
    let input = document.getElementById("trie-input").value.trim();

    if (input.length === 0) {
      alert("Please enter some letters before unscrambling");
      return;
    }

    if (input.length < 2 || input.length > 20) {
      alert("Please enter a valid number of letters (between 2 and 20)");
      return;
    }

    if (!this.isAlpha(input)) {
      alert("Please only enter letters");
      return;
    }

    let wordObj = unscrambleWord(root, input);
    let component = this.createWordObjComponent(wordObj, fadeIn);
    console.log(component);
    this.setState({
      wordComponent: component,
      wordComponentFull: component,
    });
  };

  isAlpha = (word) => {
    word = word.toUpperCase();

    for (let letter_index = 0; letter_index < word.length; letter_index++) {
      let letter = word.charAt(letter_index);

      if (
        letter.charCodeAt(0) < "A".charCodeAt(0) ||
        letter.charCodeAt(0) > "Z".charCodeAt(0)
      ) {
        return false;
      }
    }

    return true;
  };

  createWordObjComponent = (wordObj) => {
    if (wordObj === null) {
      return (
        <FlipMove
          enterAnimation="fade"
          leaveAnimation="fade"
          staggerDurationBy={250}
          duration={100}
        >
          {[
            <h3 key="ahcrap" style={{ color: "#2185c5" }}>
              No words found :(
            </h3>,
          ]}
        </FlipMove>
      );
    }

    let components = [];

    for (const [key, value] of Object.entries(wordObj)) {
      components.push(
        <div key={key.toString() + value.toString()}>
          <h3>
            <span style={{ color: "#2185c5" }}>{key}</span> Letter Words
          </h3>

          <div
            class="row"
            style={{
              color: "#2185c5",
              backgroundColor: "#e6e7e8",
              borderRadius: 10,
            }}
          >
            <div class="col-md-12">
              <br></br>
            </div>
            {this.createWordComponent(value)}
            <div class="col-md-12">
              <br></br>
            </div>
          </div>

          <br></br>
        </div>
      );
    }

    components.push(
      <div>
        <h3>
          Generating all possible words with letters:{" "}
          <span style={{ color: "#2185c5" }}>
            {document
              .getElementById("trie-input")
              .value.trim()
              .toUpperCase()}
          </span>
        </h3>

        <hr></hr>
      </div>
    );

    return (
      <FlipMove
        enterAnimation="fade"
        leaveAnimation="fade"
        staggerDurationBy={250}
        duration={100}
      >
        {components.reverse()}
      </FlipMove>
    );
  };

  createWordComponent = (words) => {
    let components = [];
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
      components.push(
        <div class="col-md-3" align="center">
          <h4>
            <span class="unscrambled-words">{words[wordIndex]}</span>
          </h4>
        </div>
      );
    }
    return components;
  };

  render() {
    //console.log(this.state);
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
          <div class="col-md-4">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Type your letters below!
              </label>
              <textarea
                class="form-control"
                id="trie-input"
                rows="1"
                defaultValue="START"
              ></textarea>
            </div>
          </div>
          <div class="col-md-8">
            <button
              type="button"
              class="btn btn-primary unscramble-btn"
              onClick={() => this.getUnscrambledWords(this.state.root)}
            >
              Unscramble
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        {this.state.wordComponentFull}
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default WordUnscramble;
