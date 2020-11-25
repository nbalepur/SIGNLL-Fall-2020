import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";

class ChatbotPart1 extends Component {
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/numpypart-1-customer-support-chatbot-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/numpypart-1-customer-support-chatbot-filled/v/1",
            }}
            download="chatbot_p1.zip"
            allowSwitch={true}
            title="Chatbot Part 1"
            titleKey="Numpy Notebook"
            subtitle="In this notebook, we'll train a customer support chatbot using pure Numpy"
            badges={{
              title: "chatbotp1",
              badges: [
                { label: "customer support chatbot", type: "topic" },
                { label: "neural networks", type: "topic" },
                { label: "bag of words", type: "topic" },
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/keraspart-1-customer-support-chatbot-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/keraspart-1-customer-support-chatbot-filled/v/1",
            }}
            download="chatbot_p1.zip"
            allowSwitch={true}
            title="Chatbot Part 1"
            titleKey="Keras and Tensorflow Notebook"
            subtitle="In this notebook, we'll train a customer support chatbot using Keras and Tensorflow"
            badges={{
              title: "chatbotp1",
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
        name: "Slides",
        component: (
          <Slides
            title="Chatbot Part 1"
            titleKey="Slides"
            subtitle="These slides explain what chatbots are used for, the intuition behind how they work, and a simple algorithm we can use to accomplish our task"
            download="chatbot_p1.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vQGMsG6SkRXnT_TRLcdPB-_au4C3SeCWnkMLqTZooUNCPJk0BdxqP70Y5PyuaSTuXt2bngKGj6gJkuE"
            badges={{
              title: "chatbotp1",
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

export default ChatbotPart1;
