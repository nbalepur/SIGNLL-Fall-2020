import React, { Component } from "react";

import Badges from "./badges.js";

class Subheader extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>
          {this.props.title.concat(":")}{" "}
          <span style={{ color: "#2185c5" }}>{this.props.titleKey}</span>
        </h3>

        <p>{this.props.subtitle}</p>
        <Badges badges={this.props.badges} />
      </div>
    );
  }
}

export default Subheader;
