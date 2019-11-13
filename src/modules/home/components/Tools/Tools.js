import React, { useState, useEffect } from 'react';

import './Tools.scss'

const Tools = () => {
    const [active, setStyle] = useState();
    
    useEffect(() => {
        const timerID = setTimeout(() => {
            setStyle('open');
        }, 1000);
        return () => clearTimeout(timerID);
    }, [])

    return (
        <aside className={`tools ${active}`}>
            Tools
        </aside>
    );
};

export default Tools;