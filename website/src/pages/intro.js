import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";

import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";

class Intro extends Component {
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
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/meeting-1-workbook-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/meeting-1-workbook-solutions/v/3",
            }}
            download="intro.zip"
            allowSwitch={true}
            title="Intro to Python and Numpy"
            titleKey="Notebook"
            subtitle="This notebook will give you practice with various numpy functions and data structures"
            badges={{
              title: "intro",
              badges: [
                { label: "introduction", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Jupyter Slides",
        component: (
          <Notebook
            notebooks={{
              blank:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/meeting-1-slides/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/meeting-1-slides/v/1",
            }}
            download="slides.ipynb"
            allowSwitch={false}
            title="Intro to Python and Numpy"
            titleKey="Jupyter Slides"
            subtitle="An introduction to Python and the numpy library, which will set us up
      for future projects"
            badges={{
              title: "intro",
              badges: [
                { label: "introduction", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Google Slides",
        component: (
          <Slides
            title="Intro to Python and Numpy"
            titleKey="Google Slides"
            subtitle="This slideshow gives a brief overview of NLP and the different projects we'll be covering"
            download="intro.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vTC3pXsIzYjYt5FACoRFCaS6pk9zZKLZ08y2lhmtxfQ6EUfHSgX4a51vxlTfOfCU6TE13O80OTjU3Sx"
            badges={{
              title: "intro",
              badges: [
                { label: "introduction", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
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

export default Intro;
