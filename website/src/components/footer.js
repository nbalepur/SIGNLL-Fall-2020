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
                rel="noreferrer"
              >
                Email
              </a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a
                class="text-white"
                href="https://drive.google.com/drive/folders/1CbqussylbW2MsGxeYmhugtO-TaBlmoCd?usp=sharing"
                target="blank"
                rel="noreferrer"
              >
                Google Drive
              </a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a
                class="text-white"
                href="https://github.com/nbalepur/SIGNLL-Fall-2020"
                target="blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
              <a
                class="text-white"
                href="https://discord.gg/hVeuPNX4MY"
                target="blank"
                rel="noreferrer"
              >
                Discord
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
