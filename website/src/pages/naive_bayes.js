import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";

class NaiveBayes extends Component {
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/naive-bayes-classifier-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/naive-bayes-classifier-filled/v/1",
            }}
            download="naive_bayes.zip"
            allowSwitch={true}
            title="Naive Bayes"
            titleKey="Notebook"
            subtitle="In this notebook, we'll combine statistics and NLP to create a light-weight model to de-anonymize tweets"
            badges={{
              title: "naivebayes",
              badges: [
                { label: "de-anonymization", type: "topic" },
                { label: "naive bayes", type: "topic" },
                { label: "APIs", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "tweepy", type: "language" },
                { label: "matplotlib", type: "language" },
                { label: "pandas", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Slides",
        component: (
          <Slides
            title="Naive Bayes"
            titleKey="Slides"
            subtitle="In this presentation, we give an introduction to probability, statistics and bayes theorem, and then apply what we learned to the de-anonymization of tweets"
            download="naive_bayes.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vRFhGziJwPYxgqO_fNE2qwYtZe48R5ulsor7gxrOSrdyQIxHmtascTG6GhdVfrdwAMK9VM71P1OlREJ"
            badges={{
              title: "naivebayes",
              badges: [
                { label: "de-anonymization", type: "topic" },
                { label: "naive bayes", type: "topic" },
                { label: "APIs", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "tweepy", type: "language" },
                { label: "matplotlib", type: "language" },
                { label: "pandas", type: "language" },
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

export default NaiveBayes;
