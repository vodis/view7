import React from 'react';

import Gallery from '../Gallery/Gallery';
import SliderShow from '../SliderShow/SliderShow';

import { ThemeContext } from '../../../../context/theme-context';

import "./Main.scss";

class Main extends React.Component { 
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div className={"main main--" + theme}>
                        <SliderShow />
                        <Gallery {...this.props} />
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
};

export default Main;