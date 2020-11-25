import React, { Component } from "react";
import { Tabs } from "react-bootstrap";

import "../styles.css";

class Tab extends Component {
  state = {
    curr_tab: this.props.tabs[0].name,
  };

  createTabs() {
    var tabs = this.props.tabs;
    var tab_items = [];

    for (let tab_index = 0; tab_index < tabs.length; tab_index++) {
      tab_items.push(
        <Tab
          key={tabs[tab_index].name}
          id={
            tabs[tab_index].name === this.state.curr_tab
              ? "page-tab-active-".concat(tabs[tab_index].name)
              : "page-tab-".concat(tabs[tab_index].name)
          }
          eventKey={tabs[tab_index].name}
          title={tabs[tab_index].name}
        >
          {tabs[tab_index].name === this.state.curr_tab &&
            tabs[tab_index].component}
        </Tab>
      );
    }
    return tab_items;
  }

  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey={this.props.tabs[0].name}
          activeKey={this.state.curr_tab}
          class="nav nav-justified"
          onSelect={(key) => {
            this.setState({ curr_tab: key });
          }}
        >
          {this.createTabs()}
        </Tabs>
      </div>
    );
  }
}

export default Tab;
