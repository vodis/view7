import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Checkbox from '../../../../components/Checkbox/Checkbox';

import './Tools.scss'

const Tools = () => {
    const [close, setStyle] = useState(false);
    
    useEffect(() => {
        const timerID = setTimeout(() => {
            setStyle(true);
        }, 1000);
        return () => clearTimeout(timerID);
    }, [])

    return (
        <aside className={classNames('tools', { close })} >
            <button className="tools__btn"></button>
            <div className="tools__img"></div>
            <div className="tools__shelf"></div>
            <div className="tools__append-img"></div>
            <Checkbox />
        </aside>
    );
};

export default Tools;