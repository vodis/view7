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
                    <label className="block-switch__label" htmlFor="light-mode-check">Light Mode</label>
                </div>
                <div className="block-switch">
                    <input type="radio" className="block-switch__input" id="dark-mode-check" value="dark" />
                    <label className="block-switch__label" htmlFor="dark-mode-check">Dark Mode</label>
                </div>
            </div>
        </div>
    );
};

export default Checkbox;