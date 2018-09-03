import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <li>
        <a href="{this.props.link}">{this.props.anchor}</a>
      </li>
    );
  }
}

export default NavBar;
