import React, { Component } from "react";
import "../css/SubscribeForm.css";

class SubscribeForm extends Component {
  render() {
    return (
      <form class="subscribe-form">
        <input type="email" id="subscribe" placeholder="Join the Waitlist" />
        <button type="submit">→</button>
      </form>
    );
  }
}

export default SubscribeForm;
