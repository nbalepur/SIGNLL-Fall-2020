import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";
import HandwrittenDigit from "../components/handwritten_digit.js";

class NeuralNetwork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    tabs: [
      {
        name: "Jupyter Notebook",
        component: (
          <Notebook
            notebooks={{
              blank:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/neural-networks-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/neural-networks-filled/v/1",
            }}
            download="neural_networks.zip"
            allowSwitch={true}
            title="Neural Networks"
            titleKey="Notebook"
            subtitle="This notebook goes over how to create a neural network from scratch using numpy. Afterwards, we use our neural network to predict truth tables and recognize handwritten digits"
            badges={{
              title: "neuralnetworks",
              badges: [
                { label: "neural networks", type: "topic" },
                { label: "batch gradient descent", type: "topic" },
                { label: "truth tables", type: "topic" },
                { label: "image recognition", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "pil", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Slides",
        component: (
          <Slides
            title="Neural Networks"
            titleKey="Slides"
            subtitle="In these slides, we go over the theory behind neural networks and the principles of training and testing"
            download="neural_networks.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vTtSWdH6Uq46x6oBQ2ywECyvGFADwkyGHAS9F6Pntl_92tZs8s4-FvMBE-222HG_HxRNZQ2Ty9BGSZf"
            badges={{
              title: "neuralnetworks",
              badges: [
                { label: "neural networks", type: "topic" },
                { label: "batch gradient descent", type: "topic" },
                { label: "truth tables", type: "topic" },
                { label: "image recognition", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "pil", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Handwritten Digits Demo",
        component: (
          <HandwrittenDigit
            title="Neural Networks"
            titleKey="Demo"
            subtitle="In this demo, you can see what and how the computer predicts handwritten digits. Draw your own number and try it out!"
            badges={{
              title: "neuralnetworks",
              badges: [
                { label: "neural networks", type: "topic" },
                { label: "batch gradient descent", type: "topic" },
                { label: "truth tables", type: "topic" },
                { label: "image recognition", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "pil", type: "language" },
              ],
            }}
          />
        ),
      },
    ],
  };

  render() {
    return (
      <Container>
        <br></br>
        <Tab tabs={this.state.tabs} />
      </Container>
    );
  }
}

export default NeuralNetwork;
