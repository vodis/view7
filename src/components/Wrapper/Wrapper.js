import React from 'react';
import { connect } from 'react-redux';
import Cookies from '../../services/cookies';
import CombineRoutes from '../../routes/common.route';

const themes = {
    light: "light",
    dark: "dark",
};

export const ThemeContext = React.createContext(themes.light);

const Wrapper = (props) => {
    return (
        <ThemeContext.Provider value={themes.light}>
            <div className="container">
                <CombineRoutes {...props} cookie={() => Cookies.get()} />
            </div>
        </ThemeContext.Provider>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Wrapper);