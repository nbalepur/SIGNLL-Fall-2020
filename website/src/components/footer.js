import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="fixed-bottom">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <a
                class="text-white"
                href="mailto:balepur2@illinois.edu"
                target="blank"
              >
                Email
              </a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a
                class="text-white"
                href="https://www.linkedin.com/in/nishant-balepur-a03818107/"
                target="blank"
              >
                LinkedIn
              </a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a
                class="text-white"
                href="https://github.com/nbalepur"
                target="blank"
              >
                GitHub
              </a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
