import React, { Component } from "react";

import { wiki_article } from "../../backend/storage/summarization_storage.js";

class LoadAnimation extends Component {
  state = {};
  render() {
    return <div>{wiki_article}</div>;
  }
}

export default LoadAnimation;
