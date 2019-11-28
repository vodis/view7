import React, { Component } from 'react';

import './Checkbox.scss'

class Checkbox extends Component {
    state = {
        selectedOption: "light"
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.selectedOption !== this.state.selectedOption) {
            nextProps.select(nextState.selectedOption)
        }
    }

    render() {
        const { selectedOption } = this.state;
        
        return (
            <div className="checkbox">
                <div className="checkbox__container">
                    <h5>Color Scheme</h5>
                    <hr />
                    <div className="block-switch">
                        <input 
                            type="radio" 
                            className="block-switch__input" 
                            id="light-mode-check" 
                            value="light"
                            checked={selectedOption === 'light'}
                            onChange={e => this.setState({ selectedOption: e.target.value })}
                        />
                        <label className="block-switch__label" htmlFor="light-mode-check">Light Mode</label>
                    </div>
                    <div className="block-switch">
                        <input 
                            type="radio" 
                            className="block-switch__input" 
                            id="dark-mode-check" 
                            value="dark" 
                            checked={selectedOption === 'dark'}
                            onChange={e => this.setState({ selectedOption: e.target.value })}
                        />
                        <label className="block-switch__label" htmlFor="dark-mode-check">Dark Mode</label>
                    </div>
                </div>
            </div>
        );
    }
};

export default Checkbox;