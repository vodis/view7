import React from 'react';
import IncludedHome from '../modules/home/home.route';
import IncludedAuth from '../modules/auth/auth.route';
import IncludedPreLoader from '../components/PreLoader/PreLoader';

const CombineRoutes = (props) => {
    const { auth: { uid }, cookie } = props;
    const root = {};

    if (uid) root.page = 'home';
    if (uid === undefined && cookie !== undefined) root.page = 'auth';
    
    switch (root.page) {
        case 'home':
            console.log('@Route to Home');
            return <IncludedHome {...props} />
        case 'auth':
            console.log('@Route to Auth');
            return <IncludedAuth {...props} />
        default:
            console.log('@Route to Loader')
            return <IncludedPreLoader />
    }
}

export default CombineRoutes;