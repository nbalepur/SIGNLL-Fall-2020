import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header.js";
import Footer from "./components/footer.js";

import Home from "./pages/home.js";
import Intro from "./pages/intro.js";
import Regression from "./pages/regression.js";
import Sentiment from "./pages/sentiment.js";
import NeuralNetwork from "./pages/neural_network.js";
import ChatbotPart1 from "./pages/chatbot_p1.js";
import ChatbotPart2 from "./pages/chatbot_p2.js";
import Summarization from "./pages/summarization.js";
import Tries from "./pages/tries.js";
import NaiveBayes from "./pages/naive_bayes.js";

class App extends Component {
  state = {
    page: "Home",
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  render() {
    return (
      <BrowserRouter>
        <Header page={this.state.page} setPage={this.setPage} />
        <Switch>
          <Route
            exact
            path="/SIGNLL-Fall-2020/"
            render={(props) => <Home {...props} setPage={this.setPage} />}
          />
          <Route path="/SIGNLL-Fall-2020/intro" component={Intro} />
          <Route path="/SIGNLL-Fall-2020/regression" component={Regression} />
          <Route
            path="/SIGNLL-Fall-2020/sentiment_analysis"
            component={Sentiment}
          />
          <Route
            path="/SIGNLL-Fall-2020/neural_networks"
            component={NeuralNetwork}
          />
          <Route path="/SIGNLL-Fall-2020/chatbot_p1" component={ChatbotPart1} />
          <Route path="/SIGNLL-Fall-2020/chatbot_p2" component={ChatbotPart2} />
          <Route
            path="/SIGNLL-Fall-2020/text_summarization"
            component={Summarization}
          />
          <Route path="/SIGNLL-Fall-2020/tries" component={Tries} />
          <Route path="/SIGNLL-Fall-2020/naive_bayes" component={NaiveBayes} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
