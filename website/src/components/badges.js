import React, { Component } from "react";

class Badges extends Component {
  state = {};

  /**
   * Create badges
   */
  createBadges() {
    // declare objects
    var badge_obj = this.props.badges;
    var badges = [];

    for (var badge_num = 0; badge_num < badge_obj.badges.length; badge_num++) {
      // iterate through data
      var obj = badge_obj.badges[badge_num];
      var badge_id = obj.type
        .concat("-badge-")
        .concat(badge_obj.title)
        .concat(obj.label);

      // append appropriate object
      badges.push(
        <span
          id={badge_id}
          key={badge_id}
          class={"badge badge-pill badge-light"}
        >
          {obj.label}
        </span>
      );
    }

    // return value
    return badges;
  }

  render() {
    return <div>{this.createBadges()}</div>;
  }
}

export default Badges;
