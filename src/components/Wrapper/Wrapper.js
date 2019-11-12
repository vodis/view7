import React from 'react';
import { connect } from 'react-redux';
import Cookies from '../../services/cookies';
import CombineRoutes from '../../routes/common.route';


const Wrapper = (props) => {
    return (
        <div className="container">
            <CombineRoutes {...props} cookie={() => Cookies.get()} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Wrapper);