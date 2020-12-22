import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";
import CustomerSupport from "../components/customer_support.js";

class ChatbotPart2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    tabs: [
      {
        name: "Numpy Jupyter Notebook",
        component: (
          <Notebook
            notebooks={{
              blank:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/numpypart-2-customer-support-chatbot-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/numpypart-2-customer-support-chatbot-filled/v/1",
            }}
            download="chatbot_p2.zip"
            allowSwitch={true}
            title="Chatbot Part 2"
            titleKey="Numpy Notebook"
            subtitle="In this notebook, we'll make predictions with a pre-trained chatbot model using pure Numpy"
            badges={{
              title: "chatbotp2",
              badges: [
                { label: "customer support chatbot", type: "topic" },
                { label: "neural networks", type: "topic" },
                { label: "bag of words", type: "topic" },
                { label: "multi-classification", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "json", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Keras Jupyter Notebook",
        component: (
          <Notebook
            notebooks={{
              blank:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/keraspart-2-customer-support-chatbot-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/keraspart-2-customer-support-chatbot-filled/v/1",
            }}
            download="chatbot_p2.zip"
            allowSwitch={true}
            title="Chatbot Part 2"
            titleKey="Keras and Tensorflow Notebook"
            subtitle="In this notebook, we'll make predictions with a pre-trained chatbot model using Keras and Tensorflow"
            badges={{
              title: "chatbotp2",
              badges: [
                { label: "customer support chatbot", type: "topic" },
                { label: "neural networks", type: "topic" },
                { label: "bag of words", type: "topic" },
                { label: "multi-classification", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "keras", type: "language" },
                { label: "tensorflow", type: "language" },
                { label: "nltk", type: "language" },
                { label: "json", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Slides",
        component: (
          <Slides
            title="Chatbot Part 2"
            titleKey="Slides"
            subtitle="In these slides, we review our chatbot algorithm, learn how we can make multi-class predictions, and analyze the output layer of an activated neural network"
            download="chatbot_p2.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vQjAfWgUEWuQseuWeIcyAsVyV0t2eymnTV74YgWzxVDF1u58OLKDrVbrX7eq8hZGJWnmBN_99hKqZMt"
            badges={{
              title: "chatbotp2",
              badges: [
                { label: "customer support chatbot", type: "topic" },
                { label: "neural networks", type: "topic" },
                { label: "bag of words", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "keras", type: "language" },
                { label: "tensorflow", type: "language" },
                { label: "nltk", type: "language" },
                { label: "json", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Chatbot Demo",
        component: (
          <CustomerSupport
            title="Chatbot Part 2"
            titleKey="Demo"
            subtitle="In this demo, you'll be able to interact with the chatbot that we built!"
            badges={{
              title: "chatbotp2",
              badges: [
                { label: "customer support chatbot", type: "topic" },
                { label: "neural networks", type: "topic" },
                { label: "bag of words", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "keras", type: "language" },
                { label: "tensorflow", type: "language" },
                { label: "nltk", type: "language" },
                { label: "json", type: "language" },
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

export default ChatbotPart2;
