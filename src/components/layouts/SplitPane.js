import React, { Component } from 'react';
import '../../css/SplitPane.css';

class SplitPane extends Component {
    render() {
        return (
            <div className="split-pane">
                <div className="split-pane-left">
                    {this.props.left}
                </div>
                <div className="split-pane-right">
                    {this.props.right}
                </div>
            </div>
        )
    }
}

export default SplitPane;