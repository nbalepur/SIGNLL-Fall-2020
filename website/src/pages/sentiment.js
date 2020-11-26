import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";
import TweetSentiment from "../components/tweet_sentiment.js";

class Sentiment extends Component {
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/twitter-sentiment-analysis-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/twitter-sentiment-analysis-filled/v/1",
            }}
            download="sentiment_analysis.zip"
            allowSwitch={true}
            title="Sentiment Analysis"
            titleKey="Notebook"
            subtitle="In this notebook, we'll be applying logistic regression to extract sentiments from tweets"
            badges={{
              title: "sentiment",
              badges: [
                { label: "sentiment analysis", type: "topic" },
                { label: "frequency dictionary", type: "topic" },
                { label: "logistic regression", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
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
            title="Sentiment Analysis"
            titleKey="Slides"
            subtitle="These slides discuss the general algorithm for sentiment analysis and how we can apply it to tweets"
            download="sentiment_analysis.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vTDoz7tMofsHCYh-7MUBX_48w_29k8zby9iXrwlIhZr6Nmikv52_lE3MOAiK7UrkBk9RSrPsyiiet5I"
            badges={{
              title: "sentiment",
              badges: [
                { label: "sentiment analysis", type: "topic" },
                { label: "frequency dictionary", type: "topic" },
                { label: "logistic regression", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "pandas", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Custom Tweet Demo",
        component: (
          <TweetSentiment
            title="Sentiment Analysis"
            titleKey="Demo"
            subtitle="Here we have a demo of predicting the sentiment of tweets! Please note that this model was trained with very few samples and without the use of nltk due to the limitations of JavaScript. For the best results, type very descriptive messages"
            badges={{
              title: "sentiment",
              badges: [
                { label: "sentiment analysis", type: "topic" },
                { label: "frequency dictionary", type: "topic" },
                { label: "logistic regression", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
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

export default Sentiment;
