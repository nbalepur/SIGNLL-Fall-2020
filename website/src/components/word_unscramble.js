import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";

import { buildTrie, unscrambleWord } from "../backend/trie_backend.js";

import "../styles.css";
import FlipMove from "react-flip-move";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

class WordUnscramble extends Component {
  state = {
    root: null,
    wordComponentFull: null,
    wordComponent: null,
    minLength: 2,
    maxLength: 5,
    range: [2, 5],
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
      if (key === "maxLength") {
        this.setState({ maxLength: value });

        let range = this.state.range;
        range[1] = value;
        this.setState({ range: range });

        continue;
      }
      if (key === "minLength") {
        this.setState({ minLength: value });

        let range = this.state.range;
        range[0] = value;
        this.setState({ range: range });

        continue;
      }

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

  updateComponent = (range) => {
    let children = this.state.wordComponentFull.props.children;
    let components = [children[0]];

    for (let child_index = 1; child_index < children.length; child_index++) {
      let child = children[child_index];
      let id = parseInt(child.key.substring(0, 1));

      if (id >= range[0] && id <= range[1]) {
        components.push(child);
      }

      this.setState({
        wordComponent: (
          <FlipMove
            enterAnimation="fade"
            leaveAnimation="fade"
            staggerDurationBy={250}
            duration={100}
          >
            {components}
          </FlipMove>
        ),
      });
    }

    //console.log(this.state.wordComponentFull);
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

          <div class="col-md-4">
            <label for="exampleFormControlTextarea1">
              Word Length Range:{" "}
              <span style={{ color: "#2185c5" }}>{this.state.range[0]}</span> to{" "}
              <span style={{ color: "#2185c5" }}>{this.state.range[1]}</span>
            </label>
            <Range
              id="trie-range"
              min={this.state.minLength}
              max={this.state.maxLength}
              defaultValue={this.state.range}
              value={this.state.range}
              step={1}
              onChange={(value) => {
                this.updateComponent(value);
                this.setState({ range: value });
              }}
              trackStyle={[{ backgroundColor: "#2185c5" }]}
            />
          </div>
        </div>
        <br></br>
        <br></br>
        {this.state.wordComponent}
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default WordUnscramble;
