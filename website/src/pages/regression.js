import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";

class Regression extends Component {
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/linear-and-logistic-regression-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/linear-and-logistic-regression-filled/v/1",
            }}
            download="regression.zip"
            allowSwitch={true}
            title="Linear and Logistic Regression"
            titleKey="Notebook"
            subtitle="This notebook discusses two of the most fundamental algorithms for NLP, linear and logistic regression. Afterwards, we give a quick preview of how these algorithms can be applied"
            badges={{
              title: "regression",
              badges: [
                { label: "linear regression", type: "topic" },
                { label: "logistic regression", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "matplotlib", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Slides",
        component: (
          <Slides
            title="Linear and Logistic Regression"
            titleKey="Slides"
            subtitle="This slideshow gives an overview of the theory behind regression, as well as an explanation of data collection and model validation"
            download="regression.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vQA38WH3xkJWdlTRXq_CrA0wQOO8C6fRCHguEoh11oCd4X_CXLUBO4eR1tGW2ADlTLTGbT2kaiTsdM_"
            badges={{
              title: "regression",
              badges: [
                { label: "linear regression", type: "topic" },
                { label: "logistic regression", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "matplotlib", type: "language" },
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

export default Regression;
