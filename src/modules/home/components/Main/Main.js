import React from 'react';

import Gallery from '../Gallery/Gallery';

import "./Main.scss";

class Main extends React.Component { 
    render() {
        return (
            <div className="main">
                <div className="main__slider" style={{height: '50%', width: '100%'}}>slider_show</div>
                <Gallery {...this.props} />
            </div>
        );
    }
};

export default Main;