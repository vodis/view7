import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../modules/auth/actions/auth.actions';

import './LeftSidebars.scss';

const LeftSidebars = (props) => (
    <div className="sidebar">
        <div className="sidebar__container">
            <h1>Wallpaper</h1>
            {props.children}
            <div className="logout">
                <div className="logout__btn" onClick={props.logOut}></div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
    };
};

export default connect(null, mapDispatchToProps)(LeftSidebars);