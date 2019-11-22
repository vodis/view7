import React from 'react';
import { connect } from 'react-redux';

import './SliderShow.scss';

class SliderShow extends React.Component {
    render() {
        const { url } = this.props;
        
        if (url === undefined) {
            return (
                <div className="slidershow">
                    <div className="slidershow__img-default"></div>
                </div>
            );
        }

        return ( 
            <div className="slidershow">
                <img className="slidershow__img" src={url[0]} alt={url[1]} />
            </div>
        );
    }
}

export default connect((state) => ({
    url: state.homeReducer.url,
}), null)(SliderShow);