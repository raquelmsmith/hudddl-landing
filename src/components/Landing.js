import React, { Component } from "react";
import Logo from "./Logo";
import "../css/Landing.css";
import SubscribeForm from "./SubscribeForm";
import SplitPane from "./layouts/SplitPane";
import FeatureSlider from "./FeatureSlider";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <SplitPane
          left={
            <div className="inner">
              <header className="Landing-header">
                <Logo />
              </header>
              <div className="main-content">
                <h2>Organizing events with friends is a pain.</h2>
                <p>But it doesn't have to be.</p>
                <p>
                  From <strong>weekly coding meetups</strong> to a
                  <strong> surprise birthday party</strong> for your best friend
                  -{" "}
                </p>
                <h3>hudddl makes it happen.</h3>
                <p>
                  Join the waitlist to do more of what you love with the people
                  you care about.
                </p>
                <SubscribeForm />
              </div>
            </div>
          }
          right={
            <div className="inner">
              <FeatureSlider />
            </div>
          }
        />
      </div>
    );
  }
}

export default Landing;
