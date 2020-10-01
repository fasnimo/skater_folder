import React, { Component } from 'react';
import SkateSelector from './SkateSelector';
import SkateShow from "./SkateShow"

class SkateContainer extends Component {

    render() {
        return (
            <div className="skates-container">
                <p>Welcome to SkateFinder</p>
                <p>Select your Skate Style</p>
                <SkateSelector/>
                <SkateShow />
            </div>
        );
    }
}

export default SkateContainer;
