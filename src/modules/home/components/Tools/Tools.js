import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Checkbox from '../../../../components/Checkbox/Checkbox';

import './Tools.scss'

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
    }, [])

    return (
        <aside className={classNames('tools', { close: state.close }, { open: state.open })} >
            <button className="tools__btn" onClick={() => setTogglePanel({
                close: !state.close,
                open: !state.open,
            })}></button>
            <div className="tools__container">
                <Checkbox />
            </div>
        </aside>
    );
};

export default Tools;