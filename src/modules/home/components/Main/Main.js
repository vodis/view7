import React from 'react';

import Gallery from '../Gallery/Gallery';
import SliderShow from '../SliderShow/SliderShow';

import "./Main.scss";

class Main extends React.Component { 
    render() {
        return (
            <div className="main">
                <SliderShow />
                <Gallery {...this.props} />
            </div>
        );
    }
};

export default Main;