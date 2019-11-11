import React from 'react';
import IncludedHome from '../modules/home/home.route';
import IncludedLogin from '../modules/auth/auth.route';
import IncludedPreLoader from '../components/PreLoader/PreLoader';
import { connect } from 'react-redux';

const CombineRoutes = (props) => {
    const { authError, auth } = props;
    console.log(auth, authError);
    switch (!auth.isLoaded) {
        case true: 
            return <IncludedHome {...props} />;
        case false: 
            return <IncludedLogin {...props} />
        default: 
            return <IncludedPreLoader />
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        authError: state.authError,
    }
}

export default connect(mapStateToProps, null)(CombineRoutes);