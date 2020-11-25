import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles.css";

class Header extends Component {
  state = {
    pages: [
      "Home",
      "Intro to Python and Numpy",
      "Linear and Logistic Regression",
      "Sentiment Analysis",
      "Neural Networks",
      "Chatbot Part 1",
      "Chatbot Part 2",
      "Text Summarization",
      "Tries",
      "Naive Bayes",
    ],
    page_map: {
      Home: "/SIGNLL-Fall-2020/",
      "Intro to Python and Numpy": "/SIGNLL-Fall-2020/intro",
      "Linear and Logistic Regression": "/SIGNLL-Fall-2020/regression",
      "Sentiment Analysis": "/SIGNLL-Fall-2020/sentiment_analysis",
      "Neural Networks": "/SIGNLL-Fall-2020/neural_networks",
      "Chatbot Part 1": "/SIGNLL-Fall-2020/chatbot_p1",
      "Chatbot Part 2": "/SIGNLL-Fall-2020/chatbot_p2",
      "Text Summarization": "/SIGNLL-Fall-2020/text_summarization",
      Tries: "/SIGNLL-Fall-2020/tries",
      "Naive Bayes": "/SIGNLL-Fall-2020/naive_bayes",
    },
  };

  /**
   * Creates a list of dropdown links
   */
  createListItems() {
    // declare our list of pages
    var pages = [];

    // iterate through each page
    for (var page_num = 0; page_num < this.state.pages.length; page_num++) {
      // grab the current page
      const curr_page = this.state.pages[page_num];

      // add the correct styling and links
      pages.push(
        <h4 key={this.state.page_map[curr_page]}>
          <Link
            to={this.state.page_map[curr_page]}
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
          >
            <a class="text-white" href={this.state.page_map[curr_page]}>
              <span
                style={{
                  color: this.props.page === curr_page ? "#92AD94" : "white",
                }}
                onClick={() => {
                  this.props.setPage(curr_page);
                }}
              >
                {curr_page}
              </span>
            </a>
          </Link>
        </h4>
      );
    }

    // return the page
    return pages;
  }

  render() {
    return (
      <div class="pos-f-t">
        <nav class="navbar navbar-dark bg-dark auto-ml">
          <h2 class="text-white">
            SIGNLL@UIUC:{" "}
            <span style={{ color: "#92AD94" }}>{this.props.page}</span>
          </h2>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbar-button"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">{this.createListItems()}</div>
        </div>
      </div>
    );
  }
}

export default Header;
