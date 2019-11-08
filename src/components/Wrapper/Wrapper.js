import React from 'react';
import LeftSidebars from '../Layout/LeftSidebars';

const Wrapper = (props) => (
    <div className="container">
        <LeftSidebars />
        {props.children}
    </div>
);

export default Wrapper;