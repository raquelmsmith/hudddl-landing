import React, { Component } from "react";
import "../css/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default NavBar;
