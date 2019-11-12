import React from 'react';
import IncludedHome from '../modules/home/home.route';
import IncludedLogin from '../modules/auth/auth.route';
import IncludedPreLoader from '../components/PreLoader/PreLoader';

const CombineRoutes = (props) => {
    const { auth: { uid }, cookie } = props;
    const root = {};

    if (uid) root.page = 'home';
    if (uid === undefined && cookie !== undefined) root.page = 'auth';
    
    switch (root.page) {
        case 'home':
            console.log('home');
            return <IncludedHome {...props} />
        case 'auth':
            console.log('auth');
            return <IncludedLogin {...props} />
        default:
            console.log('prel')
            return <IncludedPreLoader {...props} />
    }
}

export default CombineRoutes;