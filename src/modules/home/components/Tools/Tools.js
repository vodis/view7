import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Checkbox from '../../../../components/Checkbox/Checkbox';
import { ThemeContext } from '../../../../components/Wrapper/Wrapper';

import './Tools.scss'

const Tools = (props) => {
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

    const [selected, setSelectedOption] = useState({
        selectedOption: 'light',
    });

    console.log(selected)
    return (
        <ThemeContext.Consumer>
            {theme => (
                <aside className={classNames('tools', 'tools__' + selected.selectedOption, { close: state.close }, { open: state.open })} >
                    <button className="tools__btn" onClick={() => setTogglePanel({
                        close: !state.close,
                        open: !state.open,
                    })}></button>
                    <div className="tools__container">
                        <Checkbox select={selectedOption => setSelectedOption({ selectedOption })} />
                    </div>
                </aside>
            )}
        </ThemeContext.Consumer>
    );
};

export default Tools;