import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Checkbox from '../../../../components/Checkbox/Checkbox';
import { ThemeContext } from '../../../../context/theme-context';

import './Tools.scss';

const Tools = () => {

    const [state, setTogglePanel] = useState({
        close: false,
        open: false,
    });
    
    useEffect(() => {
        const timerID = setTimeout(() => {
            setTogglePanel({
                close: true,
                open: false,
            });
        }, 1000);
        return () => clearTimeout(timerID);
    }, []);

    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <aside className={classNames('tools', 'tools--' + theme, { close: state.close }, { open: state.open })} >
                    <button className={"tools__btn tools__btn--" + theme} onClick={() => setTogglePanel({
                        close: !state.close,
                        open: !state.open,
                    })}></button>
                    <div className="tools__container">
                        <Checkbox select={selectedOption => toggleTheme({ selectedOption })} />
                    </div>
                </aside>
            )}
        </ThemeContext.Consumer>
    );
};

export default Tools;