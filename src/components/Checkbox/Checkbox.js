import React from 'react';

import './Checkbox.scss'

const Checkbox = () => {
    return (
        <div className="checkbox">
            <div className="checkbox__container">
                <h5>Color Scheme</h5>
                <hr />
                <div className="block-switch">
                    <input type="radio" className="block-switch__input" id="light-mode-check" value="light" />
                    <label className="block-switch__label" for="light-mode-check">Light Mode</label>
                </div>
                <div className="block-switch">
                    <input type="radio" className="block-switch__input" id="dark-mode-check" value="dark" checked />
                    <label className="block-switch__label" for="dark-mode-check">Dark Mode</label>
                </div>
            </div>
        </div>
    );
};

export default Checkbox;