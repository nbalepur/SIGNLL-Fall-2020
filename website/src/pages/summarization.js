import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";
import WikiSummary from "../components/wiki_summarization.js";

class Summarization extends Component {
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/text-summarization-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/text-summarization-filled/v/1",
            }}
            download="text_summarization.zip"
            allowSwitch={true}
            title="Text Summariaztion"
            titleKey="Notebook"
            subtitle="This notebook showcases how we can take an arbitrary Wikipedia page and pick the most representative sentences to form a coherent summary"
            badges={{
              title: "textsummarization",
              badges: [
                { label: "text summarization", type: "topic" },
                { label: "frequency dictionary", type: "topic" },
                { label: "word embeddings", type: "topic" },
                { label: "web scraping", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "pandas", type: "language" },
                { label: "beautifulsoup4", type: "language" },
              ],
            }}
          />
        ),
      },

      {
        name: "Slides",
        component: (
          <Slides
            title="Text Summarization"
            titleKey="Slides"
            subtitle="In these slides, we take a look at different types of summarization, a simple algorithm for summarizing text, and how to solve certain problems that arise from our algorithm"
            download="text_summarization.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vT_Oz4B-43abgnJJoMGv6svXd54LUs-VT_KSF5VPRUMblI1zkJYLtR7nsl7fVCyp1dtA_Z1iHELSdVZ"
            badges={{
              title: "textsummarization",
              badges: [
                { label: "text summarization", type: "topic" },
                { label: "frequency dictionary", type: "topic" },
                { label: "word embeddings", type: "topic" },
                { label: "web scraping", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "pandas", type: "language" },
                { label: "beautifulsoup4", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Summary Visualization",
        component: (
          <WikiSummary
            title="Text Summarization"
            titleKey="Demo"
            subtitle="In this demo, you'll be able to visualize how the summarization algorithm works!"
            badges={{
              title: "textsummarization",
              badges: [
                { label: "text summarization", type: "topic" },
                { label: "frequency dictionary", type: "topic" },
                { label: "word embeddings", type: "topic" },
                { label: "web scraping", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "nltk", type: "language" },
                { label: "pandas", type: "language" },
                { label: "beautifulsoup4", type: "language" },
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

export default Summarization;
