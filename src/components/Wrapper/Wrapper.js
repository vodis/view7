import React from 'react';
import { connect } from 'react-redux';
import Cookies from '../../services/cookies';
import CombineRoutes from '../../routes/common.route';

import { ThemeContext, themes } from '../../context/theme-context';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <div className="container">
                    <CombineRoutes {...this.props} cookie={() => Cookies.get()} />
                </div>
            </ThemeContext.Provider>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Wrapper);