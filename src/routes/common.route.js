import React from 'react';
import IncludedHome from '../modules/home/home.route';
import IncludedLogin from '../modules/auth/auth.route';
import IncludedPreLoader from '../components/PreLoader/PreLoader';

const CombineRoutes = (props) => {
    const auth = false;
    switch (auth) {
        case 'cookes': 
            return <IncludedPreLoader />
        case true: 
            return <IncludedHome {...props} />;
        default: 
            return <IncludedLogin {...props} />
    }
}

export default CombineRoutes;